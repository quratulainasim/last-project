import React from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
const Signin = () => {
  return (
    <>
    <Header />
      <div className="flex flex-col items-center min-h-screen   py-10">
      <h2 className=" w-40 text-center text-[#111111] text-lg font-bold pb-5">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>
        <form action="" className="flex flex-col w-96 sm:px-10 py-10">
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D] text-sm font-normal"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D] font-normal text-sm"
            type="text"
            placeholder="Password"
          />
          <div className="flex justify-between items-center py-5">
            <div>
              <input type="checkbox" id="remember" />
              <label
                className="ml-2 pl-2 cursor-pointer text-[#8D8D8D] font-normal text-xs"
                htmlFor="remember"
              >
                Keep me signed in
              </label>
            </div>
            <div>
              <span>
                <Link href="#" className="text-[#BCBCBC] text-xs font-normal">
                  Forgotten your password?
                </Link>
              </span>
            </div>
          </div>
          <p className="text-[#8D8D8D] font-normal text-xs leading-4 text-center pb-6">
            By logging in you agree to Nike
            <Link className="underline text-[#8D8D8D] font-normal text-xs leading-4 " href="#">
              Privacy Policy
            </Link>
            and
            <Link className="underline text-[#8D8D8D] font-normal text-xs leading-4 " href="#">
              Terms of Use
            </Link>
            .
          </p>
          <div className="w-96 h-52 pt-1 flex flex-col items-center">
            <div className="w-96 border rounded-lg bg-black text-white text-[11px] font-normal p-4 text-center">
              SIGN IN
            </div>
            <span className="text-[#8D8D8D] font-normal pt-1 text-center text-xs">
              Not a member?
              <Link href={"../joinus"}>
                <span className="text-[#8D8D8D] font-normal text-xs underline pl-1"> Join Us.</span>
              </Link>
            </span>
          </div>
        </form>





     </div>
     <Footer />
    </>
  );
}

export default Signin;
