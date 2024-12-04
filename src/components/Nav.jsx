import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-full flex justify-between lg:justify-start xl:justify-start items-center fixed top-0 z-40">
      <nav className=" w-fit h-[6em] p-5  overflow-hidden">
        <div className="relative">
          <svg
            width="113"
            height="61"
            viewBox="0 0 113 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.1681 0C10.5929 0 6.35575 0 3.53097 2.42124C3.12743 2.72389 2.72389 3.12743 2.42124 3.53097C0 6.35575 0 10.5929 0 19.1681V35.8142C0 45.2973 0 50.0389 2.92566 53.0655C5.85133 55.9912 10.5929 55.9912 20.177 55.9912H38.3363C39.7487 55.9912 41.0602 56.8991 41.5646 58.2106C42.069 59.5221 43.3805 60.4301 44.7929 60.4301H75.3611C81.2124 60.4301 84.138 60.4301 86.4584 59.0177C88.8796 57.6053 90.1911 55.0832 93.0159 49.9381L104.012 29.8619C111.276 16.5451 114.908 9.88673 111.982 4.94336C109.057 0 101.49 0 86.1557 0H19.1681Z"
              fill="white"
            />
          </svg>

          <img
            src="./assets/images/darkLogo.png"
            alt=""
            className="w-9 absolute top-2 right-0 -translate-x-[3em]"
          />
        </div>
      </nav>
      <div className="xl:hidden lg:hidden block w-fit  ">
        {/* <div className="w-fit relative overflow-hidden">
          <svg
            width="23"
            height="150"
            viewBox="0 0 73 395"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M68.1162 394.099C67.9137 389.155 67.3001 385.555 65.7647 382.055C65.636 381.829 65.5086 381.49 65.3798 381.264C62.4281 375.276 57.0942 370.495 46.2935 361.042L22.7415 340.317C11.5518 330.411 5.95629 325.514 3.0073 319.302C0.0583222 313.09 0.14216 306.241 0.309844 292.543L3.07526 66.6475C3.46423 34.8739 3.65804 19.0432 15.3513 9.30476C25.9815 0.451606 42.2975 -0.134677 72.9392 0.128146L68.1162 394.099Z"
              fill="#E3E3E3"
            />
          </svg>
          <CiMenuKebab className='absolute top-11 left-0 -translate-x-2' size={36}  />
        </div> */}
        <div className="bg-gray-200/70 border border-gray-300/50 rounded-bl-md rounded-br-md rounded-tl-md p-6 translate-y-10 w-[8em] justify-center items-center flex backdrop-blur-sm">
          <ul>
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
