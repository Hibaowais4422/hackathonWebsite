import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'
import Link from 'next/link';


import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
     <TopBar/>
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">FAQ</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/pages" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">.</span>

            <span className="text-[#FB2E86]">Faq</span>
          </div>
        </div>
      </div>
    <div className=" py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* General Information */}
        <div className='text-sm ml-16 mt-10 space-y-10 '>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">General Information</h1>
          <ul className="space-y-6">
            <li>
              <h3 className="text-lg font-semibold text-slate-600 mb-2">
                Eu dictumst cum at sed euismod condimentum?
              </h3>
              <p className="text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique
                mollis vitae, consequat gravida sagittis.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-slate-600 mb-2">
                Magna bibendum est fermentum eros.
              </h3>
              <p className="text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique
                mollis vitae, consequat gravida sagittis.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-slate-600 mb-2">
                Odio muskana hak eris conseekin scelerisque?
              </h3>
              <p className="text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique
                mollis vitae, consequat gravida sagittis.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-slate-600 mb-2">
                Elit id blandit sabara boi velit gua mara?
              </h3>
              <p className="text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique
                mollis vitae, consequat gravida sagittis.
              </p>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-black mt-10 ">

<form className="w-full h-full space-y-10  max-w-md bg-[#F4F4FC] p-8  rounded-lg shadow-black text-black">

    <h3 className='text-3xl mt-10'>Ask a Question</h3>
  <div className=" ">
    <label className="block text-lg font-bold my-20" htmlFor="name">
    
    </label>
    <input
      className="w-full px-3 py-2 border rounded"
      type="text"
      id="name"
      placeholder="Your Name*"
    />
  </div>

  <div className="mb-4">
    <label className="block text-lg font-bold mb-2" htmlFor="email">
      
    </label>
    <input
      className="w-full px-3 py-2 border rounded"
      type="email"
      id="email"
      placeholder="Your Email*"
    />
  </div>

  <div className="mb-4 ">
    <label className="block text-lg font-bold mb-2" htmlFor="message">
      
    </label>
    <textarea
      className="w-full px-2 py-2  border rounded"
      id="message"
      placeholder=" Type Your Message"
      // rows ="6"
    ></textarea>
  </div>

  <button
    className="w-32 bg-pink-600 hover:bg-pink-900 text-white font-bold py-2 rounded mt-2"
    type="submit"
  >
    Submit
  </button>
</form>
</div>
      </div>
      </div>
    

        <BrandLogos/>
        <Footer/>
        </div>
  
  )
}

export default page