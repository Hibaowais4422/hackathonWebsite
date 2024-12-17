import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'
import Link from 'next/link';

import React from 'react'

export default function login () {
  return (
    <div className='bg-white'>
        <TopBar />
          <div className="bg-[#F6F5FF] py-16">
        <div className=" container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">My Account</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/404found" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">My Account</span>
          </div>
        </div>
        </div>

      {/* </div> */}
      <div className="flex justify-center mt-10 bg-white">
          <div className="bg-white border-2 border-gray-50 rounded-md mt-10   p-8 max-w-md w-full">
            <h3 className="text-xl text-center font-bold text-gray-700 mb-4">Login</h3>
            <p className="text-gray-400 text-center mb-6">
              Please login using account detail below.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 mb-2"
                >
                  
                </label>
                <input
                  type="email"
                  id="email"
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-600 mb-2"
                >
                
                </label>
                <input
                  type="password"
                  id="password"
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-left text-sm text-gray-400 cursor-pointer mb-4">
                Forgot your password?
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-sm hover:bg-pink-600 transition duration-300"
              >
                Sign In
              </button>
              <p className="text-sm text-center text-gray-400 mt-4">
                Don’t have an Account? <span className="text-gray-400 cursor-pointer">Create account</span>
              </p>
            </form>
          </div>
          </div>
        {/* </div> */}
    
        <BrandLogos />
        <Footer/>
        </div>
  )
}
