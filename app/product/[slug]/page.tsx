import AddToBag from "@/app/components/AddToBag";
import CheckOutNow from "@/app/components/CheckOutNow";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
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

export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
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
                  Rs. {data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  Rs.{data.price + 130}
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
              <Link target="_blank" href={"https://wa.me/918077906395"}>
                <Button variant={"default"} className="p-6">
                  <Image
                    src={
                      "https://cdn.iconscout.com/icon/free/png-256/free-whatsapp-42-189793.png?f=webp&w=128"
                    }
                    alt="whatsapp logo"
                    width={30}
                    height={30}
                  />
                  <span className="ml-2">Get Enquiry</span>
                </Button>
              </Link>
            </div>
            <p className="mt-5 line text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
        {/* <h1 className="text-4xl">Details about products</h1>
        <p className=" mt-5 line text-base text-gray-500 tracking-wide">
          {data.description}
        </p> */}
      </div>
    </div>
  );
}
