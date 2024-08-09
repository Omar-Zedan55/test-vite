import React, { useEffect } from 'react'
import style from "./contact.module.css"
export default function Contact() {
    useEffect(function () {
        let x = document.querySelectorAll(".userinfoinput")
        let y= document.querySelectorAll(".userinfolabell")
        for(let i =0; i<x.length;i++){
            console.log( x[i]);
            
            x[i].addEventListener("input", function () {
                console.log(x[i].value);
                
                if(x[i].value!=""&&x[i].value!=null){
                    y[i].style.top="0"
                }else{
                    y[i].style.top="30px"
                }
            })
        }
        
    }, [])
    const labelstyle=` position-relative userinfolabell  text-[#1ABC9C] ${style.userinfolabel}`
    return (
        <div>
            <div>
                <div className=' overflow-auto pt-28'>
                    <h2 className='text-[#2C3E50] text-center text-4xl mt-5 font-bold'>CONTACT COMPONENT</h2>
                    <div className='flex gap-3 mt-3 justify-center items-center'>
                        <div className='h-[4px] w-[80px] bg-[#2C3E50]'></div>
                        <i class="fa-solid fa-star text-[#2C3E50]"></i>
                        <div className='h-[4px] w-[80px] bg-[#2C3E50]'></div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className='w-full m-auto pb-7 md:w-1/2 '>
                    <label for="userName" className={labelstyle}>userName : </label>
                    <input id='userName' type="text" placeholder="userName" name="userName" className="form-control userinfoinput border-0 shadow-none mb-3 border-bottom py-3 position-relative"></input>
                    <label for="userAge " className={labelstyle}>userAge  : </label>
                    <input id='userAge ' type="text" placeholder="userAge " name="userAge " className="form-control userinfoinput border-0 shadow-none mb-3 border-bottom py-3 position-relative"></input>
                    <label for="userEmail " className={labelstyle}>userEmail  : </label>
                    <input id='userEmail ' type="text" placeholder="userEmail " name="userEmail " className="form-control userinfoinput border-0 shadow-none mb-3 border-bottom py-3 position-relative"></input>
                    <label for="userPassword " className={labelstyle}>userPassword  : </label>
                    <input id='userPassword ' type="text" placeholder="userPassword " name="userPassword " className="form-control userinfoinput border-0 shadow-none mb-3 border-bottom py-3 position-relative"></input>
                    <button className='bg-[#1ABC9C] px-2 py-1 rounded-2 text-white'>Send Message</button>
                </div>
            </div>
        </div>
    )
}
