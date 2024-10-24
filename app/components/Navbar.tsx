import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { LogoIcon } from "./Icons";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div >
            <LogoIcon />
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
