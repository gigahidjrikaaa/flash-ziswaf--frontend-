import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import { useState } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";

export default function Navbar() {
  const [lastSection, setLastSection] = useState(0);
  const scrollDir = useScrollDirection();

  return (
    <nav className={"bg-orange-main flex px-8 justify-between fixed top-0 w-full z-[100] shadow-[0_5px_10px_rgba(0,0,0,.25)] transition duration-300 " + (
      scrollDir === "down" ? 
        "-translate-y-[100%]" :
        "translate-y-0"
    )}>
      <Link href="/" className="flex py-[9px] justify-center items-center w-fit gap-2">
        <Image src={Logo} alt="Logo" className="w-[46px]" />
        <h1 className="font-futura text-[32px]">Flash Ziswaf</h1>
      </Link>

      <div className="hidden lg:flex justify-center items-center font-inter text-[20px]">
        <Link
          href="#home"
          className={
            "flex justify-center items-center px-5 h-full " +
            (lastSection == 0
              ? "bg-white text-orange-main"
              : "text-white bg-transparent")
          }
          onClick={() => setLastSection(0)}
        >
          Home
        </Link>
        <Link
          href="#about"
          className={
            "flex justify-center items-center px-5 h-full " +
            (lastSection == 1
              ? "bg-white text-orange-main"
              : "text-white bg-transparent")
          }
          onClick={() => setLastSection(1)}
        >
          About
        </Link>
        <Link
          href="#pic"
          className={
            "flex justify-center items-center px-5 h-full " +
            (lastSection == 2
              ? "bg-white text-orange-main"
              : "text-white bg-transparent")
          }
          onClick={() => setLastSection(2)}
        >
          PIC
        </Link>
        <Link
          href="#lightning"
          className={
            "flex justify-center items-center px-5 h-full " +
            (lastSection == 3
              ? "bg-white text-orange-main"
              : "text-white bg-transparent")
          }
          onClick={() => setLastSection(3)}
        >
          Lightning
        </Link>
        <Link
          href="#news"
          className={
            "flex justify-center items-center px-5 h-full " +
            (lastSection == 4
              ? "bg-white text-orange-main"
              : "text-white bg-transparent")
          }
          onClick={() => setLastSection(4)}
        >
          News
        </Link>
        <Link href="/auth/login" className="ml-5 rounded-full outline outline-white outline-[1px] px-6 py-2 italic font-semibold">
          Login
        </Link>
      </div>
    </nav>
  );
}
