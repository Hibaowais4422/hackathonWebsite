import TopBar from '../components/topbar'
import  Footer from '../components/footer'
import Link from 'next/link';


import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <TopBar/>
        <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">About Us</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/404found" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">About Us</span>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img 
                src="/Group 73.png"
                alt="Business Meeting" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#151875]">
                Know About Our Ecommerce Business History
              </h1>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
                tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
              </p>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16  bg-white ">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xl">
            {/* Free Delivery */}
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow ">
              <div className="bg-transparent object-contain w-18 h-18 flex items-center justify-center mx-auto mb-4">
                <div className="w-full md:w-1/2 md:text-center">
              <img 
                src="/free-delivery 1.png"
                alt="Business Meeting" 
                className=" w-40 h-auto  "
              />
            </div>
              </div>
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>

            {/* 100% Cash Back */}
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-b-2 border-[#FF9100]">
              <div className=" w-18 h-18 flex items-center justify-center mx-auto mb-4">
                <div className="w-full md:w-1/2">
              <img 
                src="/cashback 1.png"
                alt="Business Meeting" 
                className=" w-40 h-auto "
              />
            </div>
              </div>
              <h3 className="font-semibold mb-2">100% Cash Back</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>

            {/* Quality Product */}
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-transparent object-contain  w-18 h-18  flex items-center justify-center mx-auto mb-4">
                <div className="w-full md:w-1/2">
              <img 
                src="/quality 1.png"
                alt="Business Meeting" 
                className=" w-40 h-auto "
              />
            </div>
              </div>
              <h3 className="font-semibold mb-2">Quality Product</h3>
              <p className="text-gray-600 text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-transparent object-contain w-18 h-18 flex items-center justify-center mx-auto mb-4">
      

                  <div className="w-full md:w-1/2">
              <img 
                src="/24.png"
                alt="Business Meeting" 
                className=" w-40 h-auto "
              />
            </div>
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Reviews Section */}
    
      <div className="bg-white   flex items-center justify-center p-4 pb-40">
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Client Say!</h1>

        {/* Client Images */}
        <div className="flex justify-center space-x-4 mb-6">
          <img
            src="/Mask Group (2).png"
            alt="Client 1"
            className="w-16 h-16  object-cover shadow-md mt-5 "
          />
          
          <img
            src="/Mask Group.png"
            alt="Client 2"
            className="w-16 h-16  object-cover shadow-md mt-0 "
          />
          <img
            src="/Mask Group (1).png"
            alt="Client 3"
            className="w-16 h-16  object-cover shadow-md mt-5"
          />
        </div>

        {/* Client Name */}
        <h2 className="text-2xl font-semibold text-gray-900">
          Selina Gomez
        </h2>
        <p className="text-[#8A8FB9] text-sm mb-4">CEO At Webecy Digital</p>

        {/* Client Feedback */}
        <p className="text-[#8A8FB9] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dui ultrices quam vel dui
          scelerisque aliquet id arcu. Nam vitae enim nunc, sed sapien egestas ac nam.
        </p>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <span className="w-4 h-1 bg-[#FF75B0] rounded-full"></span>
          <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
          <span className="w-4 h-1 bg-[#FF75B0] rounded-full"></span>
        </div>
      </div>
    </div>

<Footer/>
    </div>
  );
};

export default AboutPage;
