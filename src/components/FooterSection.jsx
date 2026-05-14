import React from "react";

const FooterSection = () => {
  return (
    <section className="relative w-full max-w-[1700px] text-white overflow-hidden border-t-2 mt-20">
      


      {/* Content */}
      <div className="z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row justify-between gap-12">
        
        {/* LEFT TEXT */}
        <div className="max-w-md flex flex-col gap-5">
            <div className="flex gap-5 items-center">
                <img src="/star.png" alt="" className="" />
                <sapn className="bm text-2xl sm:text-3xl lg:text-3xl">Mahmadul Hasan</sapn>
            </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut veniam molestiae blanditiis. Assumenda, nulla? Nulla
            veniam vero molestiae blanditiis.
          </p>
        </div>

        {/* RIGHT LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
          
          {/* Column 1 */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Resources</h4>
            <p className="text-gray-400 hover:text-white cursor-pointer">Client</p>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Company</h4>
            <p className="text-gray-400 hover:text-white cursor-pointer">Support</p>
            <p className="text-gray-400 hover:text-white cursor-pointer">Blog</p>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Help</h4>
            <p className="text-gray-400 hover:text-white cursor-pointer">Support</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FooterSection;