import React, { useEffect, useId } from "react";

export default function AppEditor({ value = '', onChange = () => {} }) {
    const id = useId();

    useEffect(() => {
        // eslint-disable-next-line no-undef
        tinymce.init({
            selector: `#${id}`,
            height: 600,
            menubar: true,
            branding: false,
            plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks visualchars code fullscreen",
                "insertdatetime media nonbreaking table emoticons paste",
                "wordcount help autosave directionality template pagebreak hr toc tableofcontents",
            ],
            toolbar:
                "undo redo | formatselect | fontsizeselect | fontselect | " +
                "bold italic underline strikethrough forecolor backcolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | link image media | " +
                "removeformat code fullscreen preview print | help",
            content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            autosave_interval: "30s",
            autosave_retention: "2m",
            image_caption: true,
            image_title: true,
            automatic_uploads: true,
            relative_urls: false,
            remove_script_host: false,
            setup: (editor) => {
                editor.on("change", () => {
                    onChange(editor.getContent());
                });
            }
        });

        return () => {
            // eslint-disable-next-line no-undef
            const editor = tinymce.get(id);
            if (editor) {
                editor.remove();
            }
        }
    }, []);

    useEffect(() => {
        // eslint-disable-next-line no-undef
        const editor = tinymce.get(id);
        if (editor && editor.getContent() !== value) {
            editor.setContent(value);
        }
    }, [value]);

    return <textarea id={id} value={value} onChange={(e) => onChange(e.target.value)} />;
}
