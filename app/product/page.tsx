import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
async function getdata(){
  const fetchdata=await client.fetch (`*[_type =="product"]{

  _id,
  productName,
  "imageUrl":image.asset->url,
  inventory,
  price,
  colors,
  category,
  status
  }`)
  console.log("Fetched Data: ", fetchdata);
  return fetchdata
}

export default async function Product() {
const data =await getdata()
console.log(data);

  return (
    <>
    <Header />
    <div className="col-span-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((val: any, index: number) => (
          <Link href={`/product/${val._id}`} key={val._id} className="p-4">
               <Image
                src={val.imageUrl}
                alt={val.name}
                width={348}
                height={348}
                className="mx-auto"
                />
             
    
            <div className="pt-4">
          
              <p className="text-sm text-[#9E3500] font-medium ml-5">{val.status}</p>
              <h2 className="text-base text-[#111111] font-medium ml-6">{val.productName}</h2>
              <p className="text-sm text-gray-500 ml-5">{val.category}</p>
              <p className="text-sm text-[#111111] font-medium ml-5 text-start ">${val.price}</p>
              <p className="text-sm text-[#111111] font-medium ml-5 text-start ">{val.inventory}</p>
              <p className="text-sm text-[#111111] font-medium ml-5 text-start ">{val.colors}</p>
             
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );

}
