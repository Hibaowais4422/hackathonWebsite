import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'
import Link from 'next/link';


import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div>
        <TopBar/>
        <div className="bg-[#F6F5FF] py-16">
        <div className=" container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">404 Not Found</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/404found" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">404 Not Found</span>
          </div>
        </div>
        </div>
           <div className="flex justify-center items-center  bg-white py-2">
      <Image src="/Group 197.png" alt="Brand 1" width={800} height={600} />
    </div>
            
        <BrandLogos/>
        <Footer/>
    </div>
  )
}

export default page