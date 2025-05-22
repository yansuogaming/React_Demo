import { cn } from "@lib/utils";
import { useId } from "react";

export default function UploadImage({
    onChange = () => {},
    imagePreview = '',
    className = ''
}) {
    const id = useId();

    return (
        <div className={cn(
            'bg-white rounded-lg shadow-md',
            'overflow-hidden items-center',
            className
        )}>
            <div className="p-4">
                <div
                    className={cn(
                        'p-6 bg-gray-100 border-dashed',
                        'border-2 border-gray-400 rounded-lg items-center',
                        'mx-auto text-center cursor-pointer'
                    )}
                >
                    <input
                        id={id}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={onChange}
                    />
                    <label htmlFor={id} className="cursor-pointer relative">
                        {imagePreview.length > 0 ? (
                            <img src={imagePreview} className="w-full" />
                        ) : (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8 text-gray-700 mx-auto mb-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                    />
                                </svg>
                                <p className="font-normal text-sm text-gray-400 md:px-6">
                                    Chọn ảnh có kích thước nhỏ hơn{" "}
                                    <b className="text-gray-600">5mb</b>
                                </p>
                                <p className="font-normal text-sm text-gray-400 md:px-6">
                                    và ở định dạng{" "}
                                    <b className="text-gray-600">JPG, PNG hoặc GIF</b>
                                </p>
                                <span
                                    id="filename"
                                    className="text-gray-500 bg-gray-200 z-50"
                                ></span>
                            </>
                        )}
                    </label>
                </div>
            </div>
        </div>
    );
}
