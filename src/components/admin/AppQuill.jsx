import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme

export default function AppQuill({ value = '', className = '', placeholder = '' , onChange = () => {} }) {
    const { quill, quillRef } = useQuill({ placeholder });

    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(value);

            quill.on('text-change', () => {
                onChange(quill.root.innerHTML);
            });
        }
    }, [quill, value, onChange]);

    return (
        <div className={`app-quill ${className}`} style={{ height: "400px", width: "100%" }}>
            <div ref={quillRef} />
        </div>
    );
};
