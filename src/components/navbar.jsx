import React, { useState } from 'react'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <section className='fixed w-full top-0 left-0 py-3 px-6 md:px-10 backdrop-blur-md z-999'>
            
            <div className="flex items-center justify-between max-w-[1700px] mx-auto">

                {/* LOGO */}
                <div className="flex gap-2 items-center">
                    <img src="/star.png" alt="" className="h-5 md:h-7" />
                    <span className="bm text-lg sm:text-2xl">Mahmadul</span>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-8">
                    <span className="text-lg bm cursor-pointer hover:text-gray-300">About</span>
                    <span className="text-lg bm cursor-pointer hover:text-gray-300">Service</span>
                    <span className="text-lg bm cursor-pointer hover:text-gray-300">News</span>
                    <span className="text-lg bm cursor-pointer hover:text-gray-300">Contact</span>
                </div>

                {/* MOBILE BUTTON */}
                <div 
                    onClick={() => setNavOpen(!navOpen)} 
                    className="md:hidden cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={`
                md:hidden absolute left-0 top-full w-full bg-[url('/stars-bg.png')] h-[100dvh]
                flex flex-col items-center justify-center gap-6 py-6 transition-all duration-300 z-111
                ${navOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
            `}>
                <span className="text-[3rem] bm cursor-pointer">About</span>
                <span className="text-[3rem] bm cursor-pointer">Service</span>
                <span className="text-[3rem] bm cursor-pointer">News</span>
                <span className="text-[3rem] bm cursor-pointer">Contact</span>
            </div>

        </section>
    )
}

export default Navbar