"use client";
import AddToBag from "@/app/components/AddToBag";
import CheckOutNow from "@/app/components/CheckOutNow";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import { useState, useEffect } from "react";

export async function getData(Slug: string) {
  const query = `*[_type == "product" && slug.current == "${Slug}"][0] {
    _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    price_id
  }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [productData, setProductData] = useState<fullProduct | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data: fullProduct = await getData(params.slug);
      setProductData(data);
    }
    fetchData();
  }, [params.slug]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <ImageGallery images={productData.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {productData.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {productData.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button variant={"outline"} className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  Rs. {productData.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  Rs.{productData.price + 130}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="INR"
                description={productData.description}
                image={productData.images[0]}
                name={productData.name}
                price={productData.price}
                key={productData._id}
                price_id={productData.price_id}
              />
              <CheckOutNow
                currency="INR"
                description={productData.description}
                image={productData.images[0]}
                name={productData.name}
                price={productData.price}
                key={productData._id}
                price_id={productData.price_id}
              />
            </div>
            <p className="mt-5 line text-base text-gray-500 tracking-wide">
              {productData.description}
            </p>
          </div>
        </div>
        {/* <h1 className="text-4xl">Details about products</h1>
        <p className=" mt-5 line text-base text-gray-500 tracking-wide">
          {productData.description}
        </p> */}
      </div>
    </div>
  );
}
