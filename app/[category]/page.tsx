"use client";
import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import { useState, useEffect } from "react";

async function getData(categorySlug: string) {
  const query = `*[_type == "product" && category->slug.current == "${categorySlug}"] | order(_createdAt desc) {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
  }`;

  const data = await client.fetch(query);

  return data || []; // Handle cases where data is null
}

export const dynamic = "force-dynamic";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const [products, setProducts] = useState<simplifiedProduct[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data: simplifiedProduct[] = await getData(category);
      setProducts(data);
    }
    fetchData();
  }, [category]);

  // Function to capitalize each word and add space after each word
  const capitalizeAndSpace = (str: string) => {
    return str
      .split("-") // Split by "-"
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join with space
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl mt-5 font-bold tracking-tight text-gray-900">
            Our Products for{" "}
            <span className="capitalize">{capitalizeAndSpace(category)}</span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full h-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-contain object-center lg:h-full lg:w-full"
                    width={600}
                    height={600}
                  />
                </Link>
              </div>

              <div className="mt-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 line-clamp-1">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-900 font-medium">
                    Rs. {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
