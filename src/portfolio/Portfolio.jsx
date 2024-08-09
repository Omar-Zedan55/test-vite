import image2 from "./../assets/poert1.png"
import image3 from "./../assets/port2.png"
import image4 from "./../assets/port3.png"
import style from "./portfolio.module.css"
import React, { useEffect } from 'react'
export default function Portfolio() {
    const layerstyling = `${style.layer} bg-[#1EBC9C]  absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 `;
    useEffect(function () {
        const element = document.querySelector('.row');
        const layerclick = document.querySelector('.portifolio-photolayer');
        if (element) {
            element.addEventListener("click", function (e) {
                document.querySelector('.portifolio-photolayer').classList.remove("d-none")
                let liink = e.target.parentElement.children[0].getAttribute("src");
                document.querySelector('.portifolio-photo').setAttribute("src", liink)
            })
        }
        if (layerclick) {
            layerclick.addEventListener("click", function (e) {
                console.log(e.target.classList);
                if (e.target.classList[0] == 'portifolio-photolayer') {
                    document.querySelector('.portifolio-photolayer').classList.add("d-none")
                }
            })
        }
    }, [])
    return (
        <div>
            <div className=' overflow-auto pt-28'>
                <h2 className='text-[#2C3E50] text-center text-4xl mt-5 font-bold'>PORTIFOLIO COMPONENT</h2>
                <div className='flex gap-3 mt-3 justify-center items-center'>
                    <div className='h-[4px] w-[80px] bg-[#2C3E50]'></div>
                    <i className="fa-solid fa-star text-[#2C3E50]"></i>
                    <div className='h-[4px] w-[80px] bg-[#2C3E50]'></div>
                </div>
                <div className='container'>
                    <div className="row">
                        <div className=" col-md-6 photo col-sm-12 col-lg-4  p-3">
                            <div className="cell-inner cursor-pointer relative overflow-hidden rounded-2">
                                <img src={image2} alt="" />
                                <div className={layerstyling}>
                                    <i className="fa-solid fa-plus text-white text-8xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 photo col-sm-12 col-lg-4  p-3">
                            <div className="cell-inner cursor-pointer relative overflow-hidden rounded-2">
                                <img src={image3} alt="" />
                                <div className={layerstyling}>
                                    <i className="fa-solid fa-plus text-white text-8xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 photo col-sm-12 col-lg-4  p-3">
                            <div className="cell-inner cursor-pointer relative overflow-hidden rounded-2">
                                <img src={image4} alt="" />
                                <div className={layerstyling}>
                                    <i className="fa-solid fa-plus text-white text-8xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 photo col-sm-12 col-lg-4  p-3">
                            <div className="cell-inner cursor-pointer relative overflow-hidden rounded-2">
                                <img src={image2} alt="" />
                                <div className={layerstyling}>
                                    <i className="fa-solid fa-plus text-white text-8xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 photo col-sm-12 col-lg-4  p-3">
                            <div className="cell-inner cursor-pointer relative overflow-hidden rounded-2">
                                <img src={image3} alt="" />
                                <div className={layerstyling}>
                                    <i className="fa-solid fa-plus text-white text-8xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 photo col-sm-12 col-lg-4  p-3">
                            <div className="cell-inner cursor-pointer relative overflow-hidden rounded-2">
                                <img src={image4} alt="" />
                                <div className={layerstyling}>
                                    <i className="fa-solid fa-plus text-white text-8xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portifolio-photolayer d-none  z-50 fixed bg-opacity-40 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-blue-400">
                <img src="" alt="" className="w-[40%] portifolio-photo" />
            </div>
        </div>
    )
}

