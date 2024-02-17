import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900">
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
          <Link target="_blank" href="https://www.instagram.com/akplus49/">
            <Image
              src={
                "https://cdn.iconscout.com/icon/free/png-256/free-instagram-1868978-1583142.png?f=webp&w=128"
              }
              alt="instagram logo"
              width={30}
              height={30}
            />
          </Link>
          <Link
            target="_blank"
            className="ml-2"
            href="https://www.youtube.com/@AkPlus199"
          >
            <Image
              src={
                "https://cdn.iconscout.com/icon/free/png-256/free-youtube-82-189778.png?f=webp&w=128"
              }
              alt="youtube logo"
              width={30}
              height={30}
            />
          </Link>
          <Link
            className="ml-2"
            href={
              "https://www.facebook.com/profile.php?id=61554655914296&sfnsn=wiwspwa&mibextid=2JQ9oc"
            }
          >
            <Image
              src={
                "https://cdn.iconscout.com/icon/free/png-512/free-facebook-262-721949.png?f=webp&w=256"
              }
              alt="facebook logo"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
