import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[#111111] py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
          <div>
            <h3 className="text-[12px] font-normal text-white mb-4">
              FIND A STORE
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[10px] font-normal text-white"
                >
                  Become Link Member
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[10px] font-normal text-white"
                >
                  Sign Up for Email
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[10px] font-normal text-white"
                >
                  Send Us Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[10px] font-normal text-white "
                >
                  Student Discounts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[12px] font-normal text-white">
              GET HELP
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-white"
                >
                  Order Status
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-white"
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-white"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-white "
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-white"
                >
                  Contact Us on Nike.com
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-white"
                >
                  Contact Us on All Other Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[12px] font-normal text-white">
              ABOUT NIKE
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-white "
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-white"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-white"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-start lg:justify-end items-center gap-4 text-gray-300">
            <Link href="https://www.x.com/">
              <FaTwitter className="text-lg cursor-pointer hover:text-slate-100" />
            </Link>
            <Link href="https://www.facebook.com/">
              <FaFacebook className="text-lg cursor-pointer hover:text-slate-100" />
            </Link>
            <Link href="https://www.linkedin.com/">
              <FaLinkedin className="text-lg cursor-pointer hover:text-slate-100" />
            </Link>
            <Link href="https://www.instagram.com/">
              
              <FaInstagram className="text-lg cursor-pointer hover:text-slate-100" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between items-center">
          <div className="flex mb-4 md:mb-0 gap-2 item-center ">
            <IoLocationOutline />
            <p className="text-white text-[13px] font-bold">Pakistan</p>
            <p className="text-[13px] font-bold text-white ">
              © 2023 Nike Inc. All Rights Reserved
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="hover:underline text-[11px] font-normal text-white"
            >
              Guides
            </Link>
            <Link
              href="#"
              className="hover:underline text-[11px] font-normal text-white"
            >
              Terms of Sale
            </Link>
            <Link
              href="#"
              className="hover:underline text-[11px] font-normal text-white"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="hover:underline text-[11px] font-normal text-white"
            >
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
