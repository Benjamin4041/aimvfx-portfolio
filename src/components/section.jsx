import React from 'react'

export default function Section({myStyle,children}) {
  return (
   <section className={myStyle}>
    {children}
   </section>
  )
}
