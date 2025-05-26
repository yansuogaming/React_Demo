import { useTranslation } from "react-i18next";

import HotelHeader from "@components/hoteldetail/HotelHeader";
import HotelGallery from "@components/hoteldetail/HotelGallery";
import Breadcrumb from "@components/Breadcrumb";

const DetailHotel = () => {
    const { t } = useTranslation();
    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Hotel"), href: "/hotel" },
        { label: t("Vietnam"), href: "/region/vietnam" },
        { label: "Hanoi Veris Boutique Hotel & Spa" },
    ];
    return (
        <main className="container mx-auto">
            <section>
                <Breadcrumb
                    className="p-[16px_40px_28px_0] text-[14px]"
                    items={breadcrumdItems}
                />
            </section>
            <section>
                <HotelHeader />
            </section>
            <seciton>
                <HotelGallery />
            </seciton>
        </main>
    );
};
export default DetailHotel;
