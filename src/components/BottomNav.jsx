import React from "react";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="fixed lg:bottom-[-1%] bottom-[-6%] lg:w-[25%]  h-fit lg:pl-4 z-10 hidden lg:block xl:block">
      <div className="relative">
        <svg
     
          viewBox="0 0 721 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M709.832 0C715.452 0 720.017 4.56597 720.017 10.1856C720.017 15.8053 715.452 20.3712 709.832 20.3712H470.997C460.548 20.3712 455.279 20.3712 450.538 22.303C445.796 24.2347 442.02 27.8348 434.469 35.1228L418.927 50.05H0C0 26.9568 0.263421 15.1906 7.72702 7.72702C15.454 0 27.8348 0 52.6842 0H709.832Z"
            fill="white"
            fill-opacity="0.5"
          />
        </svg>
        <div className=" w-[30%] h-full absolute top-0 left-0 p-2">
          <ul className="flex gap-4 justify-center items-center">
            <Link>
              {" "}
              <li className="text-[1rem]">Services</li>
            </Link>
            <Link>
              {" "}
              <li className="text-[1rem]">Work</li>
            </Link>
            <Link>
              {" "}
              <li className="text-[1rem]">About</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
