import React from "react";
import Header from "../components/header";
import  Image  from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
const Help = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center px-10 md:px-0">
        <h2 className="text-[32px] font-medium  text-[#111111] mt-8">
          GET HELP
        </h2>
        <div className="flex px-4 py-3 rounded-md w-72 lg:w-[30%] border-2 border-text-secondary-gray mt-4 justify-between">
          <input
            className="focus-visible:outline-none w-full lg:w-[64%] placeholder:text-[#757575] text-[15px] font-normal"
            type="text"
            placeholder="What can we help you with?"
            name=""
            id=""
          />
          <Image src="/h4.png" alt="image" width={24} height={18} />
        </div>
        <div className="grid grid-cols-12 md:px-16 pt-14 pb-10 bg-white text-gray-800">
          <div className="col-span-12 lg:col-span-9 border-none lg:border-r-[1.3px] pr-0 md:pr-4 border-text-secondary-gray">
            <h2 className="text-[28px] text-[#111111] leading-8 font-medium mb-4">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="text-[15px] font-normal text-[#111111] mb-4 ">
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <div className="list-disc pl-5 mb-6 space-y-2">
              <p className="text-[#111111] font-normal text-base leading-7">
                Visa, Mastercard, Diners Club, Discover, American Express, Visa
                Electron, Maestro
              </p>
              <p className="text-[#111111] font-normal text-[15px] leading-7">
                If you enter your PAN information at checkout, you&apos;ll be
                able to pay for your order with PayTM or a local credit or debit
                card.
              </p>
              <p className="text-base text-[#111111] font-normal">Apple Pay</p>
            </div>
            <p className="mb-6 leading-7 text-[15px] text-[#111111] font-normal">
              <span className="underline font-medium text-base leading-7">
                Nike Members
              </span>
              can store multiple debit or credit cards in their profile for
              faster checkout. If you&apos;re not already a Member,
              <span className="underline text-base text-[#111111] leading-7 font-medium">
                join us
              </span>
              today.
            </p>

            <div className="flex mt-4 gap-4">
              <button className="rounded-full px-5 py-2 text-white font-medium text-base bg-[#111111]">
                Join Us
              </button>
              <button className="rounded-full px-5 py-2 text-white font-medium text-base bg-[#111111] ">
                Shop Nike
              </button>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#111111] mb-4 pt-3">
                FAQs
              </h3>
              <div className="mb-6">
                <h4 className="text-base text-[#111111] font-bold mb-2">
                  Does my card need international purchases enabled?
                </h4>
                <p className="text-[#111111] font-normal text-base leading-7 ">
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout if
                  international purchases need to be enabled.
                </p>
                <p className="mt-2 text-[15px] font-normal text-[#111111]">
                  Please note, some banks may charge{" "}
                  <span className="text-[15px] text-[#111111] font-medium underline">
                    a small transaction fee
                  </span>
                  for international orders.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-[15px] text-[#111111] font-bold mb-2">
                  Can I pay for my order with multiple methods?
                </h4>
                <p className="text-[#111111] font-normal text-[15px]">
                  No, payment for Nike orders can&apos;t be split between
                  multiple payment methods.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-[15px] text-[#111111] font-bold mb-2">
                  What payment method is accepted for SNKRS orders?
                </h4>
                <p className="text-[15px] font-normal text-[#111111]">
                  You can use any accepted credit card to pay for your SNKRS
                  order.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-base text-[#111111] font-bold mb-2">
                  Why don&apos;t I see Apple Pay as an option?
                </h4>
                <p className="text-base text-[#111111] font-normal leading-7">
                  To see Apple Pay as an option in the Nike App or on Nike.com,
                  you&apos;ll need to use a compatible Apple device running the
                  latest OS, be signed in to your iCloud account and have a
                  supported card in your Wallet. Additionally, you will need to
                  use Safari to use Apple Pay on Nike.com.
                </p>
              </div>
              <div className="mb-6">
                <p className="mb-2 text-[#111111] text-[15px] font-normal">
                  Was this answer helpful?
                </p>
                <div className="flex space-x-2">
                  <Image
                    src="/thup.png"
                    alt="image"
                    width={30}
                    height={30}
                    className="w-6 h-6 cursor-pointer"
                  />
                  <Image
                    src="/thdown.png"
                    alt="image"
                    width={30}
                    height={30}
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              </div>
              <h4 className="text-base font-medium mt-8 mb-4 text-[#757575]">
                RELATED
              </h4>
              <ul className="space-y-2 ml-6">
                <li>
                  <Link
                    href="#"
                    className="underline font-medium text-base text-[#111111]"
                  >
                    WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="underline font-medium text-[#111111] text-base"
                  >
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 pt-10 lg:pt-0 space-y-14 px-10">
            <h2 className="font-medium text-[28px] leading-8 text-[#111111] text-center">
              CONTACT US
            </h2>

            <div className="flex flex-col items-center space-y-2 text-center">
              <Image src="/phone.png" alt="image" width={64} height={64} />
              <p className="font-medium text-base text-[#111111]">
                000 800 919 0566
              </p>
              <p className="text-base text-[#111111] font-normal leading-7">
                Products & Orders: 24 hours a day, 7 days a week
              </p>
              <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <Image src="/text.png" alt="image" width={64} height={64} />
              <p className="text-[#111111] text-[15px] font-medium underline">
                24 hours a day
              </p>
              <p className="text-[#111111] text-[15px] font-normal">
                7 days a week
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <Image src="/email.png" alt="image" width={64} height={64} />
              <p className="text-[#111111] text-[15px] font-medium ">
                We will reply within
              </p>
              <p className="text-[#111111] text-[15px] font-normal">
                five business days
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <Image src="/map.png" alt="image" width={64} height={64} />
              <p className="font-medium text-[#111111] text-base">
                STORE LOCATOR
              </p>
              <p className="font-normal text-[#111111] text-base leading-7">
                Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </div>
     <Footer />
    </>
  )
}

export default Help;
