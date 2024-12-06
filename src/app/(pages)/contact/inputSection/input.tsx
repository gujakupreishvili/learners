"use client";
import { validation } from "@/app/utils/validationSchema";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FaCheck, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import {motion} from 'framer-motion'

const initialValues = {
  parentname: "",
  phonenumber: "",
  email: "",
  studentname: "",
  studentage: "",
  program: "", 
};

export default function Input() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
    
  });

  const handleSubmitted = async () => {
    const errors = await formik.validateForm();
    formik.setTouched({
      parentname: true,
      phonenumber: true,
      email: true,
      studentname: true,
      studentage: true,
      program: true,
    });
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    }
  };
  
  

  const { handleBlur, handleChange, handleSubmit, values,errors } = formik;
  console.log(values)

  return (
    <div>
      <motion.div 
          initial={{
            opacity:0
            }}
            whileInView={{
            opacity:1,
            scale:1.05,
            transition:{
            duration:2
            }
            }}
            viewport={{
            margin:"-100px 0px 400px 0px"
            }}
      className="flex flex-col justify-center items-center mb-[40px] mt-[120px]">
        <button className="text-[16px] bg-white border-[2px] border-black p-[8px] rounded-[6px] font-medium text-[#333333]">
          Contact Form
        </button>
        <h3 className="text-[48px] text-[#1a1a1a] font-bold py-[6px] sm:text-[38px] sm:text-center">
          Student Information
        </h3>
        <p className="text-[16px] font-medium text-[#333333] w-[880px] text-center pt-[7px] sm:w-full">
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form
          below. Kindly provide the following details to help us better
          understand your needs.
        </p>
      </motion.div>
      {
        !isSubmitted ? 
        <motion.div
        initial={{
          opacity:0
          }}
          whileInView={{
          opacity:1,
          scale:1.05,
          transition:{
          duration:2
          }
          }}
          viewport={{
          margin:"-100px 0px 400px 0px"
          }}
         className="bg-white border-[2px] border-black shadow-[6px_6px_0px_1px_#1e1e1e] rounded-[12px] mt-[100px] mb-[70px] px-[30px] sm:w-full">
        <div className="flex items-center gap-[12px] mt-[-20px] justify-center">
          <div className="w-[126px] h-[48px] sm:w-[74px] sm:h-[58px] border-[2px] border-black rounded-[8px] flex justify-center items-center bg-[#ffdecc]">
            <FaFacebook className="w-[24px] h-[24px]" />
          </div>
          <div className="w-[126px] h-[48px] sm:w-[74px] sm:h-[58px] border-[2px] border-black rounded-[8px] flex justify-center items-center bg-[#ffdecc]">
            <FaTwitter className="w-[24px] h-[24px]" />
          </div>
          <div className="w-[126px] h-[48px] sm:w-[74px] sm:h-[58px] border-[2px] border-black rounded-[8px] flex justify-center items-center bg-[#ffdecc]">
            <FaLinkedin className="w-[24px] h-[24px]" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-[40px] sm:w-full flex flex-wrap gap-[40px] justify-center pb-[50px]"
        >
          <div className="flex flex-col sm:w-full">
            <label htmlFor="parentname">Parent name</label>
            <input
              type="text"
              placeholder="Enter parent name"
              value={values.parentname}
              name="parentname"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`border-[2px] ${errors.parentname ? "border-red-500":"border-black"}  rounded-[6px] h-[72px] w-[540px] sm:w-[100%] pl-[20px] text-[18px]`}
            />
             {errors.parentname && (
            <p className="text-red-500   self-start mt-[5px]">{errors.parentname}</p>
          )}
          </div>

          <div className="flex flex-col sm:w-full">
            <label htmlFor="email">Email Address</label>
            <input
              value={values.email}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Email Address"
              className={`border-[2px] ${errors.email ? "border-red-500":"border-black"}  rounded-[6px] h-[72px] w-[540px] sm:w-[100%] pl-[20px] text-[18px]`}
            />
             {errors.email && (
            <p className="text-red-500   self-start mt-[5px]">{errors.email}</p>
          )}
          </div>

          <div className="flex flex-col sm:w-full">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              value={values.phonenumber}
              name="phonenumber"
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              placeholder="Enter Phone Number"
              className={`border-[2px] ${errors.phonenumber ? "border-red-500":"border-black"}  rounded-[6px] h-[72px] w-[540px] sm:w-[100%] pl-[20px] text-[18px]`}
            />
             {errors.phonenumber && (
            <p className="text-red-500   self-start mt-[5px]">{errors.phonenumber}</p>
          )}
          </div>

          <div className="flex flex-col sm:w-full">
            <label htmlFor="studentname">Student Name</label>
            <input
              value={values.studentname}
              name="studentname"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Student Name"
              className={`border-[2px] ${errors.studentname ? "border-red-500":"border-black"}  rounded-[6px] h-[72px] w-[540px] sm:w-[100%] pl-[20px] text-[18px]`}
            />
             {errors.studentname && (
            <p className="text-red-500   self-start mt-[5px]">{errors.studentname}</p>
          )}
          </div>

          <div className="flex flex-col sm:w-full">
            <label htmlFor="studentage">Student Age</label>
            <input
              value={values.studentage}
              name="studentage"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter Student Age"
              className={`border-[2px] ${errors.studentage ? "border-red-500":"border-black"}  rounded-[6px] h-[72px] w-[540px] sm:w-[100%] pl-[20px] text-[18px]`}
            />
             {errors.studentage && (
            <p className="text-red-500   self-start mt-[5px]">{errors.studentage}</p>
          )}
          </div>

          <div className="flex flex-col sm:w-full">
            <label htmlFor="program">Program of Interest</label>
            <select
              id="program"
              name="program"
              value={values.program}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border-[2px] border-black rounded-[6px] h-[72px] w-[540px] pl-[20px] text-[18px] sm:w-[100%]"
            >
              <option value="" disabled>
                Select a program
              </option>
              <option value="arts">Arts & Crafts</option>
              <option value="music">Music Classes</option>
              <option value="science">Basic Science</option>
              <option value="math">Math Fun</option>
              <option value="storytelling">Storytelling</option>
              <option value="sports">Beginner Sports</option>
            </select>
          </div>

          <div className="w-full flex justify-center flex-col items-center">
            <label htmlFor="message" className="text-start w-[86%]">
              Message
            </label>
            <textarea
              id="message"
              className="w-[86%] sm:w-full h-[161px] border-[2px] border-black rounded-[6px] pl-[20px] pt-[10px] text-[18px] resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button onClick={handleSubmitted} type="button" className="w-[86%] sm:w-full bg-[#ffae80] h-[78px] border-[2px] border-black rounded-[10px] text-[20px] font-medium">
            Submit
          </button>
        </form>
      </motion.div>
         :  <div className="flex flex-col  gap-[30px] items-center justify-center mt-[70px]">
         <div className="bg-[#ffae80] w-[100px] h-[100px] rounded-[50px] flex items-center justify-center  shadow-[6px_6px_0px_1px_#1e1e1e]">
         <FaCheck  className="text-[25px]"/>
         </div>
         <h1 className="text-[32px] font-bold text-center">Thanks!</h1>
         <p className="text-[20px font-medium text-center] mt-[-20px]">We have received your information.</p>
       </div>
      }
    </div>
  );
}
