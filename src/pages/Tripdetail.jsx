import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import CreateItineraryButton from '@components/button/CreateItineraryButton'
import InputTripLocation from '@components/input/InputTripLocation'
import InputDatePickerWithRangeTrip from '@components/input/InputDatePickerWithRangeTrip'
import Breadcrumb from '@components/Breadcrumb'

const TripDetail = () => {
    const { t } = useTranslation()
    const breadcrumdItems = [
        { label: t('home'), href: '/' },
        { label: t('Plan your trip'), href: '/' },
        { label: 'Trip Planner with AI' }
    ]

    return (
        <main>
            <section className="tripDetail">
                <div className="container mt-[16px]">
                    <Breadcrumb className="mb-[60px] mt-[30px]" items={breadcrumdItems} />
                    <div className="txt_desc_trip_details mb-[40px]">
                        <h2 className="text-[60px] text-center mb-[10px] text-[#1A2A44]">
                            {t("your_trip_details")}
                        </h2>
                        <div className="bg-gradient-to-r from-blue-100 to-pink-100 text[#007BFF] text-center py-[22px] px-[30px] max-w-xl mx-auto flex flex-col items-start rounded-lg">
                            <p className="text-[#007BFF] not-italic font-normal text-[18px]">
                                ✨ {t("ai_build_tailored")}
                            </p>
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto space-y-4">
                        <InputTripLocation />
                        <InputDatePickerWithRangeTrip />

                        <div className="max-w-xl mx-auto mt-10">
                            <p className="text-black-700 mb-[20px] font-medium leading-[150%]">
                                {t("travel_interested")}
                            </p>
                            <div className="flex flex-wrap gap-[12px]">
                                {[
                                    ["🔥", "Popular attractions", "/popular"],
                                    ["👨‍👩‍👧‍👦", "Family activities", "/family"],
                                    ["🛕", "History and culture", "/history"],
                                    ["🌿", "Nature, outdoors", "/nature"],
                                    ["🏕️", "Sports, adventure", "/adventure"],
                                    ["🛍️", "Shopping", "/shopping"],
                                    [
                                        "🎉",
                                        "Entertainment, nightlife",
                                        "/nightlife",
                                    ],
                                    ["🧘", "Relaxation", "/relax"],
                                    ["🍜", "Cuisine", "/cuisine"],
                                ].map(([icon, label, path]) => (
                                    <NavLink
                                        to={path}
                                        key={label}
                                        className="flex items-center bg-white p-[6px_15px] rounded-[80px] border border-[#D9D9D9] text-sm text-black text-[16px] gap-[8px] hover:shadow transition"
                                    >
                                        <span>{icon}</span>
                                        <span>{label}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <CreateItineraryButton className="mt-[40px] mx-auto" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TripDetail;
