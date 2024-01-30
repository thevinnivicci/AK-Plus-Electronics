import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
const getData = async () => {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
};
export const dynamic = "force-dynamic";
const Hero = async () => {
  const data = await getData();
  return (
    <section
      className="w-full h-fit px-5 lg:mb-5 lg:h-[calc(100vh-120px)] flex flex-col 
    md:flex-col lg:flex-row "
    >
      <div className="w-full h-fit flex flex-col p-4 space-y-5 items-center justify-center md:h-full lg:items-normal lg:pl-10">
        <h1 className="text-3xl md:text-4xl sm:text-start md:text-center lg:text-start lg:text-6xl">
          Your Home, <span className="text-primary">Our Appliances,</span>
          Perfect Together
        </h1>
        <p className="text-md md:text-center lg:text-start">
          Explore a realm of seamless living with our smart home appliances.
          Effortlessly blending innovation and style, our collection is designed
          to simplify your daily tasks, offering efficiency that enhances the
          harmony of your home. Transform your living space with cutting-edge
          technology and experience the joy of modern convenience every day.
        </p>
        <div className="w-full sm:justify-center md:justify-center lg:justify-start flex items-start">
          <Link href="/products">
            <Button>Shop now</Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full aspect-sqaure md:h-full p-5 lg:p-20">
        <Image
          src={urlFor(data.image1).url()}
          alt="hero image"
          priority
          width={1000}
          height={1000}
          className="object-cover object-center w-full h-full rounded-md"
        />
      </div>
    </section>
  );
};

export default Hero;
