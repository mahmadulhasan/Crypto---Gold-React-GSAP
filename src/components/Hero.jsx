import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.from('.herosecheading',{
            x:100,
            skewX: 65,
            letterSpacing: "10px",
            opacity:0,
            delay:0.5,
            duration:1,
            transformOrigin: 'center',
        })
    })
    return (
        <section className='relative min-h-[100dvh] w-full flex flex-col lg:flex-row items-center justify-between p-5 md:-10 lg:p-30 max-w-[1600px] z-10 '>
            {/* <video src="/video1.mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover"></video> */}


            <div className="herosecheading flex flex-col gap-5 pt-30">
                <div className=" text-[clamp(2rem,2.5vw,5rem)] font-semibold leading-tight text-left z-50 text-white leading tight flex flex-col gap-2  bm">
                    <p className="flex "> <span> get Crupto & </span><img src="/star.png" alt="h-5" className='h-10 md:h-12 lg:h-15' /></p>
                    <p> coins delivered</p>
                    <p>to your wallet</p> 
                </div>
                <div className="max-w-md">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Corporis, illum doloribus quod necessitatibus vero blanditiis
                        sit est tempore optio esse.
                    </p>
                    <div className="h-[1px] bg-gray-600 mt-4 w-full"></div>
                </div>

                <button className='bg-linear-to-r/srgb from-indigo-500 to-teal-400 px-5 py-2 rounded-md w-50 '>Know more</button>

            </div>


            <div className="relative">

            <img src="/gold.png" alt="" className=' lg:w-[500px] md:w-[400px] w-[300px] imgbounce glow' />
            </div>


        </section>
    )
}

export default Hero
