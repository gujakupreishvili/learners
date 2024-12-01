"use client"
import Link from 'next/link';
import React from 'react';
import logo from '../../../../public/assets/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  

  return (
    <div className='flex items-center justify-between h-[70px] mx-[30px]  mt-[24px] mb-[44px] rounded-[12px] border-[2px] border-black '>
      <div className='bg-[#FF8D4D] flex items-center h-[66px] px-[12px] gap-[6px] rounded-l-[8px]'>
        <Image src={logo} alt='logo' className='w-[24px] h-[24px]' />
        <p>Little Learners</p>
      </div>
      <div className='flex justify-between'>
        <Link
          href="/"
          className={`flex items-center justify-center h-[66px] px-[15px] border-l-[2px] border-r-[2px] border-black ${
            isActive("/") ? 'bg-[#ffefe5] text-black' : ''
          }`}
        >
          home
        </Link>
        <Link
          href="/about"
          className={`flex items-center justify-center h-[66px] px-[15px]  border-r-[2px] border-black  ${
            isActive("/about") ? 'bg-[#ffefe5] text-black' : ''
          }`}
        >
          about
        </Link>
        <Link
          href="/academics"
          className={`flex items-center justify-center h-[66px] px-[15px]  border-r-[2px] border-black  ${
            isActive("/academics") ? 'bg-[#ffefe5] text-black' : ''
          }`}
        >
          academics
        </Link>
        <Link
          href="/admis"
          className={`flex items-center justify-center h-[66px] px-[15px]  border-r-[2px] border-black  ${
            isActive("/admis") ? 'bg-[#ffefe5] text-black' : ''
          }`}
        >
          admission
        </Link>
        <Link
          href="/students"
          className={`flex items-center justify-center h-[66px] px-[15px]  border-r-[2px] border-black  ${
            isActive("/students") ? 'bg-[#ffefe5] text-black' : ''
          }`}
        >
          students
        </Link>
        <Link
          href="/contact"
          className={`flex items-center justify-center h-[66px] px-[15px] rounded-r-[8px] border-black  bg-[#ffae80] ${
            isActive("/contact") ? ' text-black' : ''
          }`}
        >
          contact
        </Link>
      </div>
    </div>
  );
}
