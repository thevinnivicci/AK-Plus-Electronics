"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Lcd", href: "/Lcd" },
  { name: "Scooty", href: "/Scooty" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            AK <span className="text-primary">Plus</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16 ">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transion duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l"></div>
      </div>
    </header>
  );
};

export default Navbar;
