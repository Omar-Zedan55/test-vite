import React from 'react'
import Navbarcomp from './../Navbar/Navbar';
import Contact from './../contact/Contact';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className=' overflow-auto'>
            <Navbarcomp />
            <Outlet/>
            <div className='footer overflow-auto bg-[#2C3E50] w-full '>
                <div className='my-12 '>
                    <div className="inner w-[70%] md:w-[90%] m-auto flex  flex-wrap flex-col  md:flex-row ">
                        <div className='text-white  text-center my-5  w-full md:w-1/3'>
                            <h2 className='text-3xl font-medium mb-2'>LOCATION</h2>
                            <p className='mb-3'>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className='text-white  text-center my-5  w-full md:w-1/3'>
                            <h2 className='text-3xl font-medium mb-2'>AROUND THE WEB</h2>
                            <div className='flex gap-2 justify-center'>
                                <div className=' rounded-full border-solid border-white h-10 w-10 border flex justify-center items-center ' >
                                    <i class="fa-brands fa-facebook"></i>
                                </div>
                                <div className=' rounded-full border-solid border-white h-10 w-10 border flex justify-center items-center ' >
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                                <div className=' rounded-full border-solid border-white h-10 w-10 border flex justify-center items-center ' >
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </div>
                                <div className=' rounded-full border-solid border-white h-10 w-10 border flex justify-center items-center ' >
                                    <i class="fa-solid fa-globe"></i>
                                </div>
                            </div>
                        </div>
                        <div className='text-white  text-center my-5  w-full md:w-1/3'>
                            <h2 className='text-3xl font-medium mb-2'>ABOUT FREELANCER</h2>
                            <p className='mb-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
                <div className="copyright overflow-auto w-full bg-[#1A252F]  ">
                    <p className='text-white  text-center my-6'>Copyright © Your Website 2021</p>
                </div>
            </div>
        </div>
    )
}

