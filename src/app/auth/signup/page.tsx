"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleSignup } from "@/utils/handle-signup";

type Props = {};

const Page = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const onSignup = async () => {
    if (!name || !email || !password) {
      return setError("all fields are required!");
    }

    const { user, singupErr } = await handleSignup({ name, email, password });

    if (singupErr) return setError(singupErr);

    user && router.push("/auth/login");
  };

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
            required
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
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
            required
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full border border-slate-300 rounded-md py-2 px-4 focus:outline-purple-700"
          />
        </div>

        <button
          onClick={onSignup}
          className="w-full mt-4 bg-purple-600 text-sm hover:bg-purple-700 transition ease-in-out text-white font-semibold py-2 px-4 rounded-md"
        >
          Sign Up
        </button>

        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

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
