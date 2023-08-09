import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="px-5 py-4 lg:px-12 mx-auto bg-white shadow-sm flex items-center justify-between sticky">
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search text-slate-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search notes..."
          className="border border-slate-300 rounded-md py-2 pl-10 pr-4 focus:outline-purple-700"
        />
      </div>
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex flex-col text-right">
            <p className="font-semibold leading-4">Full Name</p>
            <span>fullname@email.com</span>
          </div>
          <div className="rounded-full overflow-hidden h-10 w-10 object-cover">
            <Image
              src={"https://source.unsplash.com/random/?user"}
              alt="avatar"
              height={40}
              width={40}
            ></Image>
          </div>
        </div>
        <button className="bg-red-100 hover:bg-red-200 transition ease-in-out text-red-600 font-semibold py-2 px-4 rounded-md text-sm">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
