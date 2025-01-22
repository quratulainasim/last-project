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
          <p className="pb-3 text-[#8D8D8D] text-[11px] font-normal text-center">
            Get a Nike Member Reward every year on your Birthday.
          </p>
          <select
            className="w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D] text-sm font-normal"
            name=""
            id=""
          >
            <option className="text-[#8D8D8D]" value="">
              India
            </option>
            <option className="text-[#8D8D8D]" value="">
              United States
            </option>
            <option className="text-[#8D8D8D]" value="">
              United Kingdom
            </option>
            <option className="text-[#8D8D8D]" value="">
              Pakistan
            </option>
            <option className="text-[#8D8D8D]" value="">
              Canada
            </option>
          </select>
          <div className="flex gap-2 mt-1">
            <div className="w-48 border-[#E5E5E5] rounded-md  border-[2px] py-3 px-1 text-center text-[#8D8D8D] text-[13px] font-normal">
              Male
            </div>
            <div className="w-48 border-[#E5E5E5] rounded-md py-3 px-1 border-[2px]  text-center text-[#8D8D8D] text-[13px] font-normal">
              Female
            </div>
          </div>
          <div className="flex justify-between items-center py-7">
            <div>
              <input type="checkbox" id="remember" />
              <label
                className="ml-2 pl-2 cursor-pointer text-[#8D8D8D] font-normal text-[11px]"
                htmlFor="remember"
              >
                Sign up for emails to get updates from Nike on products offers
                and your Member benefits
              </label>
            </div>
          </div>

          <p className="text-[#8D8D8D] font-normal text-xs text-center pb-6">
            By creating an account you agree to Nike
            <Link
              className="underline font-medium text-[#8D8D8D] text-xs"
              href="#"
            >
              Privacy Policy
            </Link>
            and
            <Link
              className="underline font-medium text-[#8D8D8D] text-xs "
              href="#"
            >
              Terms of Use
            </Link>
            .
          </p>
          <div className="w-96 h-52 pt-1 flex flex-col items-center">
            <div className="w-96 border rounded-lg bg-black text-white text-[15px] font-normal p-4 text-center">
              JOIN US
            </div>
            <span className="text-[#8D8D8D] font-normal text-[11px] pt-1 text-center">
            Already a member?
            <Link href={"../signin"}>
              <span className="text-[#8D8D8D] font-medium text-[11px] underline pl-1">
              
                Sign In.
              </span>
            </Link>
          </span>
          </div>
        </form>


























      </div>
      <Footer />
    </>
  )
}

export default Joinus;
