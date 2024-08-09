import React from 'react'

export default function About() {
    return (
        <div>
            <div className='bg-[#1ABC9C] overflow-auto pt-28'>
                <div className='w-[90%] m-auto py-24 md:py-44'>
                    <div className='container'>
                        <h2 className='text-white text-center text-4xl mt-5 font-bold'>ABOUT COMPONENT</h2>
                        <div className='flex gap-3 mt-3 justify-center items-center'>
                            <div className='h-[4px] w-[80px] bg-white'></div>
                            <i class="fa-solid fa-star text-white"></i>
                            <div className='h-[4px] w-[80px] bg-white'></div>
                        </div>
                        <div className='flex justify-center gap-4 flex-col md:flex-row items-center'>
                            <div>
                                <p className='text-white'>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source
                                    files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
                                    easy customization.
                                </p>
                            </div>
                            <div>
                                <p className='text-white'>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source
                                    files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
                                    easy customization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
