"use client";
import { useCart } from "@/app/context/cartcontext";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function ProductDetail({ params }: { params: { productDetail: string } }) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct = await client.fetch(
        `*[_type == "product" && _id == $id][0]{
          _id,
          productName,
          "imageUrl": image.asset->url,
          category,
          price,
          description
        }`,
        { id: params.productDetail }
      );
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, [params.productDetail]);

  if (!product) return <div>Loading...</div>;
  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.productName,
      price: product.price,
      quantity: product.quantity,
      imageUrl: product.imageUrl,
    });
  };
  return (
    <>
    <Header />
      <div className="container mx-auto pt-12 px-4">
        <div className="flex flex-wrap items-start justify-center gap-4 ">
          <Image src={product.imageUrl} alt={product.productName} width={600} height={600} />
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-center sm:text-left">{product.productName}</h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 mb-6 text-center sm:text-left">{product.category}</p>
            <p className="sm:text-md lg:text-xl font-medium text-gray-900 mb-2">${product.price}</p>
            <p className="text-sm sm:text-base text-gray-900 leading-6 sm:leading-7 mb-6 text-center sm:text-left">{product.description}</p>
          
           <div className="flex justify-center items-center gap-3 mb-7">
            <button
              onClick={handleAddToCart}
              
              className="bg-black text-white px-3 py-2 rounded-lg "
            >
              Add to Cart
            </button>
            <Link href="/cart" className="bg-black text-white px-3 py-2 rounded-lg">
              Go to Cart
                </Link>
           </div>
          </div>
        </div>
       </div>
      <Footer />
    </>
  );
}






















