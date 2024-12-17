import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'
import Link from 'next/link'
import {CheckIcon} from  'lucide-react';
import Image from 'next/image';
import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
        <TopBar/>
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">Shop List</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/404found" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">Shop List</span>
          </div>
        </div>
      </div>
        {/* <div className='bg-white text-md mt-2 grid grid-cols-1 lg:grid-cols-2 gap-0  ml-10  pr-40  space-y-10'> */}
             {/* <div className="relative mt-32">
                        <Image
                          src="/clock 1.png" 
                          alt="Contact Illustration"
                          width={100}
                          height={100}
                          className="mx-auto"
                        />
                      </div> */}
      <div className="max-w-4xl mx-auto mt-16 bg-white rounded-lg  p-8 text-center">

        {/* Icon and Title */}
        <div className="flex flex-col items-center ">
          {/* Checkmark Icon */}
          <div className=" border-slate-50 border-8 text-pink-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <CheckIcon className="text-3xl text-[#FF1788]"/>
         
          </div>
          <h2 className="text-2xl font-bold text-[#101750]">Your Order Is Completed!</h2>
          <p className="text-[#8D92A7] mt-4">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-[#FF1788] hover:bg-pink-600 text-white py-2 px-6  font-semibold">
            Continue Shopping
          </button>
        </div>
      </div>

      {/* </div> */}

      <BrandLogos/>
      <Footer/>
    </div>
  )
}

export default page