import React from "react";
import Link from "next/link";
import Image from "next/image";



 const Herobest = () => {
   return (
     <>

        <div className="relative bg-white px-4  mt-8  py-4">
        <div className="flex flex-col items-start sm:items-center md:items-start ml-4 sm:ml-0">
          <h2 className="font-bold text-2xl text-[#111111] mb-3 ml-4">
            Best of Air Max
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          <div className="border border-white rounded-md p-1">
            <Link href="/product">
            <Image
              src="/Women.jpg"
              alt="image"
              width={440}
              height={440}
              className="mx-auto rounded-lg"
            /></Link>
            <div className="mt-4">
              <h3 className="text-center font-medium text-lg text-[#111111]">
                Nike Air Max Pulse
              </h3>
              <p className="text-center text-sm text-[#757575]">Women Shoes</p>
              <p className="text-center font-bold mt-1 text-[#111111]">
              $ 13,995
              </p>
            </div>
          </div>
          <div className="border border-white rounded-md p-1">
            <Link href="/product">
            <Image
              src="/men.jpg"
              alt="image"
              width={440}
              height={440}
              className="mx-auto rounded-lg"
            /></Link>
            <div className="mt-4">
              <h3 className="text-center font-medium text-lg text-[#111111]">
                Nike Air Max Pulse
              </h3>
              <p className="text-center text-[#757575] text-sm">Men Shoes</p>
              <p className="text-center font-bold mt-1 text-[#111111]">
              $ 13,995
              </p>
            </div>
          </div>
          <div className="border border-white rounded-md p-1">
            
            <Link href="/product">
            <Image
              src="/p3.jpg"
              alt="image"
              width={440}
              height={440}
              className="mx-auto rounded-lg"
            /></Link>
            <div className="mt-4">
              <h3 className="text-center font-medium text-lg text-[#111111]">
              Nike Air Force 1 PLT.AF.ORM
              </h3>
              <p className="text-center text-[#757575] text-sm">Women Shoes</p>
              <p className="text-center font-bold mt-1 text-[#111111]">
              $ 10670
              </p>
            </div>
          </div>
          </div>
      </div>
      </div>
     </>
   )
 }
 
 export default Herobest;
 