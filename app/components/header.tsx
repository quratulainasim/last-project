"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { ClerkLoaded, SignInButton, UserButton, useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation"; 
import { client } from "@/sanity/lib/client";


const Header: React.FC = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const router = useRouter();

  
  const fetchProducts = async (search: string) => {
    if (!search) return setResults([]);
    const data = await client.fetch(
      `*[_type == "product" && productName match $search]{
        _id, productName
      }`,
      { search: `${search}*` } 
    );
    setResults(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    fetchProducts(value);
  };

  
  const handleSelect = (id: string) => {
    router.push(`/product/${id}`);
    setQuery("");
    setResults([]);
  };

  return (
    <>
      <div className="max-w-[1440px] h-[36px] bg-[#F5F5F5] mx-auto flex justify-between px-4 md:px-8 lg:px-16 ">
        <div className="w-[24px] h-[24px] mt-[6px] ml-[48px]">
          <Image src="/logo.png" alt="image" width={50} height={50} className="rounded-full" />
        </div>
        <div className="w-auto h-[36px] flex items-center space-x-2 text-xs pr-3 font-medium text-[#111111]">
          <Link href="/">Home</Link>
          <span>|</span>
          <Link href="/product">Products</Link>
          <span>|</span>
          <Link href="/help">Help</Link>
          <span>|</span>
          <Link href="/joinus">Join Us</Link>
          <span>|</span>
          <ClerkLoaded>
            {isLoaded && isSignedIn && user ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal" />
            )}
          </ClerkLoaded>
        </div>
      </div>

      <div className="w-full max-w-[1440px] h-[60px] bg-white mt-[36px] flex justify-between items-center px-4 md:px-8 lg:px-16">
        <div className="w-[78px] h-[78px] flex justify-center items-center">
          <Image src="/h3.png" alt="image" width={50} height={50} />
        </div>
        <div className="w-auto flex items-center">
          <div className="hidden md:block">
            <ul className="flex space-x-2 sm:space-x-4 md:space-x-8 text-sm font-medium text-[#111111]">
              <li><Link href="/">New Featured</Link></li>
              <li><Link href="/">Winter Sale</Link></li>
              <li><Link href="/">Clothing</Link></li>
              <li><Link href="/">New Arrival</Link></li>
              <li><Link href="/">Kids</Link></li>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="relative ml-4 md:ml-8 lg:ml-16">
            <input
              type="text"
              placeholder="Search product..."
              value={query}
              onChange={handleChange}
              className="w-[180px] h-[40px] bg-slate-100 rounded-full px-4 text-sm text-gray-700"
            />
            {results.length > 0 && (
              <ul className="absolute bg-white shadow-md mt-2 w-full rounded-lg text-sm">
                {results.map((product) => (
                  <li
                    key={product._id}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelect(product._id)}
                  >
                    {product.productName}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mr-4 md:mr-8 lg:mr-16">
          {/* <Image src="/h4.png" alt="search icon" width={40} height={40} className="md:hidden" /> */}
          <Link href="/cart" className="relative">
            <Image src="/cart.png" alt="cart icon" width={28} height={28} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

       