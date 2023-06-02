import './globals.css'
import {Poppins } from 'next/font/google'
import React from "react";


const poppins=Poppins({
  weight:['400','700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Hayyat Mart',
  description: 'Web development tutorial and courses',
  keywords:'web development,web design, javascript,react,node,vue js html css3'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <main className='container'>
        {children}
      </main>

      </body>
    </html>
  )
}
