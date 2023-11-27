import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const TourGuideList = () => {

    const axiosPublic = useAxiosPublic();

    // console.log(id);

    const { data: guideList } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const res = await axiosPublic.get('/guides');
            // console.log('res data:',res.data);
            return res.data;
        }
    });

    console.log(guideList);


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                {
                    guideList?.map((item, index) => <SwiperSlide key={index}><div  className='p-3 flex flex-col bg-blue-100 items-center'>
                        <div className="avatar">
                            <div className="w-56 rounded-full ring ring-base-500 ring-offset-base-300 ring-offset-4">
                                <img src={item.profilePicture} />
                            </div>

                        </div>
                        <div className='text-left my-5'>
                            <p className='text-2xl text-base-600 font-semibold'>{item.name}</p>
                            <p className=' text-slate-600 font-bold'>{item?.contactDetails?.address}</p>
                            <p className=' text-slate-400 '>Experience : {item?.workExperience}</p>
                        </div>
                    </div></SwiperSlide>)
                }
                \
            </Swiper>
        </>

    );
};

export default TourGuideList;