import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { NAV_ITEMS } from "@/constant/navbar";

const Navbar = () => {
  const renderedNavItems = useMemo(
    () =>
      NAV_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="text-[16px] text-slate-700 justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          {item.label}
        </Link>
      )),
    []
  );

  return (
    <nav className="max-w-[100rem] mx-auto flex justify-between items-center p-8 lg:px-20">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={100} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">{renderedNavItems}</ul>
      <Link
        href="/login"
        className="bg-gray-800 hover:bg-black text-white font-bold px-6 py-3 rounded-full gap-3 lg:flex hidden"
      >
        <Image src="/user.svg" alt="user" width={20} height={29} />
        Login
      </Link>
      <Image
        src="menu.svg"
        alt="menu"
        width={40}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
