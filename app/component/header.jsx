import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    
        <div className="bg-gradient-to-b from-[#101212] relative to-[#08201D]">
          <header className="absolute inset-x-0 top-0 z-10 w-full bg-black">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                  <Link href="/" title="" className="flex">
                    <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/logo.svg" alt="" />
                  </Link>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                  <Link href="/Features" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Features </Link>

                  <Link href="/Solutions" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Solutions </Link>

                  <Link href="/Pricing" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Pricing </Link>
                </div>

                <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
                  <a href="#" title="" className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"> Log in </a>

                  <a href="#" title="" className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg" role="button"> Apply for free </a>
                </div>
              </div>
            </div>
          </header>
        </div>
  )
}

export default Header
