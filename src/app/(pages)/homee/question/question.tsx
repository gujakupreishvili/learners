"use client"
import React, { useState } from 'react';
import question from "../../../data/question.json";
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function Question() {
  const [visibleQuestions, setVisibleQuestions] = useState<Record<number, boolean>>({});
  const handleShow = (index: number) => {
    setVisibleQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div >
      <div className="flex flex-col justify-center items-center mb-[40px] mt-[70px]">
        <button className="text-[16px] bg-white border-[2px] border-black p-[8px] rounded-[6px] font-medium text-[#333333]">
          Solutions For The Doubts
        </button>
        <h3 className="text-[48px] text-[#1a1a1a] font-bold py-[6px]">
          Frequently Asked Questions
        </h3>
        <p className="text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px]">
          Find all the essential information you need in our FAQ section, designed to address the most frequently asked
          questions and help you make informed decisions for your childs education.
        </p>
      </div>
      <div className="flex flex-wrap justify-around">
        {question.map((res, index) => (
          <div
            key={index}
            className="w-[620px] h-auto border-[2px] border-black rounded-[10px] px-[35px] bg-[#ffefe5] mb-[20px] flex flex-col"
          >
            {/* Question text */}
            <div className="flex justify-between items-center py-[20px]">
              <p>{res.question}</p>
              <div
                onClick={() => handleShow(index)}
                className="w-[32px] h-[32px] border-[2px] border-black rounded-[4px] flex items-center justify-center bg-[#fff5f0] cursor-pointer"
              >
                {visibleQuestions[index] ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            {visibleQuestions[index] && (
              <>
              <div className='w-[80%] h-[2px] bg-black mt-[-10px]'></div>
              <p className="text-[16px] text-[#333333] mt-[20px] mb-[30px]">
                {res.answer}
              </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
