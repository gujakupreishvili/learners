import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface FirstSectionCompProps {
  buttontext: string;
  h1text: string;
  ptext: string;
  imageSrc: StaticImageData; // Adjusted to accept imported images
}

export default function FirstSectionComp({ buttontext, h1text, ptext, imageSrc }: FirstSectionCompProps) {
  return (
    <div className="bg-white border-[2px] border-black shadow-[6px_6px_0px_1px_#1e1e1e] rounded-[10px]">
      <Image src={imageSrc} alt="frame" />
      <div className="flex px-[10%] pb-[7%] mt-[-7px]  sm:flex-col sm:justify-center sm:items-center">
        <div className=' sm:flex sm:flex-col sm:justify-center sm:items-center sm:mb-[20px]'>
          <button className="w-[100px] h-[40px] text-[16px] border-[2px] border-black rounded-[6px]">
            {buttontext}
          </button>
          <h1 className="text-[38px] text-[#1a1a1a] font-bold w-[535px] sm:w-full sm:text-center">{h1text}</h1>
        </div>
        <p className='sm:text-center'>{ptext}</p>
      </div>
    </div>
  );
}

