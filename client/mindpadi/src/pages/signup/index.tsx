import React from "react";
import "@/app/globals.css";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { MdLogout } from "react-icons/md";
import Image from "next/image";
import logo from "../../assets/logo.png"
import {Formik,Form,Field,ErrorMessage }from "formik";
import *as Yup from "yup";

const Index = () => {
  const initialValues = {
fullName:"",
email:"",
password:"",
  }
  const validationSchema = Yup.object({
    fullName:Yup.string().required("Full name is required"),
    email:Yup.string().email("Invalid email address").required("Email is required"),
    password:Yup.string().min(6,"Password must be at least 6 characters").required("Password is required"),
  });
  const handleSubmit = (values:{fullName:string; email:string;password:string}) => {
    console.log("submitted", values);
  }
  return (
    <div className="bg-[#f8fafc] min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center text-center mb-6">
        <Image  src={logo} alt='MindPadi'/>
        <p className='font-bold'>MindPadi</p>
        </div>

        <div className="flex gap-4 flex-col mt-4 text-center">
          <h1 className="text-3xl font-semibold">Sign Up For Free</h1>
          <p className="text-[#8a93a0]">Find Comfort, One Conversation at a Time</p>
        </div>
<Formik initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={handleSubmit}>
  {({errors,touched}) => (
  <Form className="mt-8 w-full">
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-4">
      <label htmlFor="fullName" className="font-bold">Full Name</label>
      <div className="input-field w-full flex bg-white border-[#8a93a0] border-2 p-4 rounded-full gap-4 items-center">
        <CiUser />
        <Field
          type="text"
          name="fullName"
          className="bg-transparent border-none outline-none w-full text-[#8a93a0]"
          placeholder="X_AE__A13b"
        />
      </div>
      <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
    </div>

    <div className="flex flex-col gap-4">
      <label htmlFor="email" className="font-bold">Email</label>
      <div className="input-field w-full flex bg-white border-[#8a93a0] border-2 p-4 rounded-full gap-4 items-center">
        <MdOutlineEmail />
        <Field
          type="email"
          name="email"
          className="bg-transparent border-none outline-none w-full text-[#8a93a0]"
          placeholder="elementary21b@gmail.com"
        />
      </div>
      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
    </div>

    <div className="flex flex-col gap-4">
      <label htmlFor="password" className="font-bold">Password</label>
      <div className="input-field w-full flex bg-white border-[#8a93a0] border-2 p-4 rounded-full gap-4 items-center">
        <TbLockPassword />
        <Field
          type="password"
          name="password"
          className="bg-transparent border-none outline-none w-full text-[#8a93a0]"
          placeholder="********"
        />
      </div>
      <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
    </div>

    <button className="bg-blue-800 text-white flex justify-center items-center p-4 rounded-full gap-2 mt-4">
      Sign Up
      <LuLogOut />
    </button>

    <div className="flex gap-2 mt-4 text-center justify-center">
      <p>Already have an account?</p> <span className="text-blue-600 cursor-pointer">Sign In</span>
    </div>

    <button className="bg-white border-solid rounded-full p-4 text-black flex justify-center items-center gap-4 mt-4 border-[#8a93a0] border-2">
      <FcGoogle />
      Sign Up with Google
    </button>
  </div>
</Form>
  )}
    </Formik>    
      </div>
    </div>
  );
};

export default Index;
