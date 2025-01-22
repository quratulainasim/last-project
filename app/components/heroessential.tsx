import React from "react";
import Image from "next/image";
import Link from "next/link";



const Heroessential = () => {
  return (
    <>
          <div className="relative py-8 px-4 sm:px-8">
        <div className="max-w-full mx-auto text-center h-auto">
          <h1 className="text-2xl leading-tight ml-8 text-[#111111] sm:leading-[60px] text-left font-bold">
             Winter Sell
          </h1>
          <div className="max-w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className=" p-5 mb-8">
             
              <Image
                src="/nke6jpg.jpg" 
                alt="image"
                width={350}
                height={350}
                className="mx-auto rounded-lg"
              />
            </div>
            <div className=" p-5 mb-8">
             
              <Image
                src="/nike7.jpg"
                alt="image"
                width={350}
                height={350}
                className="mx-auto rounded-lg"
              />
            </div>
            <div className="p-5 mb-8">
             
              <Image
                src="/nike8.jpg"
                alt="image"
                width={350}
                height={350}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-10 md:px-16 lg:px-72 py-9 items-center mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left gap-4">
        <div>
  <h3 className="text-[#111111] font-medium text-[15px] mb-2">Icons</h3>
  <ul className="space-y-2 text-left text-[15px] font-medium text-[#757575]">
    <li>
      <Link href="/product" className="hover:text-[#111111] transition-colors">
        Air Force 1
      </Link>
    </li>
    <li>
      <Link href="/product" className="hover:text-[#111111] transition-colors">
        Huarache
      </Link>
    </li>
    <li>
      <Link href="/product" className="hover:text-[#111111] transition-colors">
        Air Max 90
        </Link>
    </li>
    <li>
      <Link href="/product" className="hover:text-[#111111] transition-colors">
        Air Max 95
      </Link>
    </li>
  </ul>
</div>

          <div>
            <h3 className="text-[#111111] font-medium text-[15px] mb-2">Shoes</h3>
            <ul className="space-y-2 text-[15px] text-[#757575] font-medium text-left">
              <li>
              <Link href="/product" className="hover:text-[#111111] transition-colors">
                All Shoes
                </Link>
                </li>
              <li>
              <Link href="/product" className="hover:text-[#111111] transition-colors">
                Custom Shoes
                </Link>
                </li>
              <li>
              <Link href="/product" className="hover:text-[#111111] transition-colors">
                Jordan Shoes
                </Link>
                </li>
              <li>
              <Link href="/product" className="hover:text-[#111111] transition-colors">
                Running Shoes
                </Link>
                </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#111111] font-medium text-[15px] mb-2">Clothing</h3>
            <ul className="space-y-2 text-[15px] font-medium text-[#757575] text-left">
              
              <li>
             
                All Clothing
                
                </li>
              <li>
             
                Modest Wear
              
                </li>
              <li>
              
                Hoodies & Pullovers
              
                </li>
              <li>
          
                Shirts & Tops
             
                </li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-medium text-sm mb-2">Kid&apos;s</h3>
            <ul className="space-y-2 text-[#757575] text-[15px] font-medium text-left">
              <li>
              
                Infant & Toddler Shoes
              
                </li>
              <li>
                Kids&apos; Shoes
                
                </li>
              <li>
                Kids&apos; Jordan Shoes
               
                </li>
              <li>
                Kids&apos; Basketball Shoes
                
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heroessential
