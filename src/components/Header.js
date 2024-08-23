// components/Header.js
"use client";
import Image from 'next/image'

import Link from 'next/link';

export default function Header() {
  return (
    <header className=" text-white p-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
          <Image
              src="/Asset.png"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />      </div>
          <nav>
          <ul
  className="flex space-x-4 bg-white rounded-full text-black"
  style={{ padding: '17px 47px' }}
>              <li><a   style={{ lineHeight: '30px' }}
 href="/" className="text-[20px] font-[500] p-2 hover:underline">Home</a></li>
 {/* <li><a   style={{ lineHeight: '30px' }}
 href="/About" className="text-[20px] font-[500] p-2 hover:underline">About</a></li> */}
              <li><a   style={{ lineHeight: '30px' }}
 href="/About" className="text-[20px] font-[500] p-2 hover:underline">About</a></li>
              <li><a   style={{ lineHeight: '30px' }}
 href="/Portfolio" className="text-[20px] font-[500] p-2 hover:underline">Portfolio</a></li>
            </ul>
          </nav>
          <button className="btn bg-white rounded-full text-black py-1 px-3">
            <a href='/contact' >Get in Touch</a></button>
        </header>
  );
}

