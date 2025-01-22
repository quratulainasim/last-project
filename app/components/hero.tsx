import React from "react";
import Image from "next/image";
import Link from "next/link";
const hero = () => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[1440px] bg-[#F5F5F5] mx-auto pt-2 pb-2">
        <div className="text-center text-[#111111] text-md font-normal">
          Hello Nike App
        </div>
        <div className="text-center text-[13px] text-[#111111] mt-1">
          Download the app to access everything Nike
          <span className="font-medium underline ml-1">Get Your Great</span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-[1344px] mx-auto">
        <Image src="/shoe1.jpg" alt="Nike Shoe" width={1200} height={1200} />
        <div className="w-full max-w-[1008px] text-center pt-10">
          <p className="text-[15px] font-medium leading-[24px] text-[#111111]">
            First Look
          </p>
          <p className="text-[56px] font-medium leading-[60px] text-[#111111]">
            Nike Air Max Pulse
          </p>
          <p className="text-[14px] font-normal leading-[24px] text-[#111111] mt-4 mx-auto max-w-[511px]">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse — designed to push you past your limits and help you go to the
            max.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Link href="/product">
              <button className="w-[110px] h-[39px] bg-[#111111] text-white text-sm rounded-3xl">
                Notify Me
              </button>
            </Link>
            <Link href="/product">
            <button className="w-[138px] h-[39px] bg-[#111111] text-white text-sm rounded-3xl">
              Shop Air Max
            </button>
            </Link>
          </div>
        </div>
      </div>











    </>
  );
}

export default hero
