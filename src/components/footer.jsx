import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-white lg:h-[90vh] xl:min-h-screen md:h-screen h-[150vh] overflow-hidden relative">
      <svg
        viewBox="0 0 1921 1761"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
      >
        <g clip-path="url(#clip0_1_775)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1920.03 146.402C1920.03 101.122 1920.03 78.5612 1905.95 64.481C1891.87 50.4008 1869.31 50.4008 1824.03 50.4008H1517.14C1505.3 50.4008 1499.22 50.4008 1493.62 49.1208C1487.86 47.6807 1482.42 45.2807 1477.46 41.9207C1472.82 38.7206 1468.82 34.2405 1460.82 25.2804C1452.98 16.3203 1448.98 11.8402 1444.18 8.64013C1439.38 5.28008 1433.78 2.72004 1428.02 1.44002C1422.74 0 1416.82 0 1404.82 0H96.0015C50.7208 0 28.1604 0 14.0802 14.0802C0 28.1604 0 50.7208 0 96.0015V1760.03H1920.03V146.402Z"
            fill="#D1D1D1"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_775">
            <rect width="100%" height="100%" fill="white" />
          </clipPath>
        </defs>
        <div style={{ width: "300px" }}></div>
      </svg>

      <div className="absolute lg:w-[99vw] w-full h-full top-36 flex xl:gap-0 lg:gap-0 md:gap-0  lg:flex-nowrap xl:flex-nowrap flex-wrap   xl:justify-between lg:justify-between xl:items-start lg:items-start items-center lg:px-28 xl:px-28  bg-[#D1D1D1] lg:flex-row xl:flex-row md:flex-row flex-col">
        <div className="w-full lg:block xl:block  flex justify-center flex-col items-center mb-32 ">
            <img src="./assets/images/darkLogo.png" alt="" className="lg:w-[20%] xl:w-[20%] w-[36%]" />
          <div className="flex lg:gap-[39.4em] w-full  gap-10 pt-10 lg:w-[10%] lg:flex-nowrap xl:flex-nowrap lg:flex-row xl:flex-row flex-col flex-wrap px-7">
            {/* <ul className="self-end">
              <li className="text-[2.5rem]">Services</li>
              <li className="text-[2.5rem]">Work</li>
              <li className="text-[2.5rem]">About</li>
            </ul> */}
            <ul className="self-start">
              <h4 className="mb-3 font-semibold">Follow</h4>
              <li className="mb-2 text-[1.1rem]">
                <a href="https://helloastonish/">Instagram</a>
              </li>
              <li className="mb-2 text-[1.1rem]">
                <a href="https://twitter.com/helloastonish">Twitter</a>
              </li>
              <li className="mb-2 text-[1.1rem]">
                <a href="https://linkedin.com/in/helloastonish/">LinkedIn</a>
              </li>
              <li className="mb-2 text-[1.1r‰em]">
                <a href="https://youtube.com/channel/UCoTwy5_MOtWJRf4m-7vEnXg">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="lg:w-[24em] xl:w-[24em] md:w-[24em] w-[19em] self-center relative">
            <svg
              viewBox="0 0 374 271"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M193.082 270.424H195.109C204.058 270.086 212.248 265.02 216.47 257.084C216.723 256.662 216.892 256.155 217.399 255.226C217.821 254.297 218.074 253.875 218.243 253.453C222.38 245.685 230.232 240.704 238.929 240.113C239.435 240.113 239.942 240.028 240.955 240.028L323.868 237.833C347.171 237.242 358.822 236.904 365.999 229.559C373.176 222.213 373.176 210.562 373.176 187.174V50.9005C373.176 27.0062 373.176 15.1013 365.746 7.67124C358.4 0.241211 346.411 0.241211 322.517 0.241211H50.7296C26.8353 0.241211 14.9304 0.241211 7.50034 7.67124C0.0703125 15.1013 0.0703125 27.0062 0.0703125 50.9005V219.765C0.0703125 243.659 0.0703125 255.564 7.50034 262.994C14.9304 270.424 26.8353 270.424 50.7296 270.424H193.082Z"
                fill="white"
              />
            </svg>

            <div className="absolute top-5 left-0 px-4  w-[99.5%]">
              <h4 className="font-semibold xl:text-3xl lg:text-2xl md:text-xl text-lg text-wrap w-full text-center">
                get updates directly beamed to your inbox
              </h4>
              <form
                action=""
                className="flex flex-col justify-center items-center"
              >
                <span className="flex gap-4 justify-center items-center mt-5">
                  <input
                    type="text"
                    className="bg-[#F5F5F5] border rounded h-8 pl-3 w-full outline-none"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="bg-[#F5F5F5] border rounded h-8 pl-3 w-full outline-none"
                    placeholder="Email"
                  />
                </span>
                <button className="bg-black text-white p-2 w-full mt-4 rounded-lg">
                  {" "}
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
