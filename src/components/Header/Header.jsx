import React from 'react'
import bannerImg from "../../assets/images/banner.jpg";
const Header = () => {
  return (
    <div className='h-[900px]'>
      <div className="max-w-7xl mx-auto hero rounded-b-3xl bg-[#c407f3]">
        <div className="hero-overlay rounded-b-3xl min-h-155"></div>
        <div className="flex flex-col justify-start text-neutral-content text-center">
          <div className="-mt-56 max-w-xl">
            <h1 className="mb-3 text-3xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="mb-5">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn btn-lg rounded-full text-[#9538e2]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 flex justify-center -mt-80 max-w-6xl mx-auto">
        <div className="bg-gray-500 border-4 border-white rounded-3xl max-w-[1280px] backdrop-blur-md bg-white/10 shadow-lg">
          <img
            src={bannerImg}
            alt=""
            className="h-[580px] w-5xl border-8  border-white/10 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;