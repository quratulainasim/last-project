import React from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
const Joinus = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center py-10">
      <h2 className="text-center text-[#111111] font-bold text-lg leading-6 pb-5">
          BECOME A NIKE MEMBER
        </h2>
        <p className="w-80 text-center text-[#8D8D8D] text-sm font-normal leading-6 pb-5">
          Create your Nike Member profile and get first access to the very best
          of Nike products inspiration and community.
        </p>
        <form action="" className="w-96 flex flex-col justify-center items-center sm:px-10 py-10">
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D] text-sm font-normal"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D] text-sm font-normal"
            type="text"
            placeholder="Password"
          />
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D] text-sm font-normal"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D] text-sm font-normal"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D] text-sm font-normal"
            type="text"
            placeholder="Date of Birth"
          />
        
          <div className="w-96 h-52 pt-1 flex flex-col items-center">
          <Link href={"../signin"}>
            <div className="w-96 border rounded-lg bg-black text-white text-[15px] font-normal p-4 text-center">
              SIGN IN
            </div>
            </Link>
            
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Joinus;
