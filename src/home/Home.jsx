import React from 'react'
import image from "./../assets/avataaars.svg"
export default function Home() {
    return (
        <div>
            <div >
                <div className='bg-[#1ABC9C] pt-28 w-full'>
                    <div className='text-center homecontent mt-5 pb-20 m-auto'>
                        <div className='w-60 m-auto'>
                            <img className='w-full' src={image} alt="" />
                        </div>
                        <h2 className='text-white text-4xl mt-5 font-bold'>START FRAMEWORK</h2>
                        <div className='flex gap-3 mt-3 justify-center items-center'>
                            <div className='h-[4px] w-[80px] bg-white'></div>
                            <i class="fa-solid fa-star text-white"></i>
                            <div className='h-[4px] w-[80px] bg-white'></div>
                        </div>
                        <p className='text-white mt-3'>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
