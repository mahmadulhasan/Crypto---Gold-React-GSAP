import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React from "react";

const Direction = () => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(SplitText)
  useGSAP(() => {

    const split1 = new SplitText('#directionp', { type: 'chars' })

    gsap.from('#directionh1', {
      // x: 200,
      scale: 0.1,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: '#directionsec',
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      }
    })

    gsap.from(split1.chars, {
      opacity: 0.2,
      stagger: 0.04,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#directionp",
        start: "top 85%",
        end: "top 30%",
        scrub: true,
      }
    });

    gsap.from('#directionimg1',{
      rotate:360,
      scale:0.2,
      ease: "power3.out",
      transformOrigin:'center',
      scrollTrigger:{
        trigger: '#directionimg1',
        start: "top 70%",
        end: "top 40%",
        scrub: true,        
      }
    })

    gsap.from('#directionimg2',{
      rotate:360,
      scale:0.2,
      ease: "power3.out",
      transformOrigin:'center',
      scrollTrigger:{
        trigger: '#directionimg2',
        start: "top 70%",
        end: "top 40%",
        scrub: true,        
      }
    })

    gsap.from('#directionimg3',{
      rotate:360,
      scale:0.2,
      ease: "power3.out",
      transformOrigin:'center',
      scrollTrigger:{
        trigger: '#directionimg3',
        start: "top 70%",
        end: "top 40%",
        scrub: true,        
      }
    })

  })
  return (
    <section id="directionsec" className="w-full min-h-screen px-4 md:px-10 lg:px-20 py-16 text-white">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">

        {/* Left Heading */}
        <div id="directionh1">
          <h1  className="text-2xl sm:text-3xl lg:text-3xl font-bold bm">3 Direction</h1>
          <p className="text-gray-400 mt-2 text-lg">choose your gold</p>
        </div>

        {/* Right Text */}
        <div className="max-w-md">
          <p id="directionp" className="text-gray-400 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Corporis, illum doloribus quod necessitatibus vero blanditiis
            sit est tempore optio esse.
          </p>
          <div className="h-[1px] bg-gray-600 mt-4 w-full"></div>
        </div>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

        {/* Card 1 */}
        <div className="bg-gradient-to-b from-[#3a4253]/30 to-[#2a3140]/30 hover:bg-[#3a4253]/60 rounded-xl p-6 flex flex-col justify-between min-h-[400px]">

          {/* Image */}
          <div className="flex justify-center items-center min-h-[250px]">
            <img id="directionimg1" src="/card-2.png" alt="" className="object-contain h-full" />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              Store of Value
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Focus on long-term holding. Strong assets tend to grow steadily over time.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-[#4a445c]/30 to-[#2c2a3a]/30 hover:bg-[#4a445c]/60 rounded-xl p-6 flex flex-col justify-between min-h-[400px]">

          <div className="flex justify-center items-center min-h-[250px]">
            <img id="directionimg2" src="/card-1.png" alt="" className="object-contain h-full" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              Growth Potential
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Invest in emerging projects with real utility and strong ecosystems.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-[#4a5870]/30 to-[#2c3445]/30 hover:bg-[#4a5870]/60 rounded-xl p-6 flex flex-col justify-between min-h-[400px]">

          <div className="flex justify-center items-center min-h-[250px]">
            <img id="directionimg3" src="/card-3.png" alt="" className="object-contain h-full" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              High Risk / High Reward
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Explore volatile assets for bigger gains, but manage risk carefully.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Direction;