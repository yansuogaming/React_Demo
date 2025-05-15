import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import {
    $isTextNode,
    isHTMLElement,
    ParagraphNode,
    TextNode,
} from 'lexical';
import ToolbarPlugin from './ToolbarPlugin';

const constructImportMap = () => {
    const importMap = {};

    // Wrap all TextNode importers with a function that also imports
    // the custom styles implemented by the playground
    for (const [tag, fn] of Object.entries(TextNode.importDOM() || {})) {
        importMap[tag] = (importNode) => {
            const importer = fn(importNode);
            if (!importer) {
                return null;
            }
            return {
                ...importer,
                conversion: (element) => {
                    const output = importer.conversion(element);
                    if (
                        output === null ||
                        output.forChild === undefined ||
                        output.after !== undefined ||
                        output.node !== null
                    ) {
                        return output;
                    }
                    const extraStyles = getExtraStyles(element);
                    if (extraStyles) {
                        const { forChild } = output;
                        return {
                            ...output,
                            forChild: (child, parent) => {
                                const textNode = forChild(child, parent);
                                if ($isTextNode(textNode)) {
                                    textNode.setStyle(textNode.getStyle() + extraStyles);
                                }
                                return textNode;
                            },
                        };
                    }
                    return output;
                },
            };
        };
    }

    return importMap;
};

const MIN_ALLOWED_FONT_SIZE = 8;
const MAX_ALLOWED_FONT_SIZE = 72;

const parseAllowedFontSize = (input) => {
    const match = input.match(/^(\d+(?:\.\d+)?)px$/);
    if (match) {
        const n = Number(match[1]);
        if (n >= MIN_ALLOWED_FONT_SIZE && n <= MAX_ALLOWED_FONT_SIZE) {
            return input;
        }
    }
    return '';
};

function parseAllowedColor(input) {
    return /^rgb\(\d+, \d+, \d+\)$/.test(input) ? input : '';
}

const getExtraStyles = (element) => {
    // Parse styles from pasted input, but only if they match exactly the
    // sort of styles that would be produced by exportDOM
    let extraStyles = '';
    const fontSize = parseAllowedFontSize(element.style.fontSize);
    const backgroundColor = parseAllowedColor(element.style.backgroundColor);
    const color = parseAllowedColor(element.style.color);
    if (fontSize !== '' && fontSize !== '15px') {
        extraStyles += `font-size: ${fontSize};`;
    }
    if (backgroundColor !== '' && backgroundColor !== 'rgb(255, 255, 255)') {
        extraStyles += `background-color: ${backgroundColor};`;
    }
    if (color !== '' && color !== 'rgb(0, 0, 0)') {
        extraStyles += `color: ${color};`;
    }
    return extraStyles;
};

const removeStylesExportDOM = (
    editor,
    target,
) => {
    const output = target.exportDOM(editor);
    if (output && isHTMLElement(output.element)) {
        // Remove all inline styles and classes if the element is an HTMLElement
        // Children are checked as well since TextNode can be nested
        // in i, b, and strong tags.
        for (const el of [
            output.element,
            ...output.element.querySelectorAll('[style],[class],[dir="ltr"]'),
        ]) {
            el.removeAttribute('class');
            el.removeAttribute('style');
            if (el.getAttribute('dir') === 'ltr') {
                el.removeAttribute('dir');
            }
        }
    }
    return output;
};

const exportMap = new Map([
    [ParagraphNode, removeStylesExportDOM],
    [TextNode, removeStylesExportDOM],
]);

const theme = {
    code: 'editor-code',
    heading: {
        h1: 'editor-heading-h1',
        h2: 'editor-heading-h2',
        h3: 'editor-heading-h3',
        h4: 'editor-heading-h4',
        h5: 'editor-heading-h5',
    },
    image: 'editor-image',
    link: 'editor-link',
    list: {
        listitem: 'editor-listitem',
        nested: {
            listitem: 'editor-nested-listitem',
        },
        ol: 'editor-list-ol',
        ul: 'editor-list-ul',
    },
    ltr: 'ltr',
    paragraph: 'editor-paragraph',
    placeholder: 'editor-placeholder',
    quote: 'editor-quote',
    rtl: 'rtl',
    text: {
        bold: 'editor-text-bold',
        code: 'editor-text-code',
        hashtag: 'editor-text-hashtag',
        italic: 'editor-text-italic',
        overflowed: 'editor-text-overflowed',
        strikethrough: 'editor-text-strikethrough',
        underline: 'editor-text-underline',
        underlineStrikethrough: 'editor-text-underlineStrikethrough',
    },
};

const editorConfig = {
    html: {
        export: exportMap,
        import: constructImportMap(),
    },
    namespace: 'React.js Demo',
    nodes: [ParagraphNode, TextNode],
    onError(error) {
        throw error;
    },
    theme: theme,
};

const AppLexical = ({ placeholder }) => {
    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
                <ToolbarPlugin />
                <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable
                                className="editor-input"
                                aria-placeholder={placeholder}
                                placeholder={
                                    <div className="editor-placeholder">{placeholder}</div>
                                }
                            />
                        }
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                </div>
            </div>
        </LexicalComposer>
    )
}

export default AppLexical;