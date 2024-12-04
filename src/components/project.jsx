import React from 'react'

export default function Project({image,title}) {
  return (
    <div className=' h-full'>
      {/* <div className='bg-red-950 w-[100rem] h-[50rem]'>
      </div> */}
      <img src={image} alt="" className=' mask-folder2' />
      {/* md:-translate-x-[90em] lg:-translate-x-[50em] xl:-translate-x-[2em] 2xl:-translate-x-[10em] */}
      <h3 className=' bottom-16 text-current w-full text-white text-base lg:text-4xl  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>{title}</h3>
    </div>
  )
}
