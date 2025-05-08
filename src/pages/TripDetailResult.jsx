import { useState } from "react";
import TabButtons from "@components/TabButtons";
import SpotsContent from "@components/SpotsContent";
import ItineraryContent from "@components/ItineraryContent";
import NotesContent from "@components/NotesContent";
import ConfirmModal from "@components/ConfirmModal";
import AddModal from "@components/AddModal";

const TripDetailResult = () => {
    const [activeTab, setActiveTab] = useState("spots");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <main>
            <div className="relative grid w-full grid-cols-12 bg-[#F8FAFC]">
                <div className="col-span-12 md:col-span-8">
                    <TabButtons
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    <div className="p-[25px_20px]">
                        {activeTab === "spots" && (
                            <SpotsContent setShowAddModal={setShowAddModal} />
                        )}
                        {activeTab === "itinerary" && <ItineraryContent />}
                        {activeTab === "notes" && <NotesContent />}
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <img
                        src="https://www.vietnambooking.com/wp-content/uploads/2020/12/thoi-gian-bay-tu-can-tho-den-hanoi-18122020-1.jpg"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>
            <ConfirmModal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={() => setShowDeleteModal(false)}
                title="Delete attraction?"
                description="Are you sure you want to remove this attraction?"
            />
            <AddModal
                show={showAddModal}
                onClose={() => setShowAddModal(false)}
                onAdd={() => setShowAddModal(false)}
            />
        </main>
    );
};

export default TripDetailResult;
