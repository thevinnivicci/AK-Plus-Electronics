import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewCollection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          {/* <p className="mx-auto sm:text-start md:text-center mt-4 max-w-full text-gray-500">
            Introducing our latest home appliance line: cutting-edge, efficient,
            and stylish. Elevate your kitchen with our sleek stainless steel
            refrigerator, designed for optimal storage and energy savings. Enjoy
            hassle-free cooking with our intuitive smart oven, equipped with
            advanced cooking modes and easy-to-use controls. Upgrade your home
            with innovation and elegance today!
          </p> */}
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <Link
              href={"/product/led-tv-6501zplus"}
              className="group relative block"
            >
              <Image
                src="https://cdn.sanity.io/images/upl8tvg0/production/891a16c97dc06c43f71125b8ca0650a6925ca110-1600x1600.jpg"
                alt="AK PLUS LED TV 6501ZPLUS image"
                width={3000}
                height={3000}
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  AK PLUS LED TV 6501ZPLUS
                </h3>

                <span className="mt-1.5 inline-block bg-primary  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link href={"/product/iron"} className="group relative block">
              <Image
                src="https://cdn.sanity.io/images/upl8tvg0/production/a90d32f07a856412ba05e9036094246705bd8b55-1280x1280.jpg"
                alt="AK PLUS IRON APHIK010 image"
                width={3000}
                height={3000}
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  AK PLUS IRON APHIK010
                </h3>

                <span className="mt-1.5 inline-block bg-primary  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Link
              href={"/product/led-tv-5501zp"}
              className="group relative block"
            >
              <Image
                src="https://cdn.sanity.io/images/upl8tvg0/production/f0f83a657ef042a4e421bf9c0ab4c91073a99b36-1600x1600.jpg"
                alt="AK PLUS LED TV 5501ZP image"
                width={3000}
                height={3000}
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  AK PLUS LED TV 5501ZP
                </h3>

                <span className="mt-1.5 inline-block bg-primary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NewCollection;
