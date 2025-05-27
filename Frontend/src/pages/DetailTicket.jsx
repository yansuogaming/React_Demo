import Reveal from "@components/animation/Reveal";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import mapBackground from "@images/map-background.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@components/ui/carousel";
import { Calendar, Clock, Info, MapPin, Minus, Plus, Star } from "lucide-react";
import React, { useState } from "react";
import { BsLightning } from "react-icons/bs";
import Rating from "@components/detailTicket/Rating";

function DetailTicket() {
    return (
        <div className="container mx-auto">
            <CarouselImage />
            <Content />
            <Location />
            <Rating/>
        </div>
    );
}

export default DetailTicket;

const Location = () => {
    return (
        <div className="flex flex-col gap-3 ">
            <h3 className="text-2xl font-semibold text-[#1c1c1c]">
                Địa điểm
            </h3>
            <div className="flex items-center gap-2 text-base text-[#666666]">
                <MapPin className="w-4 h-4" />
                <span className="text-base">QL14G, Hoà Phú, Hòa Vang, Đà Nẵng, Vietnam</span>
            </div>
            <img src={mapBackground} alt="map" className="w-full h-60 rounded-2xl" />
        </div>
    );
};

const Content = () => {
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [selectedPackage, setSelectedPackage] = useState("standard");

    const adultPrice = 570000;
    const childPrice = 285000;
    const total = adultCount * adultPrice + childCount * childPrice;

    return (
        <div className="w-full mx-auto p-6 bg-[#ffffff]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-[#000000]">
                            Vé công viên suối khoáng nóng Núi Thần Tài
                        </h1>

                        <div className="flex items-center gap-4 text-base text-[#666666]">
                            <div className="flex items-center gap-1">
                                <span className="text-[#fbbc04] font-semibold">
                                    4.0
                                </span>
                                <div className="flex">
                                    {[1, 2, 3, 4].map((i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]"
                                        />
                                    ))}
                                    <Star className="w-4 h-4 text-[#dadce0]" />
                                </div>
                                <span>13.754 đánh giá</span>
                            </div>
                            <span className="text-[#238ba4]">
                                Điểm tham quan
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-base text-[#666666]">
                            <MapPin className="w-4 h-4" />
                            <span>Đà Nẵng hôm nay</span>
                        </div>

                        <div className="flex items-center gap-2 text-base text-[#666666]">
                            <span>Xác nhận tức thời</span>
                        </div>
                    </div>

                    {/* Tour Information */}
                    <div className="space-y-4 flex flex-col">
                        <h2 className="text-2xl font-semibold text-[#1c1c1c]">
                            Thông tin điểm tham quan
                        </h2>

                        <div className="space-y-4 text-[#666666] text-base leading-relaxed">
                            <p>
                                Được bao quanh bởi những ngọn núi, Núi Thần Tài
                                được thiên nhiên ưu ái cho tâm nhìn toàn cảnh ra
                                hướng thư rung xanh tốt, có mạch nước ngầm,
                                nhiều động suối, và suối khoáng nóng tự nhiên.
                                Tâm bùn, tắm khoáng nóng, chăm chữ trong hồ là
                                những phương pháp thúy trị liệu đặc đáo có tác
                                dụng giúp thư giãn, chữa trị yết thương và giảm
                                căng thẳng.
                            </p>

                            <p>
                                Ngoài ra, tâm ơmen theo phong cách Nhật Bản tại
                                khu du lịch Núi Thần Tài là một trải nghiệm độc
                                đáo tại Việt Nam. Thực hiện một tour Núi Thần
                                Tài vào những ngày cuối chuyến du lịch Đà Nẵng
                                là giải pháp tối ưu giúp bạn lấy lại tinh thần,
                                trẻ hóa làn da trước khi trở lại với công việc
                                thường ngày.
                            </p>

                            <p>
                                Learn more about Vietnam's Buddhist origins and
                                ancient history in this tour. Get to visit
                                Marble Mountain and its complex of five marble
                                and limestone hills that represent the five main
                                elements of the universe - Iron Mountain (Kim),
                                Wood Mountain (Moc), Water Mountain (Thuy), Fire
                                Mountain (Hoa), and Earth Mountain (Tho).
                                Explore these nature works and discover Buddhist
                                pilgrimage sites and sanctuaries, such as Tam
                                Thai Pagoda and Linh Ung Pagoda. Head down to
                                the foot of the mountain and meet the skilled
                                artisans of Non Nuoc Stone Sculpture Village.
                                After an educational interaction with the
                                locals, head to Nui An Loi. Fill up on local
                                flavors for dinner in a village around the
                                beginning.
                            </p>
                        </div>

                        <div className="text-[#238ba4 self-center flex-1 text-base font-medium">
                            Xem thêm
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card className={"bg-[#F5F5F5]"}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-[#1c1c1c]">
                                    ₫ 260,000
                                </span>
                                <span className="text-lg text-[#999999] line-through">
                                    ₫ 300,000
                                </span>
                            </div>
                            <span className="flex items-start gap-2 text-base">
                                <p className="text-base text-[#666666]">
                                    Giá hót đặc quyền hoặc hoàn tiền
                                </p>
                                <Info className="w-4 h-4" />
                            </span>
                            <span className="flex items-start gap-2 text-base">
                                <Clock className="w-4 h-4" />
                                <p className="text-base text-[#666666]">
                                    Đặt ngay hôm nay
                                </p>
                            </span>
                            <span className="flex items-start gap-2 text-base">
                                <BsLightning className="w-4 h-4 text-[#ff5b00]" />
                                <p className="text-base text-[#666666]">
                                    Đặt ngay hôm nay
                                </p>
                            </span>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button className="w-full bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white">
                                Chọn các gói dịch vụ
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6 bg-[#F5F5F5]  p-7">
                    {/* Booking Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-[#1c1c1c]">
                            Lựa chọn ngày & dịch vụ
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-base font-medium text-[#1c1c1c] mb-2">
                                    Loại gói dịch vụ
                                </label>
                                <div className="flex flex-wrap gap-2 gap-y-4 row-">
                                    <Button
                                        variant={
                                            selectedPackage === "standard"
                                                ? "default"
                                                : "outline"
                                        }
                                        onClick={() =>
                                            setSelectedPackage("standard")
                                        }
                                        className="text-base"
                                    >
                                        Gói tiêu chuẩn
                                    </Button>
                                    <Button
                                        variant={
                                            selectedPackage === "special"
                                                ? "default"
                                                : "outline"
                                        }
                                        onClick={() =>
                                            setSelectedPackage("special")
                                        }
                                        className="text-base"
                                    >
                                        Gói Đặc Biệt (hoạt chiều 14:00 - 17:30)
                                    </Button>
                                    <Button
                                        variant={
                                            selectedPackage === "accumulate"
                                                ? "default"
                                                : "outline"
                                        }
                                        onClick={() =>
                                            setSelectedPackage("accumulate")
                                        }
                                        className="text-base bg-[#FF5B001A] text-[#FF5B00] hover:bg-[#ff5b00]/90 hover:text-white border-[#ff5b00]"
                                    >
                                        Gói Tích Lũy (kèm bữa trưa)
                                    </Button>
                                </div>
                            </div>

                            <Button variant="outline" className="text-base">
                                Gói Ngủ Khỉ (kèm cắm bùn)
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-base font-medium text-[#1c1c1c] mb-2">
                                    Ngày tham quan
                                </label>
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-2 text-base bg-[#ff5b00] text-white border-[#ff5b00] hover:bg-[#ff5b00]/90"
                                >
                                    <Calendar className="w-4 h-4" />
                                    25/08/2022
                                </Button>
                            </div>

                            <div>
                                <label className="block text-base font-medium text-[#1c1c1c] mb-4">
                                    Số lượng
                                </label>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-medium text-[#1c1c1c]">
                                                Người lớn
                                            </div>
                                            <div className="text-[#ff5b00] font-semibold">
                                                570,000 ₫
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={() =>
                                                    setAdultCount(
                                                        Math.max(
                                                            0,
                                                            adultCount - 1
                                                        )
                                                    )
                                                }
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span className="w-8 text-center">
                                                {adultCount}
                                            </span>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={() =>
                                                    setAdultCount(
                                                        adultCount + 1
                                                    )
                                                }
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-medium text-[#1c1c1c]">
                                                Trẻ em ( từ 6 - 14 tuổi )
                                            </div>
                                            <div className="text-[#ff5b00] font-semibold ">
                                                285,000 ₫
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={() =>
                                                    setChildCount(
                                                        Math.max(
                                                            0,
                                                            childCount - 1
                                                        )
                                                    )
                                                }
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span className="w-8 text-center">
                                                {childCount}
                                            </span>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={() =>
                                                    setChildCount(
                                                        childCount + 1
                                                    )
                                                }
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t">
                                <div>
                                    <div className="text-base text-[#666666]">
                                        Tổng tiền
                                    </div>
                                    <div className="text-xl font-bold text-[#ff5b00]">
                                        {total.toLocaleString()} ₫
                                    </div>
                                </div>
                                <Button className="bg-[#ff5b00] hover:bg-[#ff5b00]/90 text-white px-8 text-base">
                                    Đặt ngay
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card className={"bg-[#F5F5F5]"}>
                        <CardHeader>
                            <CardTitle className="text-lg">
                                Chi tiết gói đã chọn
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-base">
                            <div className="flex gap-2">
                                <Badge
                                    variant="outline"
                                    className="text-[#238ba4] border-[#238ba4]"
                                >
                                    Thông tin
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="text-[#238ba4] border-[#238ba4]"
                                >
                                    Bao khoát
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="text-[#238ba4] border-[#238ba4]"
                                >
                                    Hướng dẫn
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="text-[#238ba4] border-[#238ba4]"
                                >
                                    Hoàn hủy
                                </Badge>
                            </div>

                            <div className="space-y-2 text-[#666666]">
                                <p>Xác nhận tức thời</p>
                                <p>Vé sử dụng trong ngày</p>
                                <p>Xuất trình voucher điện tử</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className={"bg-[#F5F5F5]"}>
                        <CardHeader>
                            <CardTitle className="text-lg">Thông tin</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-medium text-[#1c1c1c] mb-2">
                                    Bao gồm
                                </h4>
                                <ul className="text-base text-[#666666] space-y-1">
                                    <li>
                                        • Vé vào cổng điểm tham quan: Tắm khoáng
                                        tự nhiên trong hồ, xông hơi khô và ướt,
                                        tắm bùn nóng đông sông lưu, tắm khoáng
                                        nóng, vui chơi tại công viên nước, xem
                                        phim 5D-12D miễn phí, trải nghiệm Game
                                        World - trò chơi thực tế tham quan Đền
                                        Thần Tài, vui chơi tại Công viên
                                        Jurassic, tham quan Vườn Lan, tham quan
                                        và chụp ảnh tại Khu Vườn Tình Yêu
                                    </li>
                                    <li>• Buffet trưa</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-medium text-[#1c1c1c] mb-2">
                                    Không bao gồm
                                </h4>
                                <ul className="text-base text-[#666666] space-y-1">
                                    <li>
                                        • Đón khách và trả khách tại khách sạn
                                    </li>
                                </ul>
                            </div>

                            <button className="text-[#238ba4] text-base">
                                Xem tất cả
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const CarouselImage = () => {
    return (
        <Reveal>
            <Carousel
                className="w-full mt-[40px]"
                defaultIndex={1}
                align="center"
                opts={{
                    align: "start",
                    skipSnaps: false,
                    containScroll: "trimSnaps",
                    loop: false,
                    dragFree: false,
                }}
            >
                <CarouselContent className="-ml-[20px]">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <CarouselItem
                            key={i}
                            className="basis-[80%] relative group"
                        >
                            <img
                                src={
                                    "https://quangbinhtravel.vn/wp-content/uploads/2025/03/Vinh-Ha-Long-1024x576.jpg"
                                }
                                alt="Enjoy Hanoi street food"
                                className="w-full"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Reveal>
    );
};
