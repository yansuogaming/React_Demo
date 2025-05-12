const ConfirmModal = ({ show, onClose, onConfirm, title, description }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
                <h3 className="font-semibold text-lg mb-4">{title}</h3>
                <p className="text-sm mb-4 text-gray-600">{description}</p>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-md border text-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-md bg-red-500 text-white"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
