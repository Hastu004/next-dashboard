import React from "react";
import Link from "next/link";
import { RxDashboard, RxHeartFilled, RxFace, RxBarChart } from "react-icons/rx";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-black border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-red-800 text-white p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="bg-purple-800 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxFace size={20} />
            </div>
          </Link>
          <Link href="/charts">
            <div className="bg-purple-800 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxHeartFilled size={20} />
            </div>
          </Link>
          <Link href="/health">
            <div className="bg-purple-800 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxBarChart size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
