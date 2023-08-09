import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-4 items-center">
        <Link
          href="/auth/signup"
          className="border-2 border-purple-600 hover:bg-purple-700 hover:text-white transition ease-in-out text-purple-600 font-semibold py-2 px-4 rounded-md text-sm"
        >
          Sign Up
        </Link>

        <Link
          href="/auth/login"
          className="border-2 border-purple-600 bg-purple-600 hover:bg-purple-700 transition ease-in-out text-white font-semibold py-2 px-4 rounded-md text-sm"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
