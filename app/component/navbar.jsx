"use client"
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <>
  <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex py-2 items-center justify-between md:block">
            
              <Link href="/">
              <div >
                            <Link href="/" title="" className="flex">
                                <Image className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/logo.svg" width={900} height={900} alt="Logo" />
                            </Link>
                        </div>
              </Link>
              <IoMenuSharp />
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <MdClose  className="text-white size-7"/>
                  ) : (
                    <IoMenuSharp  className="text-white size-7"/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-4 text-xl text-white py-2 md:px-4 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/Features" onClick={() => setNavbar(!navbar)}>
                  Features
                  </Link>
                </li>
                <li className="pb-4 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/Pricing" onClick={() => setNavbar(!navbar)}>
                  Pricing
                  </Link>
                </li>
                <li className="pb- text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/Solutions" onClick={() => setNavbar(!navbar)}>
                  Solutions
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
