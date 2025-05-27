import Breadcrumb from '@components/Breadcrumb';
import { useTranslation } from 'react-i18next';
import { Star, Share2, Edit2, Share, Edit } from "lucide-react";
import License from '@images/License.svg';
import PhotoGallery from '@components/PhotoGallery';
import NearbyPoints from '@components/NearbyPoints';
import Overview from '@components/Overview';
import Inspiration from '@components/Inspiration';
import Review from '@components/Review';
import OtherPlaces from '@components/OtherPlaces';
import { useLoaderData } from 'react-router';

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
    console.log('resource', attraction);
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
                <Overview resource={resource} />
                <Inspiration/>
                <NearbyPoints />
                <Review/>
                <OtherPlaces/>
            </section>
        </main>
    )
}
export default AttractionsDetail;