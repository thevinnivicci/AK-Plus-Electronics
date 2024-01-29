import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white relative bottom-0 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Link href="/">
          <h1 className="text-2xl ">
            AK Plus <span className="text-primary">Electronics</span>
          </h1>
        </Link>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2024. All Rights Reserved.
        </p>

        <div className="flex -mx-2">
          <Link href="https://www.instagram.com/akplus49/">
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
