
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import React from 'react'

const CommingSoon = () => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(SplitText)
    
    useGSAP(()=>{
        const text = new SplitText('#commingheading', {type: 'chars'})

        gsap.from(text.chars,{
            color: '#5f5f5f60',
            stagger:0.1,
            scrollTrigger:{
                trigger: '#commingsoonsec',
                start: 'top 70%',
                end: 'top 30%',
                scrub:true,
            }
        })
    })

    return (
        <div id='commingsoonsec' className='relative   z-100 w-full flex flex-col gap-3 py-10 items-center justify-center min-h-screen'>
            <center className="flex gap-2 px-4 py-1 items-center text-white rounded-full border-[0.5px] border-gray-700 z-100">
                USE.com Presale • Coming Soon CEX
            </center>
            <center id='commingheading' className="text-2xl md:text-3xl lg:text-4xl font-bold z-100 bm">Built for active traders, priced for early believers. Lock your USE allocation before listing.</center>
            <center className="text-sm text-gray-400 ">USE.com is a centralized exchange engineered for speed, compliance, and deep liquidity. The presale gives early buyers lifetime trading advantages, preferred staking yields, and day-one Launchpad access.</center>
            <center className="max-w-250">
                <div className="flex flex-col md:flex-row w-full gap-2 lg:gap-5  text-md font-bold">
                    <button className="flex-1 rounded-xl px-6 py-2 magnify text-white whitespace-nowrap bg-linear-to-r/srgb from-indigo-500 to-teal-400 ">
                        <span>Join Presale</span>
                    </button>
                    <button className="flex-1 rounded-xl px-6 py-2 magnify2 text-white whitespace-nowrap bg-linear-to-r/srgb from-indigo-500 to-teal-400">
                        <span>Download Litepaper</span>
                    </button>
                </div>
            </center>

            {/* rotating cell */}
            <div className="w-[700px] h-[700px] rounded-full relative circular-movement my-10 max-w-[800px] hidden md:flex">
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div class="w-[500px] h-[500px] rounded-full  bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.35),transparent_70%)] blur-3xl">
                    </div>
                </div>


                <div className="z-100 h-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 circular-movement-reverse">
                    <img src="/public/whyjoinus.png" alt="" className='h-full' />
                </div>

                {/* <!-- Card 1 --> */}
                <div class="rounded-full bg-[#0a0b0d]/50 w-50 h-50 flex flex-col items-center justify-center text-center border border-white/20 p-5 absolute top-0 left-1/2 -translate-x-1/2 circular-movement-reverse">
                    <p class="text-sm text-gray-200">Presale Status</p>
                    <h3 class="text-xl font-semibold text-white mt-1">Phase 3 · Live</h3>
                    <p class="text-sm text-gray-400 mt-1">$0.2 per USE</p>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="rounded-full bg-[#0a0b0d]/50 w-50 h-50 flex flex-col items-center justify-center text-center border border-white/20 p-5 absolute top-30 right-0 circular-movement-reverse">
                    <p class="text-sm text-gray-200">Presale Allocation</p>
                    <h3 class="text-xl font-semibold text-white mt-1">70M USE</h3>
                    <p class="text-sm text-gray-400 mt-1">
                        Allocated for presale buyers
                    </p>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="rounded-full bg-[#0a0b0d]/50 w-50 h-50 flex flex-col items-center justify-center text-center border border-white/20 p-5    absolute bottom-30 right-0 circular-movement-reverse">
                    <p class="text-sm text-gray-200">Sold So Far</p>
                    <h3 class="text-xl font-semibold text-white mt-1">
                        1,191,424 USE
                    </h3>
                    <p class="text-sm text-gray-400 mt-1">
                        Tokens sold to date
                    </p>
                </div>

                {/* <!-- Card 4 --> */}
                <div class="rounded-full bg-[#0a0b0d]/50 w-50 h-50 flex flex-col items-center justify-center text-center border border-white/20 p-5   absolute bottom-0 left-1/2 -translate-x-1/2 circular-movement-reverse">
                    <p class="text-sm text-gray-200">Liquidity Allocation</p>
                    <h3 class="text-xl font-semibold text-white mt-1">14M USE</h3>
                    <p class="text-sm text-gray-400 mt-1">
                        14,000,000 USE reserved for exchange liquidity and market stability.
                    </p>
                </div>

                {/* <!-- Card 5 --> */}
                <div class="rounded-full bg-[#0a0b0d]/50 w-50 h-50 flex flex-col items-center justify-center text-center border border-white/20 p-5  absolute top-30 left-0 circular-movement-reverse">
                    <p class="text-sm text-gray-200">Bonus tier</p>
                    <h3 class="text-xl font-semibold text-white mt-1">
                        Up to 10%
                    </h3>
                    <p class="text-sm text-gray-400 mt-1">
                        for early buyers & referrals
                    </p>
                </div>

                {/* <!-- Card 6 --> */}
                <div class="rounded-full bg-[#0a0b0d]/50 w-50 h-50 flex flex-col items-center justify-center text-center border border-white/20 p-5 absolute bottom-30 left-0 circular-movement-reverse">
                    <p class="text-sm text-gray-200">Launch Window</p>
                    <h3 class="text-xl font-semibold text-white mt-1">TBA</h3>
                    <p class="text-sm text-gray-400 mt-1">
                        TGE + CEX listing
                    </p>
                </div>

            </div>
            <center>
                <video
                    src="https://use.com/Video/useHeroDarkDesktop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    className="w-full"
                ></video>

            </center>

            <center className="flex gap-5 mt-5 mb-10 relative items-center max-w-[800px] ">
                <div className="flex flex-col gap-2  ">
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                        </svg>
                        <span className="">Fee discounts up to 30% for presale buyers at launch.</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                        </svg>
                        <span className="">Earn daily staking yield on locked USE once trading opens.</span>
                    </div>
                </div>
                <div className=""><img src="/public/earlybuyer.png" alt="" width="450" height="450" className="rounded-full" /></div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                        </svg>
                        <span className="">Guaranteed allocation on the USE Launchpad for future listings.</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                        </svg>
                        <span className="">Priority access to the new pro-grade trading UI and API keys.</span>
                    </div>
                </div>
            </center>
            <center className="text-md text-gray-400">Holders with 25k+ USE qualify for VIP maker rebates and concierge onboarding.</center>

            {/* comming soo */}

            <div className="flex gap-3 items-center bg-[#141414] border border-white/20 rounded-full px-6 py-1 mt-10 ">
                <img src="https://presale-asset.use.com/image/Images/newImg/commingSoon.png" height="40" width="40" alt="" className="rotatebreak" />
                <span className="text-xl text-gray-300 font-semibold">Coming soon</span>
                <img src="https://presale-asset.use.com/image/Images/newImg/commingSoon.png" height="40" width="40" alt="" className="rotatebreak" />
            </div>

            {/*  section */}


            <div className="relative z-10 w-full px-4 md:px-10 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2">

                    <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight bm">
                        Timing Of Crypto & <br /> Gold Prices
                    </h1>

                    <p className="mt-4 text-gray-400 text-lg">
                        An unstoppable duo
                    </p>

                    {/* GOLD */}
                    <div className="mt-10">
                        <h3 className="text-blue-500 text-lg font-semibold">Crypto</h3>
                        <p className="text-blue-400 mt-2 max-w-md border-b-2 border-b-blue-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Reiciendis eum perspiciatis incidunt.
                        </p>

                        {/* <div className="w-full h-[2px] bg-blue-500 mt-6"></div> */}
                    </div>

                    {/* SILVER */}
                    <div className="mt-8">
                        <h3 className="text-gray-400 text-lg font-semibold">Gold</h3>
                        <p className="text-gray-500 mt-2 max-w-md border-b-2 border-b-gray-600">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Ratione cupiditate illo asperiores.
                        </p>

                        {/* <div className="w-full h-[1px] bg-gray-600 mt-6"></div> */}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                        src="/gold3.png"
                        alt="object"
                        className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] object-contain glow imgbounce"
                    />
                </div>
            </div>

            <center className="flex gap-2 px-4 py-1 items-center text-white rounded-full border-[0.5px] border-gray-700 z-100 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                </svg>
                <span className="">Roadmap targets 100M verified users by Q2 2027 with quarterly drops.</span>
            </center>

        </div>
    )
}

export default CommingSoon
