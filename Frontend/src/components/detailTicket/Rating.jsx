import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dot, Pen, Star } from "lucide-react";

export default function Rating() {
    const reviews = [
        {
            id: 1,
            author: "Lạn Lạn Pah",
            date: "21/06/2022",
            rating: 5,
            status: "Tuyệt vời",
            content:
                "Tôi đã đến thăm hồ Hồ Tràm hôm nay. Đã đi dao vang quanh và đến thăy các địa điểm quan trọng ở đây vì. Tôi đã cảm ngạc nhiên khi thấy thực tế này là vẻn đẹp tự nhiên đúng như mô tả, phương tiện giao thông không chật, bãi biển này là vẻn đẹp hay và thành phố cũ thích.",
        },
        {
            id: 2,
            author: "Lạn Lạn Pah",
            date: "21/06/2022",
            rating: 4,
            status: "Tôi sẽ trở lại nghiêm túc nhà",
            content:
                "Tôi đã đến thăm hồ Hồ Tràm hôm nay. Đã đi dao vang quanh và đến thăy các địa điểm quan trọng ở đây vì. Tôi đã cảm ngạc nhiên khi thấy thực tế này là vẻn đẹp tự nhiên đúng như mô tả, phương tiện giao thông không chật, bãi biển này là vẻn đẹp hay và thành phố cũ thích.",
        },
        {
            id: 3,
            author: "Lạn Lạn Pah",
            date: "21/06/2022",
            rating: 5,
            status: "Tuyệt vời",
            content:
                "Tôi đã đến thăm hồ Hồ Tràm hôm nay. Đã đi dao vang quanh và đến thăy các địa điểm quan trọng ở đây vì. Tôi đã cảm ngạc nhiên khi thấy thực tế này là vẻn đẹp tự nhiên đúng như mô tả, phương tiện giao thông không chật, bãi biển này là vẻn đẹp hay và thành phố cũ thích.",
        },
        {
            id: 4,
            author: "Lạn Lạn Pah",
            date: "21/06/2022",
            rating: 4,
            status: "Tuyệt vời",
            content:
                "Tôi đã đến thăm hồ Hồ Tràm hôm nay. Đã đi dao vang quanh và đến thăy các địa điểm quan trọng ở đây vì. Tôi đã cảm ngạc nhiên khi thấy thực tế này là vẻn đẹp tự nhiên đúng như mô tả, phương tiện giao thông không chật, bãi biển này là vẻn đẹp hay và thành phố cũ thích.",
        },
    ];

    const ratingBreakdown = [
        { stars: 5, count: 13734, percentage: 85 },
        { stars: 4, count: 1234, percentage: 8 },
        { stars: 3, count: 567, percentage: 4 },
        { stars: 2, count: 234, percentage: 2 },
        { stars: 1, count: 123, percentage: 1 },
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${
                    i < rating
                        ? "fill-[#fbbc04] text-[#fbbc04]"
                        : "text-[#dadce0]"
                }`}
            />
        ));
    };

    return (
        <div className="bg-[#ffffff-500 p-4 mt-15 w-full ">
            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left sidebar - Rating summary */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#1c1c1c] mb-4">
                                    Đánh giá
                                </h2>
                                <Button className="bg-[#238ba4] hover:bg-[#0c5b78] text-white px-4 py-2 rounded-md text-base">
                                    <Pen /> Viết đánh giá
                                </Button>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-3xl font-bold text-[#1c1c1c]">
                                        4,5
                                    </span>
                                    <div className="flex">{renderStars(5)}</div>
                                </div>
                                <p className="text-base text-[#1C1C1C]">
                                    13.734 đánh giá
                                </p>

                                <div className="space-y-2">
                                    {ratingBreakdown.map((item) => (
                                        <div
                                            key={item.stars}
                                            className="flex items-center gap-3 text-sm"
                                        >
                                            <span className="text-[#] w-16">
                                                {item.stars === 5
                                                    ? "Hoàn toàn hài lòng"
                                                    : item.stars === 4
                                                    ? "Hài lòng"
                                                    : item.stars === 3
                                                    ? "Bình thường"
                                                    : item.stars === 2
                                                    ? "Không hài lòng"
                                                    : "Rất không hài lòng"}
                                            </span>
                                            <div className="flex-1 bg-[#f5f5f5] rounded-full h-2">
                                                <div
                                                    className="bg-[#238ba4] h-2 rounded-full"
                                                    style={{
                                                        width: `${item.percentage}%`,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-[#1C1C1C] w-12 text-right">
                                                {item.count}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Reviews */}
                    <div className="lg:col-span-2">
                        <div className="space-y-6">
                            {reviews.map((review) => (
                                <Card
                                    key={review.id}
                                    className="border border-[#dadce0]"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                                <AvatarFallback className="bg-[#f5f5f5] text-[#1C1C1C]">
                                                    LP
                                                </AvatarFallback>
                                            </Avatar>

                                            <div className="flex-1 space-y-3">
                                                <div>
                                                    <h4 className="font-medium text-[#1c1c1c] text-base">
                                                        {review.author}
                                                    </h4>
                                                    <div className="flex items-center">
                                                        <p className="text-sm text-[#1C1C1C]">
                                                            Hà Nội,Việt Nam
                                                        </p>
                                                        <Dot className="w-4 h-4" />
                                                        <p className="text-sm text-[#1C1C1C]">
                                                            {review.date}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <div className="flex">
                                                        {renderStars(
                                                            review.rating
                                                        )}
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className="text-base font-medium text-[#238ba4] mb-2">
                                                        {review.status}
                                                    </p>
                                                    <p className="text-base text-[#333333] leading-relaxed">
                                                        {review.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}

                            <div className="text-center">
                                <Button
                                    variant="outline"
                                    className="border-[#238ba4] text-[#238ba4] hover:bg-[#238ba4] hover:text-white px-6 py-2"
                                >
                                    Xem tất cả
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
