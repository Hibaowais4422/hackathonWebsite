import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'
import Link from 'next/link';
import Image from 'next/image';

import React from 'react'

const page = () => {
  return (
    <div> 
        <TopBar/>
        <div className="bg-[#F6F5FF] py-16 ">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">Contact Us</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/404found" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">.</span>

            <span className="text-[#FB2E86]">Contact Us</span>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Information About Us */}
          <div className=' ml-24 mt-8 space-y-10'>
            <h2 className="text-2xl font-bold text-blue-900">Information About us</h2>
            <p className="text-slate-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
              quis bibendum quam.
            </p>
            <div className="flex space-x-4 mt-2">
              <div className="w-6 h-6 rounded-full bg-[#5625DF]"></div>
              <div className="w-6 h-6 rounded-full bg-[#FF27B7]"></div>
              <div className="w-6 h-6 rounded-full bg-[#37DAF3]"></div>
            </div>
          </div>

          {/* Contact Way */}
          <div>
            <h2 className=" text-2xl font-bold text-blue-900 mt-10">Contact Way</h2>
            <div className="mt-6 mr-20 grid grid-cols-1 md:grid-cols-2 gap-0 text-black">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-[#5726DF] mr-2"></div>
                <p className='text-slate-400 '>Tel: 877-67-88-99
                  <br />
                  E-Mail: shop@store.com

                </p>
              </div>
              <div className="flex items-center mb-2 mr-10">
                <div className="w-8 h-8 rounded-full bg-[#FFB265] mr-2 "></div>
                <p className='text-slate-400 '>20 Margaret st, London 
                  <br />
                  Great britian, 3NM98-LK
                </p>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-[#FB2E86] mr-2"></div>
                <p className='text-slate-400 '>Support Forum
                  <br />
                    For over 24hr
                </p>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-9 h-8 rounded-full bg-[#1BE982] mr-2"></div>
                <p className='text-slate-400 '>Free standard shipping <br /> on all orders.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ml-24  space-y-10">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900">Get In Touch</h2>
            <p className="text-slate-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
              tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
            </p>
            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your E-mail*"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject*"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Type Your Message*"
                rows={4}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-600"
              >
                Send Mail
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="relative">
            <Image
              src="/Group 124.png" // Replace with the path to your image
              alt="Contact Illustration"
              width={800}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>

      <Footer/>
    </div>

  )
}

export default page