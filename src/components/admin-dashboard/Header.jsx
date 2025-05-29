import Image from 'next/image'
import React from 'react'
import {FaSearch} from "react-icons/fa"
import {LuBell} from "react-icons/lu"

function Header() {
    return (
      <header className="bg-primary rounded-16 flex items-center justify-between px-8 py-3 mb-5">
        <div className="flex items-center justify-center gap-4">
          <Image src="/images/taaly-logo-2.png" width={84} height={74}></Image>
          <h2 className="text-heading-1 font-semibold text-primary">Taaly</h2>
        </div>
        <div className="bg-white gap-3 rounded-16 w-[551px] py-[12px] px-[16px] flex items-center justify-center">
          <FaSearch size={24} color="#B1B0B8"></FaSearch>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none focus:outline-none placeholder:font-medium text-heading-6 font-medium  placeholder:text-heading-6"
          ></input>
        </div>
        <div className="flex items-center justify-center gap-5 pr-6">
          <button className="relative">
            <LuBell size={35}></LuBell>
            <span className="rounded-full block absolute top-0.5 right-1 size-2.5 bg-red-600"></span>
          </button>
          <h2 className="font-bold text-heading-4">Hi, Jenny</h2>
          <Image src="/images/admin-image.png" width={87} height={87}></Image>
        </div>
      </header>
    );
}

export default Header
