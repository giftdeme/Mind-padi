import React from "react";
import "@/app/globals.css";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values:{ email:string; password: string }) => {
    console.log("submitted", values);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="MindPadi" />
          <p className="font-bold">MindPadi</p>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold">Sign In To Your Account</h1>
          <p className="text-[#8a93a0]">Find Comfort, One Conversation at a Time.</p>
        </div>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ errors, touched }) => (
            <Form className="mt-8 w-full">
              <div className="flex flex-col gap-6">
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-bold">Email Address</label>
                  <div className="input-field w-full flex bg-white border border-[#8a93a0] p-4 rounded-full gap-4 items-center">
                    <MdOutlineEmail />
                    <Field
                      type="email"
                      name="email"
                      className="bg-transparent border-none outline-none w-full text-[#8a93a0]"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="font-bold">Password</label>
                  <div className="input-field w-full flex bg-white border border-[#8a93a0] p-4 rounded-full gap-4 items-center">
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

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between mt-2">
                  <label className="flex items-center gap-2">
                    <Field type="checkbox" name="remember" />
                    Remember for 30 Days
                  </label>
                  <span className="text-[#8a93a0] cursor-pointer">Forgot Password?</span>
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 text-white p-4 rounded-full w-full">
                  Sign In
                </button>

                {/* Sign Up Link */}
                <div className="text-center mt-4">
                  <p>
                    Don't have an account? <span className="text-blue-500 cursor-pointer">Sign Up</span>
                  </p>
                </div>

                {/* Divider */}
                <p className="text-center mt-4">OR</p>

                {/* Social Login Buttons */}
                <button type="button" className="bg-white border rounded-full p-4 flex items-center justify-center gap-4 border-[#8a93a0]">
                  <FcGoogle />
                  Sign In With Google
                </button>

                <button type="button" className="bg-white border rounded-full p-4 flex items-center justify-center gap-4 border-[#8a93a0]">
                  <IoLogoApple />
                  Sign In With Apple
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
