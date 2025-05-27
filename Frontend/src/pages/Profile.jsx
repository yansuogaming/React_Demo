"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Calendar, Heart, Edit, Facebook, MapPin, Clock, Star } from "lucide-react"
import Breadcrumb from "@components/Breadcrumb"

const Profile = () => {
    const { t } = useTranslation()
    const [activeTab, setActiveTab] = useState("profile")

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("profile"), href: "/" },
    ]

    // Mock data cho My Booking
    const bookings = [
        {
            id: 1,
            hotelName: "Grand Hotel Saigon",
            location: "Ho Chi Minh City, Vietnam",
            checkIn: "2024-02-15",
            checkOut: "2024-02-18",
            status: "Confirmed",
            price: "$150/night",
            image: "/placeholder.svg?height=80&width=120",
        },
        {
            id: 2,
            hotelName: "Hanoi Luxury Resort",
            location: "Hanoi, Vietnam",
            checkIn: "2024-03-10",
            checkOut: "2024-03-13",
            status: "Pending",
            price: "$200/night",
            image: "/placeholder.svg?height=80&width=120",
        },
        {
            id: 3,
            hotelName: "Da Nang Beach Hotel",
            location: "Da Nang, Vietnam",
            checkIn: "2024-01-20",
            checkOut: "2024-01-23",
            status: "Completed",
            price: "$120/night",
            image: "/placeholder.svg?height=80&width=120",
        },
    ]

    // Mock data cho Favorites
    const favorites = [
        {
            id: 1,
            hotelName: "Sunset Beach Resort",
            location: "Phu Quoc, Vietnam",
            rating: 4.8,
            price: "$180/night",
            image: "/placeholder.svg?height=80&width=120",
        },
        {
            id: 2,
            hotelName: "Mountain View Lodge",
            location: "Sapa, Vietnam",
            rating: 4.6,
            price: "$90/night",
            image: "/placeholder.svg?height=80&width=120",
        },
        {
            id: 3,
            hotelName: "City Center Hotel",
            location: "Ho Chi Minh City, Vietnam",
            rating: 4.5,
            price: "$110/night",
            image: "/placeholder.svg?height=80&width=120",
        },
    ]

    const getStatusColor = (status) => {
        switch (status) {
            case "Confirmed":
                return "bg-green-100 text-green-800"
            case "Pending":
                return "bg-yellow-100 text-yellow-800"
            case "Completed":
                return "bg-blue-100 text-blue-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    const renderProfileContent = () => (
        <div className="max-w-4xl space-y-6">
            {/* Personal Info Section */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-xl font-semibold">Personal Info</CardTitle>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <div className="flex items-center gap-4 mb-3 bg-[#F5F6FA] p-2 rounded-[8px]">
                                <Avatar className="w-16 h-16 bg-blue-600">
                                    <AvatarFallback className="text-white text-xl font-semibold">G</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Full name</p>
                                    <p className="font-medium">Guest 124425</p>
                                </div>
                            </div>
                            <div className="bg-[#F5F6FA] p-3 rounded-[8px]">
                                <p className="text-sm text-gray-500 mb-1">Country or region</p>
                                <p className="text-gray-400">-</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-[#F5F6FA] p-4 rounded-[8px] mb-3">
                                <p className="text-sm text-gray-500 mb-1">Date of birth</p>
                                <p className="text-gray-400">-</p>
                            </div>
                            <div className="bg-[#F5F6FA] p-3 rounded-[8px]">
                                <p className="text-sm text-gray-500 mb-1">Address</p>
                                <p className="text-gray-400">-</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Account Security Section */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-xl font-semibold">Account Security</CardTitle>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#F5F6FA] p-2 rounded-[8px]">
                            <p className="text-sm text-gray-500 mb-1">Email</p>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">tyds@vietiso.com</span>
                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">CONFIRMED</span>
                            </div>
                        </div>
                        <div className="bg-[#F5F6FA] p-2  rounded-[8px]">
                            <p className="text-sm text-gray-500 mb-1">Password</p>
                            <p className="font-medium tracking-wider">••••••••</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Linked Accounts Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">Linked Accounts</CardTitle>
                    <p className="text-gray-600 text-sm">
                        By linking a third party site, you'll be able to sign in directly using your third party account
                        information.
                    </p>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 flex flex-row ">
                        <div className="w-[451px] h-[76px] bg-[#F5F6FA] mr-1 flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Facebook className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-medium">Facebook</span>
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Link</Button>
                        </div>

                        <div className="w-[451px] h-[76px] bg-[#F5F6FA] ml-1 flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <svg viewBox="0 0 24 24" className="w-full h-full">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                </div>
                                <span className="font-medium">Google</span>
                            </div>
                            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                                Unlink
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Delete Account */}
            <div className="text-center pt-4 mb-10">
                <button className="text-red-600 hover:text-red-700 underline font-medium">Delete My Account</button>
                <p className="text-gray-600 text-sm mt-1">
                    Once deleted, all account information will be removed. You will not be able to recover this information.
                </p>
            </div>
        </div>
    )

    const renderBookingContent = () => (
        <div className="max-w-4xl space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">My Bookings</CardTitle>
                    <p className="text-gray-600 text-sm">Manage your hotel reservations and booking history</p>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {bookings.map((booking) => (
                            <div key={booking.id} className="bg-[#F5F6FA] p-4 rounded-lg border">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={booking.image || "/placeholder.svg"}
                                        alt={booking.hotelName}
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-semibold text-lg">{booking.hotelName}</h3>
                                                <div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
                                                    <MapPin className="w-4 h-4" />
                                                    {booking.location}
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        Check-in: {booking.checkIn}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        Check-out: {booking.checkOut}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}
                                                >
                                                    {booking.status}
                                                </span>
                                                <p className="text-lg font-semibold mt-2">{booking.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <Button variant="outline" size="sm">
                                        View Details
                                    </Button>
                                    {booking.status === "Confirmed" && (
                                        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                                            Cancel Booking
                                        </Button>
                                    )}
                                    {booking.status === "Completed" && (
                                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                            Write Review
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )

    const renderFavoriteContent = () => (
        <div className="max-w-4xl space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">Favorite Hotels</CardTitle>
                    <p className="text-gray-600 text-sm">Your saved hotels for future bookings</p>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {favorites.map((hotel) => (
                            <div key={hotel.id} className="bg-[#F5F6FA] p-4 rounded-lg border">
                                <div className="flex gap-4">
                                    <img
                                        src={hotel.image || "/placeholder.svg"}
                                        alt={hotel.hotelName}
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-semibold">{hotel.hotelName}</h3>
                                                <div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
                                                    <MapPin className="w-4 h-4" />
                                                    {hotel.location}
                                                </div>
                                                <div className="flex items-center gap-1 text-sm">
                                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="font-medium">{hotel.rating}</span>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                                                <Heart className="w-4 h-4 fill-current" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="text-lg font-semibold">{hotel.price}</span>
                                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                                Book Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return renderProfileContent()
            case "booking":
                return renderBookingContent()
            case "favorite":
                return renderFavoriteContent()
            default:
                return renderProfileContent()
        }
    }

    return (
        <div className="bg-[#F5F6FA] min-h-screen">
            <Breadcrumb
                className="mb-[30px] mt-[15px] container"
                items={breadcrumdItems}
            />
            <div className="container flex">
                {/* Sidebar */}
                <div className="w-[297px] h-[294px] bg-white border-r rounded-3xl">
                    {/* Header */}
                    <div className="bg-blue-700 text-white p-6 text-center rounded-tl-2xl rounded-tr-2xl">
                        <h1 className="text-xl font-semibold">Guest 124425</h1>
                        <p className="text-blue-200 text-sm">Account</p>
                    </div>

                    {/* Navigation */}
                    <nav className="p-4">
                        <div className="space-y-2">
                            <div
                                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${activeTab === "profile"
                                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                                        : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setActiveTab("profile")}
                            >
                                <User className="w-5 h-5" />
                                <span className="font-medium">Profile</span>
                            </div>
                            <div
                                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${activeTab === "booking"
                                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                                        : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setActiveTab("booking")}
                            >
                                <Calendar className="w-5 h-5" />
                                <span>My Booking</span>
                            </div>
                            <div
                                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${activeTab === "favorite"
                                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                                        : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                onClick={() => setActiveTab("favorite")}
                            >
                                <Heart className="w-5 h-5" />
                                <span>Favorite</span>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 ml-5">{renderContent()}</div>
            </div>
        </div>
    )
}

export default Profile
