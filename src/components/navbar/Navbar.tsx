"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "@/dumby";
import { MdMenu, MdClose, MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navbarBgColor = "bg-gray-900";

  return (
    <nav className={`sticky top-0 z-50 ${navbarBgColor}`}>
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/home"
          className="text-xl md:text-2xl font-extrabold text-white"
          onClick={() => setOpen(false)}
        >
          Jay Hanuman Aagao Traders
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {links[0].links.map((link) => (
            <Link
              key={link.url}
              href={`/${link.url}`}
              className={`text-white hover:underline hover:underline-offset-[28px] decoration-[4px] decoration-blue-600 ${
                pathname === `/${link.url}` ? "underline underline-offset-[28px]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/contact">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Contact Us
              <MdKeyboardArrowRight size={22} />
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="flex flex-col px-6 py-6 space-y-5">

            {links[0].links.map((link) => (
              <Link
                key={link.url}
                href={`/${link.url}`}
                onClick={() => setOpen(false)}
                className="text-white text-lg pb-2"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/contact" onClick={() => setOpen(false)} className="text-white text-lg pb-2">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
