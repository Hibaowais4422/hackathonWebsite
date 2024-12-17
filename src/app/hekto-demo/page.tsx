

import TopBar from '../components/topbar'
import  Footer from '../components/footer'
import Link from 'next/link';
import React from "react";

const CheckoutForm = () => {
  const cartItems = [
    {
      id: 1,
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      image: "/Rectangle 34 (2).png", 
    },
    {
      id: 2,
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      image: "/Rectangle 144.png",
    },
    {
      id: 3,
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      image: "/Rectangle 145.png",
    },
    {
      id: 4,
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      image: "/Rectangle 146.png",
    },
    {
      id: 5,
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: "$32.00",
      image: "/Rectangle 147.png",
    },
  ];

  return (
    <div className='bg-white'>
      <TopBar/>
           <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">Hekto Demo</h1>
          <div className="flex items-center space-x-2 text-sm">
          </div>
        </div>
      </div>
    <div className=" py-8 px-4 sm:px-6 lg:px-8 ml-24 mt-10 space-y-12  ">
    <div className="text-[#1D3178] font-bold text-2xl ">Hekto Demo</div>
       <span className='text-[#1D3178]'>Cart/ Information/ Shipping/ Payment</span>
  
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 pb-40 ">
      
        {/* Left Section: Form */}
        
        <div className=" bg-[#F8F8FD] lg:col-span-2  p-6 shadow rounded-lg space-y-10 ">
               <div className="flex items-center justify-between mb-4 ">
               <h3 className="text-lg font-bold text-[#1D3178]">Contact Information</h3>
               <a href="myaccount" className="text-sm text-pink-500 hover:underline">
                 Already have an account? Log in
               </a>
           </div>
          <input
            type="email"
            placeholder="Email or mobile phone number"
            className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-600 focus:outline-none focus:border-pink-500"
            />
            <br />
            <p className="text-sm text-[#8A91AB] ">
            Keep me up to date on news and excluive offer
                            </p>
          {/* Shipping Address */}
          <h3 className="text-lg text-[#1D3178] font-semibold mb-4">Shipping address</h3>
          <div className="grid grid-cols-2 gap-4 space-y-8">
                <input
                type="text"
                placeholder="First name (optional)"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-600 focus:outline-none focus:border-pink-500"
              />
              {/* <br /> */}
              <input
                type="text"
                placeholder="Last name"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-600 focus:outline-none focus:border-pink-500"
              />
              {/* <br /> */}
              <input
                type="text"
                placeholder="Address"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-600 focus:outline-none focus:border-pink-500"
              />
              <br />
              <input
                type="text"
                placeholder="Apartment, suite, etc (optional)"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-600 focus:outline-none focus:border-pink-500"
              />
              <br />
              <input
                type="text"
                placeholder="City"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-600 focus:outline-none focus:border-pink-500"
              />
              <br />
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-600 focus:outline-none focus:border-pink-500"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-600 focus:outline-none focus:border-pink-500"
              /> 
          </div>
          <div className='space-y-2'>
          <button className="mt-10 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 ">
            Continue Shipping
          </button>
          </div>
        </div>

        {/* Right Section: Cart Summary */}
        <div className="bg-white p-6 ">
          <div className="space-y-6">
            {/* Map through Cart Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  {/* Dynamic Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16"
                  />
                  <div>
                    <p className="font-semibold text-gray-700">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Color: {item.color} <br /> Size: {item.size}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-700">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

      
               <div className="bg-[#F4F4FC] p-6 rounded-lg shadow mt-6 ">
                <div className=" space-y-8">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotals:</p>
                    <p className="font-bold text-gray-700">£160.00</p> 
                  </div>
                  <div className='border-b-2 border-[#E8E6F1]'></div>

                  <div className="flex justify-between">
                    <p className="text-gray-600">Totals:</p>
                    <p className="font-bold text-gray-700">£160.00</p> 
                  </div>

                  <div className='border-b-2 border-[#E8E6F1]'></div>

                  <p className="text-sm text-[#8A91AB] mt-2">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-6 ">
                  Proceed To Checkout
                </button>
              </div>
              </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CheckoutForm;

