"use client";
import React, { useState, useEffect } from "react";
import { client } from "../lib/sanity";
import { product } from "../interface";
import Link from "next/link";
import Image from "next/image";
import Category from "../components/Category";
import SearchBar from "../components/SearchBar";

const PAGE_SIZE = 12; // Number of products per page

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const query = `*[_type == "product"] | order(_createdAt desc) { _id, "imageUrl": images[0].asset->url, price, name, "slug": slug.current, "categoryName": category->name }[${
        (page - 1) * PAGE_SIZE
      }...${page * PAGE_SIZE}]`;
      const data = await client.fetch(query);
      setProducts(data);
      setLoading(false);
    }

    fetchData();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="w-full flex flex-col overflow-hidden items-center justify-center">
      {/* <SearchBar /> */}
      <Category />
      {/* <h1 className="text-center text-5xl">
        Our <span className="text-primary"> Products</span>
      </h1> */}
      <div className="mt-2 max-w-7xl mx-auto p-5 grid grid-cols-1 gap-x-6 gap-y-18 lg:gap-y-5 sm:grid-cols-2 lg:grid-cols-4 ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map((product: any) => (
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
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
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
          ))
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="mr-2 px-3 py-1 bg-gray-200 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={products.length < PAGE_SIZE}
          className="px-3 py-1 bg-gray-200 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
