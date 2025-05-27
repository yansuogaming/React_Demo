/* eslint-disable no-unused-vars */
import avatar from '@images/avatar.png';
import image1 from '@images/image1.png';
import { useState } from 'react';

const Rating = () => {
    const [images, setImages] = useState([
        { id: 1, description: "test thử 1 cái ảnh xem làm sao" },
        { id: 2, description: "test thử 1 cái ảnh xem làm sao" },
    ]);

    return (
        <div className="container flex flex-row items-start justify-center mt-[60px] mb-[60px]">
            <div className="w-[595px] h-auto">
                <div className='flex flex-row'>
                    <img src={image1} className='w-[174px] h-[115px]' />
                    <div className='justify-center items-center mt-6 ml-4'>
                        <h1 className='text-[22px] text-[#1C1C1C] font-bold'>Hồ Hoàn Kiếm</h1>
                        <text className='text-[14px] text-[#1C1C1C]'>Quận <text className='text-blue-500'>Hoàn Kiếm</text>, thành phố Hà Nội</text>
                    </div>
                </div>
                <div className='mt-4'>
                    <text className='text-[18px] text-[#666666]'>Kinh nghiệm của chính bạn thực sự có ích với khách du lịch khác. Xin cảm ơn!</text>
                </div>
                <hr className='my-4' />
                <div>
                    <text className='text-[14px] text-[#000000] font-extrabold'>Xếp hạng tổng thể của bạn về điểm tham quan này</text>
                </div>
                <div className="flex items-center mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-6 h-6 sm:w-6 sm:h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <div className='mt-5'>
                    <text className='text-[14px] text-[#000000]'>Tiêu đề đánh giá</text>
                    <input className='w-[595px] h-[44px] border border-gray-300 mt-3 px-3' />
                </div>
                <div className='mt-5'>
                    <text className='text-[14px] text-[#000000]'>Đánh giá chi tiết</text>
                    <input placeholder="Nội dung chi tiết (tối thiểu 200 từ)" className='w-[595px] h-[131px] border border-gray-300 mt-3 px-3' />
                </div>

                <div className="mt-5">
                    <div className="bg-white rounded-lg w-full">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Bạn có muốn chia sẻ?</h2>

                        <button className="w-[155px] h-[40px] text-[16px] bg-white text-[#238BA4] py-2 mb-4 hover:bg-cyan-500 transition-colors border border-[#238BA4]">
                            Tải ảnh lên
                        </button>

                        {/* Image Items */}
                        <div className="space-y-4 mb-4">
                            {images.map((image) => (
                                <div key={image.id} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-16 h-16 bg-gray-300 mr-4"></div>
                                        <p className="text-sm text-gray-900">{image.description}</p>
                                    </div>
                                    <button
                                        // onClick={() => handleDeleteImage(image.id)}
                                        className="text-red-500 text-sm hover:underline"
                                    >
                                        Xóa
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-start mb-4">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mt-1 mr-2"
                            />
                            <p className="text-sm text-gray-900 leading-relaxed">
                                Tôi chứng nhận rằng đánh giá này dựa trên trải nghiệm thực tế của tôi tại địa điểm này. Tôi không bị ép buộc hoặc bị ảnh hưởng bởi bất kỳ bên thứ ba nào để đưa ra đánh giá này.
                            </p>
                        </div>

                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="mt-10 flex justify-end items-end h-[50px]">
                        <button className="w-[120px] sm:w-[160px] h-[40px] sm:h-[50px] bg-cyan-600 text-white py-1 sm:py-2 hover:bg-cyan-700 transition-colors">
                            Gửi đánh giá
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[374px] h-auto px-2 ml-14 border-l border-l-gray-200 pl-7">
                <div>
                    <text className="text-[18px] text-[#1C1C1C] font-[Open_Sans] font-bold">Đánh giá gần đây</text>
                </div>
                {[1, 2, 3]?.map(() => {
                    return (
                        <div className="flex flex-col my-5">
                            <div className="flex flex-row items-center">
                                <img src={avatar} className="w-[40px] h-[40px] rounded-full" />
                                <div className='flex flex-col ml-3'>
                                    <text className='text-[16px] text-[#1C1C1C] font-[Open_Sans]'>Lyn Lyn Peh</text>
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <text className='text-[14px] text-[#238BA4] font-[Open_Sans] ml-1'>Tuyệt vời</text>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <span>Tôi đã đến thăm hồ khi ở Hà Nội. Đã đi dạo xung quanh và nhìn thấy các địa điểm quan trọng ở chu vi. Tôi đã rất ngạc nhiên khi thấy rằng toàn bộ vành đai ...</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Rating;