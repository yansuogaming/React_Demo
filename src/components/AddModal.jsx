const AddModal = ({ show, onClose, onAdd }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
                <h3 className="font-semibold text-lg mb-4">Add Attraction</h3>
                <p className="text-sm text-gray-500 mb-4">
                    This is a placeholder. Replace with form later.
                </p>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-md border"
                    >
                        Close
                    </button>
                    <button
                        onClick={onAdd}
                        className="px-4 py-2 rounded-md bg-blue-500 text-white"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddModal;
