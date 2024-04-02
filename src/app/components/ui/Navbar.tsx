"use client";

import React, { useState, useLayoutEffect } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  const fillColor = "#384238"; // Directly set the fill color to dark green

  const [isOpen, setIsOpen] = useState(false);

  const useLockBodyScroll = (open: boolean) => {
    useLayoutEffect(() => {
      // Original body overflow value to restore after unlocking
      const originalStyle = window.getComputedStyle(document.body).overflow;
      if (open) {
        // Lock
        document.body.style.overflow = "hidden";
      }
      return () => {
        // Revert back to the original style
        document.body.style.overflow = originalStyle;
      };
    }, [open]); // Only re-run the effect if open changes
  };

  useLockBodyScroll(isOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 w-full z-50 max-w-8xl">
      <div className="mx-8 shadow-md bg-white items-center rounded-full top-0  flex my-6  px-3 sm:px-6 justify-between overflow-hidden py-2.5">
        <div className="z-50 h-full">
          <Link href={"/"}>
            <h3 className="text-3xl relative tracking-tighter">
              Payable{" "}
              <span className="text-[10px] absolute -right-2 bottom-2">®</span>
            </h3>
          </Link>
        </div>
        <ul className="hidden items-center gap-10 sm:flex">
          <li>
            <Link href="/#" className="hover:">
              About
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:">
              Investors
            </Link>
          </li>
          <li>
            <Link href="/#" className="hover:">
              Contact
            </Link>
          </li>
        </ul>
        <button className="bg-black px-4 py-1.5 tracking-normal rounded-full text-white">
          Log in <span className={inter.className}>-&gt;</span>
        </button>
        <button
          onClick={handleClick}
          className="absolute right-2 top-9 z-50 flex flex-col sm:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
              isOpen
                ? "translate-y-1 rotate-45 transform"
                : "-translate-y-0.5 transform"
            }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
              isOpen
                ? "-translate-y-1 -rotate-45 transform"
                : "translate-y-0.5 transform"
            }`}
          ></span>
        </button>
        <div className="sm:hidden">
          <div
            className={`fixed inset-0 z-10 h-screen w-full transform bg-lightgray text-2xl transition-transform duration-300 ease-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } sm:hidden`}
          >
            <ul className="z-50 flex h-full flex-col items-center justify-center gap-2">
              <li>
                <Link href="/#" className="hover:">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
