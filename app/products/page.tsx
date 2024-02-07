import React from "react";
import { client } from "../lib/sanity";
import { product } from "../interface";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
  }`;
  const data = await client.fetch(query);

  return data;
}
export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const data: product[] = await getData();
  console.log(data);
  return (
    <div className="">
      <h1 className="text-center text-5xl">
        Our <span className="text-primary"> Products</span>
      </h1>
      <div className="mt-5 max-w-7xl mx-auto p-5 grid grid-cols-1 gap-x-6 gap-y-18 lg:gap-y-5 sm:grid-cols-2 lg:grid-cols-4 ">
        {data.map((product) => (
          <div key={product._id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:80">
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.imageUrl}
                  alt="product Image"
                  className="w-full h-full object-contain object-center lg:h-full lg:w-full"
                  width={1000}
                  height={1000}
                />
              </Link>
            </div>
            <div className="mt-4 flex flex-col justify-between ">
              <div>
                <h3 className="text-sm text-gray-700 line-clamp-1">
                  <Link href={`/product/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="uppercase mt-1 text-sm text-gray-500">
                  {product.categoryName}
                </p>
              </div>
              <div>
                <p className="text-smtext-gray-900 font-medium">
                  Rs. {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
