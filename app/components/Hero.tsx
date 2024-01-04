import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { client, urlFor } from "../lib/sanity";

const getData = async () => {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
};

const Hero = async () => {
  const data = await getData();
  return (
    <section className="w-full h-fit px-1 lg:h-[calc(100vh-120px)] flex flex-col md:flex-col lg:flex-row ">
      <div className="w-full h-fit flex flex-col p-4 space-y-5 items-center justify-center md:h-full lg:items-normal lg:pl-10">
        <h1 className="text-4xl lg:text-6xl">
          Your Home,
          <br /> <span className="text-primary">Our Appliances,</span>
          Perfect Together
        </h1>
        <p className="text-md">
          Explore a realm of seamless living with our smart home appliances.
          Effortlessly blending innovation and style, our collection is designed
          to simplify your daily tasks, offering efficiency that enhances the
          harmony of your home. Transform your living space with cutting-edge
          technology and experience the joy of modern convenience every day.
        </p>
        <div className="w-full flex items-start">
          <Button>Shop now</Button>
        </div>
      </div>
      <div className="w-full h-full md:h-full p-5 lg:p-20">
        <Image
          src={urlFor(data.image1).url()}
          alt="hero"
          priority
          width={1000}
          height={1000}
          className="bg-cover w-full h-full rounded-md"
        />
      </div>
    </section>
  );
};

export default Hero;
