import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
        _id,
          name,
          price,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }
    `;
  const data = await client.fetch(query);
  return data;
}
export const dynamic = "force-dynamic";

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();
  return (
    <div className="w-full ">
      <div className="max-w-7xl px-5 flex justify-between mx-auto items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Latest Product
        </h2>
        <Link
          className="text-primary flex items-center gap-x-1"
          href="/products"
        >
          See All{" "}
          <span>
            <ArrowRight />
          </span>
        </Link>
      </div>
      <div className="lg:mt-5  max-w-7xl mx-auto p-5 gap-5 grid grid-cols-1 gap-x-6 gap-y-18 sm:grid-cols-2 lg:grid-cols-4 ">
        {data.map((product) => (
          <div
            key={product._id}
            className="group relative  hover:shadow-xl p-2 rounded-sm"
          >
            <div className="aspect-square w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:80">
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.imageUrl}
                  alt="product Image"
                  className="w-full h-full object-contain  object-center lg:h-full lg:w-full"
                  width={1000}
                  height={1000}
                />
              </Link>
            </div>
            <div className="mt-4 flex flex-col pt-3 justify-between">
              <div className="">
                <h3 className="text-md text-gray-700">
                  <Link href={`/product/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {product.categoryName}
                </p>
              </div>
              <div>
                <p className="text-sm lg:text-lg text-gray-900 font-semibold">
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
