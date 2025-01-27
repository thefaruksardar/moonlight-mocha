"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useMeasure from "react-use-measure";

const Header = () => {
  const [isNav, setisNav] = useState(false);
  let [ref, { height }] = useMeasure();

  return (
    <div className="py-3 shadow">
      <nav>
        <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto px-3 py-2">
          <Link href="/" className="flex items-center">
            <div className="flex items-center text-slate-50 gap-1 font-semibold  px-3 md:max-w-lg mx-auto lg:max-w-4xl">
              <div>
                <Image
                  src="/coffee-mug.svg"
                  height={200}
                  width={200}
                  alt="Moonlight Mocha"
                  title="Moonlight Mocha"
                  className="h-11 w-11 !m-0"
                />
              </div>
              <span className="text-[1.6rem] font-bold">Moonlight Mocha</span>
            </div>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={(e) => setisNav(!isNav)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <AnimatePresence>
            <motion.div
              className={`${isNav ? "" : "!hidden"} w-full md:!block md:w-auto`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: height }}
              exit={{ opacity: 0, height: 0 }}
            >
              <ul
                className="not-ul font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg bg-neutral-900 text-slate-50 md:flex-row md:space-x-8 md:mt-0  "
                ref={ref}
              >
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  >
                    Top items
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  >
                    FAQ's
                  </Link>
                </li>
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};
export default Header;
