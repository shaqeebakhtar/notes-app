import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen mx-6">
      <div className="bg-white border border-slate-300 rounded-md p-6 md:p-8 w-full max-w-[25rem]">
        <h3 className="font-bold text-2xl mb-6">Create your Account</h3>
        <div className="my-3 text-sm">
          <label htmlFor="name" className="block text-slate-500 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full border border-slate-300 rounded-md py-2 px-4 focus:outline-purple-700"
          />
        </div>
        <div className="my-3 text-sm">
          <label htmlFor="email" className="block text-slate-500 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full border border-slate-300 rounded-md py-2 px-4 focus:outline-purple-700"
          />
        </div>
        <div className="my-3 text-sm">
          <label htmlFor="password" className="block text-slate-500 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full border border-slate-300 rounded-md py-2 px-4 focus:outline-purple-700"
          />
        </div>

        <button className="w-full mt-4 bg-purple-600 text-sm hover:bg-purple-700 transition ease-in-out text-white font-semibold py-2 px-4 rounded-md">
          Sign Up
        </button>

        <div className="text-right text-sm mt-2">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-purple-600 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
