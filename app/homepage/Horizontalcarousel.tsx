"use client"
import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const swiperContent: { imagePathUrl: string }[] = [
    {
        imagePathUrl: "/images/carouselimages/c5.jpeg"
    },
    {
        imagePathUrl: "/images/carouselimages/c3.jpeg"
    },
    {
        imagePathUrl: "/images/carouselimages/c2.jpeg"
    },
    {
        imagePathUrl: "/images/carouselimages/c1.jpeg"
    }
]

function Horizontalcarousel() {

    return (

        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}

            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="h-[calc(min(700px,80vh))]"
        >
            {swiperContent.map((content, i) => <SwiperSlide key={i} className='relative'>
                <Image placeholder='blur' blurDataURL='/images/blur.png' className='  aspect-video h-full object-cover' width={500} height={500} quality={100} alt='team member' src={content.imagePathUrl} />
                <div className='inset-0 absolute bg-black/60 h-full'>
                    <div className=' relative container-content h-full '>
                        <div className=' grid grid-cols-1  gap-5 h-full text-white lg:py-10'>
                            <nav className='col-span-2 flex flex-col  justify-center items-center mx-auto'>
                          
                                <q className=' poppins_regular text-3xl md:text-4xl lg:text-6xl text-center tracking-wider leading-tight  uppercase px-3'>
                                    Empowering Success Through Insightful Consultation
                                </q>

                            </nav>

                            <nav className=' flex flex-col gap-3 max-w-2xl px-6 lg:py-8 text-xs md:text-sm lg:text-base items-center lg:justify-center h-full mx-auto '>
                                <nav className=' text-primary-gray font-medium poppins_regular '>
                                    <b>Six Degrees Consultancy</b> is a full-service, cross-industry, end-to-end consulting company with registration number CS344512018.
                                    We provide comprehensive professional and management consulting, program, and project management services.
                                    The company is based in the capital city of Accra, Ghana.
                                </nav>
                                <Link href="/about" className=' px-2  text-xs md:text-sm lg:text-base py-2 bg-primary-gray text-black rounded-lg    w-max flex items-center gap-2'>
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.783 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5h-4ZM13 3.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75Z" /></svg>
                                </Link>
                                <nav className='font-bold  grid grid-cols-3 text-xs md:text-sm lg:text-base '>
                                    <nav className='border-r border-light-gray text-left pr-2 '>20+ years of experience</nav>
                                    <nav className='border-r border-light-gray text-center '><nav className=' flex items-center justify-center h-full'>100+ Programs</nav></nav>
                                    <nav className=' text-center'><nav className=' flex items-center justify-center h-full'>100+ Clients</nav></nav>
                                </nav>
                            </nav>
                            
                        </div>
                    </div>
                </div>
            </SwiperSlide>


            )}


        </Swiper>

    )
}

export default Horizontalcarousel