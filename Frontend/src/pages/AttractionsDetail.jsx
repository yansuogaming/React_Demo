/* eslint-disable no-unused-vars */
import Breadcrumb from '@components/Breadcrumb';
import { useTranslation } from 'react-i18next';
import { Star, Share, Edit } from "lucide-react";
import License from '@images/License.svg';
import PhotoGallery from '@components/PhotoGallery';
import NearbyPoints from '@components/NearbyPoints';
import Inspiration from '@components/Inspiration';
import Review from '@components/Review';
import OtherPlaces from '@components/OtherPlaces';
import { useLoaderData } from 'react-router';
import checkmark from '@images/checkmark.svg';
import maps from '@images/maps.svg';
import direction from '@images/direction.svg';
import time_att from '@images/time_att.svg';
import website from '@images/website.svg';
import arrowDown from '@images/arrowDown.svg';
import phoneGray from '@images/phone_gray.svg';
import { format } from 'date-fns';

const AttractionsDetail = () => {
    const { attraction } = useLoaderData();
    const { t } = useTranslation();
    const images = attraction.list_images;
    const resource = attraction.oneResources;
    const breadcrumdItems = [
        { label: t('Home'), href: '/' },
        { label: t('Destinations'), href: '/' },
        { label: t('Hanoi'), href: '/' },
        { label: t('Attractions'), href: '/' },
        { label: resource.name }
    ]

    const startDate = new Date(resource.start_date * 1000);
    const dueDate = new Date(resource.due_date * 1000);
    console.log('attraction', attraction);
    return (
        <main>
            <section className="container mb-[80px]">
                <Breadcrumb
                    className="mb-[30px] mt-[15px]"
                    items={breadcrumdItems}
                />
                <div className='mt-[60px]'>
                    <h1 className='text-[#10154C] font-bold text-[38px] md:text-[38px]'>
                        {resource.name}
                    </h1>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4">
                    {/* Left Section: Rating and Tags */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                        {/* Rating Section */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 bg-blue-50 rounded-full px-2 py-1">
                                <img src={License} className='w-[28px] h=[28px]' />
                            </div>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-sm font-medium text-gray-900">
                                    {resource.scores_avg} - {resource.total_reviews} reviews
                                </span>
                            </div>
                        </div>

                        {/* Tags Section */}
                        <div className="flex items-center gap-2 text-sm text-blue-600">
                            {resource.resource_type_name && (
                                <>
                                    <p className="hover:underline">
                                        {resource.resource_type_name}
                                    </p>
                                    <span className="text-gray-400">|</span>
                                </>
                            )}
                            {resource.type_name && (
                                <p className="hover:underline">
                                    {resource.type_name}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Right Section: Actions */}
                    <div className="flex items-center gap-4 mt-2 sm:mt-0">
                        <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 hover:underline text-sm">
                            <Share className="w-4 h-4" />
                            <text className='underline'>Share</text>
                        </button>
                        <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 hover:underline text-sm">
                            <Edit className="w-4 h-4" />
                            <text className='underline'>Write a review</text>
                        </button>
                    </div>
                </div>
                <PhotoGallery images={images} />
                <div className="flex flex-col md:flex-row mt-[60px]">
                    {/* Left Column: Tabs and Content */}
                    <div className="w-full md:w-2/3 pr-4">
                        {/* Tabs */}
                        <div className="flex space-x-4 mb-6 border-b border-gray-200">
                            <a href="#" className="text-blue-900 font-medium pb-2 border-b-2 border-blue-900">
                                Highlights
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-900 pb-2">
                                Overview
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-900 pb-2">
                                Inspiration
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-900 pb-2">
                                Nearby
                            </a>
                            <a href="#" className="text-gray-500 hover:text-blue-900 pb-2">
                                Review
                            </a>
                        </div>
        
                        {/* Highlights Section */}
                        <div className="bg-blue-50 p-4 rounded-lg mb-6">
                            <p className="text-[#000000] flex items-center mb-2 font-bold py-0.5 font-[SVN-Gotham] text-[16px]">
                                <img src={checkmark} className="mr-2" /> The site is certified by UNESCO
                            </p>
                            <p className="text-[#000000] flex items-center mb-2 font-bold py-0.5 font-[SVN-Gotham] text-[16px]">
                                <img src={checkmark} className="mr-2" />  Diverse ecosystem
                            </p>
                            <p className="text-[#000000] flex items-center mb-2 font-bold py-0.5 font-[SVN-Gotham] text-[16px]">
                                <img src={checkmark} className="mr-2" />  Species are in danger of extinction
                            </p>
                            <p className="text-[#000000] flex items-center mb-2 font-bold py-0.5 font-[SVN-Gotham] text-[16px]">
                                <img src={checkmark} className="mr-2" />  Marine and terrestrial biodiversity
                            </p>
                            <p className="text-[#000000] flex items-center font-bold py-0.5 font-[SVN-Gotham] text-[16px]">
                                <img src={checkmark} className="mr-2" />  Cultural and economic importance
                            </p>
                        </div>
        
                        {/* Overview Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">Overview</h2>
                            <div dangerouslySetInnerHTML={{ __html: resource.content }}></div>
                        </div>
                    </div>
        
                    {/* Right Column: Map and Details */}
                    <div className="w-full md:w-1/3 pl-2 ml-4 mt-6 shadow-md rounded-xl">
                        <div className="bg-white p-4 rounded-lg">
                            <img
                                src={maps}
                                alt="Cat Ba Map"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <p className="text-gray-700 mt-2">Cat Ba town, Cat Hai, Hai Phong</p>
                            <button className="mt-2 border border-gray-200 flex flex-row items-center gap-2 px-4 py-2 rounded hover:bg-red-600">
                                <img src={direction} className="w-[24px] h-[24px]" alt="Direction icon" />
                                <span className="text-black">Direction</span>
                            </button>
        
                            <div className="border-b border-b-[#DFDFDF] my-[15px]"></div>
                            <div className="mt-[10px]">
                                <p className="text-green-600 font-bold flex items-center mb-2">
                                    <span className="mr-2">
                                        <img src={time_att} className="w-[20px] h -[20px]" />
                                    </span>
                                    Active •
                                    <text className="text-[#454545] ml-1">
                                        Open 24 hours
                                    </text>
                                    <img src={arrowDown} className="w-4 h-4" />
                                </p>
                                <div className="flex flex-row items-center gap-x-6">
                                    <a href={resource.website_url} className="text-blue-700 font-bold flex items-center">
                                        <img src={website} className="w-5 h-5 mr-2" />
                                        Website
                                    </a>
                                    <a href={`tel:${resource.phone.replaceAll(' ', '')}`} className="text-gray-700 flex items-center">
                                        <img src={phoneGray} className="w-5 h-5 mr-2" />
                                        {resource.phone}
                                    </a>
                                </div>
                                <div className="border-b border-b-[#DFDFDF] my-[15px]"></div>
                                {resource.resource_level_name && (
                                    <div className="text-gray-700 flex items-center font-[16px]">
                                        <strong>Chứng nhận:</strong>
                                        {resource.resource_level_name}
                                    </div>
                                )}
                                <div className="text-gray-700 flex items-center font-[16px]">
                                    <strong>Nhóm tài nguyên: </strong>
                                    {resource.resource_group_name}
                                </div>
                                <div className="text-gray-700 flex items-center font-[16px]">
                                    <strong>Address: </strong>
                                    <div dangerouslySetInnerHTML={{ __html: resource.address }}></div>
                                </div>
                                {resource.resource_type_id == 3179 && (
                                    <div className="awe__place-row">
                                        <strong>Thời gian diễn ra:</strong>
                                        {format(startDate, 'dd/MM/yyyy')}
                                        - {format(dueDate, 'dd/MM/yyyy')}
                                    </div>
                                )}
                                {resource.resource_type_id != 3179 && attraction.list_local_fields.length && (
                                    attraction.list_local_fields.map(function (field) {
                                        <div className="awe__place-row">
                                            <strong>{field.label}:&nbsp;</strong>
                                            {field.value}
                                        </div>
                                    })
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Inspiration />
                <NearbyPoints points={attraction.list_nearbys} />
                <Review />
                <OtherPlaces />
            </section>
        </main>
    )
}
export default AttractionsDetail;