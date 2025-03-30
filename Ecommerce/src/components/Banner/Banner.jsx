import React from 'react'
import BannerImg from "../../assets/banner.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5"; // Fixed icon name
import { GiFoodTruck } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";


const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid items-center grid-cols-1 gap-6 md:grid-cols-2'>
                <div data-aos='zoom-in'>
                    <img className='max-w-[400px] h-[350px] mx-auto w-full object-cover' src={BannerImg} alt="Banner Image" />
                </div>
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 data-aos='fade-up' className='text-3xl font-bold sm:text-4xl'>Winter Sale Up to 50% Off</h1>
                    <p data-aos='fade-up' className='text-sm leading-5 tracking-wide text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat consectetur natus adipisci alias necessitatibus in rerum nisi? Cupiditate ut quisquam fuga rem sunt? Explicabo excepturi ut officiis tempore, officia maiores atque.</p>
                    <div className='flex flex-col gap-4'>
                        <div data-aos='fade-up' className='flex items-center gap-4'>
                            <GrSecure className='w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 dark:bg-violet-400 ' />
                            <p>Quality Products</p>
                        </div>
                        <div data-aos='fade-up' className='flex items-center gap-4'>
                           <TbTruckDelivery className='w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 dark:bg-violet-400 '/>
                           <p>Fast Delivery</p>
                        </div>
                        <div data-aos='fade-up' className='flex items-center gap-4'>
                           <MdPayments className='w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 dark:bg-violet-400 '/>
                           <p>Easy Payment Method</p>
                        </div>
                        <div data-aos='fade-up' className='flex items-center gap-4'>
                           <RiDiscountPercentLine className='w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 dark:bg-violet-400 '/>
                           <p>Get Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner