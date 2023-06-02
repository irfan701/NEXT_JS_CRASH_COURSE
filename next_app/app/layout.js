import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import {Poppins } from 'next/font/google'
import Header from "./components/Header";




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
      <Header/>
      <main className='container'>
        {children}
      </main>

      </body>
    </html>
  )
}
