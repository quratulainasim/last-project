import React from "react";
import Image from "next/image";
const Feature = () => {
  return (
    <>
       <div className="relative py-16 px-4 sm:px-6 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="font-bold text-2xl text-[#111111] sm:text-2xl ml-0 md:ml-14">
           New Featured
          </h2>
        </div>
        <div className="text-center max-w-7xl mx-auto">
          <Image
            src="/featurejpg.jpg"
            alt="image"
            width={1200}
            height={600}
            className="mx-auto"
          />
          <h1 className="text-[#111111] mt-8 text-3xl sm:text-4xl font-extrabold">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-[#111111]mt-4 text-base sm:text-lg">
            Cause everyone should know the feeling of running in that perfect
            pair
          </p>
        
          <button className="bg-[#111111] text-white font-medium rounded-full mt-6 px-6 py-3">
            Find Your Shoe
          </button>
         
        </div>
      </div>
    </>
  );
}

export default Feature;
