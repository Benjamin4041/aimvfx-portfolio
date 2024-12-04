import React from 'react'

export default function ThreeDBtn({name,func,myStyle}) {
  return (
    <button className={`relative group ${myStyle} ease-in-out duration-300`} onClick={func}>
    <svg
      width="200"
      height="59"
      viewBox="0 0 200 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 z-10 group-hover:translate-y-2 transition-all duration-300 ease-in-out "
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 58.4667C10.5667 58.4667 5.86667 58.4667 2.93333 55.5333C0 52.6 0 47.8667 0 38.4667V20C0 10.5667 0 5.86667 2.93333 2.93333C5.86667 0 10.5667 0 20 0H180C189.433 0 194.133 0 197.067 2.93333C200 5.86667 200 10.5667 200 20V25.5333C200 34.8667 200 39.5333 197.1 42.4333C194.2 45.3667 189.567 45.4 180.233 45.5333L128 46.1333C124.2 46.1667 122.3 46.2 120.6 46.9C118.867 47.6 117.5 48.8667 114.7 51.4333L112.833 53.1667C110 55.7667 108.567 57.1 106.833 57.7667C105.067 58.4667 103.133 58.4667 99.3 58.4667H20Z"
        fill="#F2F2F2"
      />
    </svg>
    <svg
      width="200"
      height="59"
      viewBox="0 0 200 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="translate-y-4"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 58.4667C10.5667 58.4667 5.86667 58.4667 2.93333 55.5333C0 52.6 0 47.8667 0 38.4667V20C0 10.5667 0 5.86667 2.93333 2.93333C5.86667 0 10.5667 0 20 0H180C189.433 0 194.133 0 197.067 2.93333C200 5.86667 200 10.5667 200 20V25.5333C200 34.8667 200 39.5333 197.1 42.4333C194.2 45.3667 189.567 45.4 180.233 45.5333L128 46.1333C124.2 46.1667 122.3 46.2 120.6 46.9C118.867 47.6 117.5 48.8667 114.7 51.4333L112.833 53.1667C110 55.7667 108.567 57.1 106.833 57.7667C105.067 58.4667 103.133 58.4667 99.3 58.4667H20Z"
        fill="#9D9E9D"
      />
    </svg>
    <p className='absolute top-4 font-bold text-xl left-8 z-10'>{name}</p>
  </button>
  )
}
