import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React from "react";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const CryptoCard = () => {

    const width = window.innerWidth > 1700 ? 1700 : window.innerWidth
    const scrolllength = 2470 - width

    useGSAP(() => {

        const split1 = new SplitText('#cruptocardp', { type: 'chars' })

        gsap.to('#cryptocardscroll', {
            x: -scrolllength,
            scrollTrigger: {
                trigger: '#cryptocardsec',
                start: 'top 30%',
                end: '+=200',
                scrub: true,
            }
        })
        gsap.from(split1.chars, {
            opacity: 0.2,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#cruptocardp",
                start: "top 85%",
                end: "top 30%",
                scrub: true,
            }
        });
        gsap.from('#cryptocardh1', {
            // x: 200,
            scale: 0.1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: '#cryptocardh1',
                start: "top 85%",
                end: "top 30%",
                scrub: true,
            }
        })
    }, [])
    return (

        <section id="cryptocardsec" className=" w-full max-w-[1700px] flex flex-col gap-10 overflow-hidden">

            <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">

                {/* Left Heading */}
                <div id="cryptocardh1">
                    <h1  className="text-2xl sm:text-3xl lg:text-3xl font-bold bm">Top crypto currency today</h1>
                    <p className="text-gray-400 mt-2 text-lg">choose your gold</p>
                </div>

                {/* Right Text */}
                <div className="max-w-md">
                    <p id="cruptocardp" className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Corporis, illum doloribus quod necessitatibus vero blanditiis
                        sit est tempore optio esse.
                    </p>
                    <div className="h-[1px] bg-gray-600 mt-4 w-full"></div>
                </div>

            </div>


            <div id="cryptocardscroll" className="w-full items-center flex gap-5">


                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
                    <div key={key} className="bg-gradient-to-b from-[#3a4253]/20 to-[#2a3140]/20 text-white w-[320px] rounded-2xl p-5 shadow-lg border border-white/5">

                        {/* TOP */}
                        <div className="flex items-center gap-3">

                            {/* ICON (leave img src blank) */}
                            <div className="w-10 h-10 rounded-lg border border-green-500/20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-currency-bitcoin" viewBox="0 0 16 16">
                                    <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927z" />
                                </svg>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    BTC <span className="text-gray-400 font-normal">(Bitcoin)</span>
                                </h3>
                            </div>
                        </div>

                        {/* PRICE */}
                        <h2 className="text-2xl font-bold mt-6">
                            $62,554,396,339
                        </h2>

                        {/* STATS */}
                        <div className="flex justify-between items-center mt-4 text-sm">

                            <div>
                                <p className="text-[#fad88d] flex items-center gap-1">
                                    (-7.25%)
                                    <span className="rotate-[-45deg] inline-block">➜</span>
                                </p>
                                <p className="text-gray-300 mt-1">24H Change</p>
                            </div>

                            <div className="text-right">
                                <p className="text-gray-300">$2.100</p>
                                <p className="text-gray-300 mt-1">24H Volume</p>
                            </div>
                        </div>

                        {/* GRAPH */}
                        <div className="mt-6 backdrop-blur-xs">
                            <svg
                                viewBox="0 0 300 100"
                                className="w-full h-[80px]"
                                fill="none"
                            >
                                {/* GRID LINES */}
                                <g stroke="rgba(255, 255, 255, 0.21)" strokeWidth="1">
                                    {[...Array(6)].map((_, i) => (
                                        <line
                                            key={i}
                                            x1={(i * 300) / 5}
                                            y1="0"
                                            x2={(i * 300) / 5}
                                            y2="100"
                                        />
                                    ))}
                                </g>

                                {/* LINE */}
                                <path
                                    d="M0,70 
                                        C20,40 40,40 60,60 
                                        S100,90 120,60 
                                        S160,30 180,55 
                                        S220,80 240,60 
                                        S280,40 300,70"
                                    stroke="url(#grad)"
                                    strokeWidth="3"
                                    fill="none"
                                />

                                {/* END DOT */}
                                <circle cx="300" cy="70" r="4" fill="#fad88d" />

                                {/* GRADIENT */}
                                <defs>
                                    <linearGradient id="grad" x1="0" y1="0" x2="300" y2="0">
                                        <stop offset="0%" stopColor="#fad88d" />
                                        <stop offset="100%" stopColor="#facc15" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                ))}


            </div>

        </section>
    );
};

export default CryptoCard;