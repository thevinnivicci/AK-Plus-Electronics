"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlignRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "HOME", href: "/" },
  { name: "OUR PRODUCTS", href: "/products" },
  { name: "LCD", href: "/Lcd" },
  { name: "SCOOTY", href: "/Scooty" },
  { name: "MIXER", href: "/Mixer" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mb-2 border-b sm:p-2 md:p-0 lg:p-0">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="flex items-center gap-0.5 mb-2 p-2 sm:mb-0">
          <Link href="/" className="flex items-center gap-0.5">
            <Image
              src="/logo.jpeg"
              alt="logo"
              width={500}
              height={500}
              className="md:w-14 md:h-14 w-10 h-10 rounded-lg"
            />
          </Link>
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden sm:flex flex-wrap justify-center gap-3 sm:justify-end lg:gap-12 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx} className="mb-2 sm:mb-0">
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className=" text-base font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-base font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden z-10 absolute top-16 right-4 bg-white p-4 rounded-md shadow-md">
            {links.map((link, idx) => (
              <div key={idx} className="mb-2">
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-base font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        )}
        {/* Cart button */}
        <div className="flex items-center gap-2 divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xl font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
          {/* Hamburger menu icon for mobile */}
          <div className="sm:hidden">
            <Button
              variant={"default"}
              onClick={toggleMenu}
              className="h-12 w-12 rounded-none"
            >
              <AlignRight />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
