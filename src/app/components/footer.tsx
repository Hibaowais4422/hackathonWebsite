import Link from 'next/link';

import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F6F5FF] py-16 ">
      <div className="container mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {/* Newsletter and Contact Section */}
          <div className="space-y-4">
            <h2 className="font-bold text-4xl text-black mb-6">Hekto</h2>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 px-1 py-2 rounded-l border border-[#E7E6EF] focus:outline-none focus:border-pink-500 absolute left-20"
              />
              <button className="bg-pink-500 text-white px-0 py-2 rounded-r w-[130px] hover:bg-pink-600 transition-colorsa absolute top-auto left-64" >
                SignUp
              </button>
            </div>

            <div className="text-gray-400 text-sm ">
              <p className="mb-2">Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h1 className="font-semibold text-black mb-6">Categories</h1>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-pink-500 cursor-pointer">Laptops & Computers</li>
              <li className="hover:text-pink-500 cursor-pointer">Cameras & Photography</li>
              <li className="hover:text-pink-500 cursor-pointer">Smart Phones & Tablets</li>
              <li className="hover:text-pink-500 cursor-pointer">Video Games & Consoles</li>
              <li className="hover:text-pink-500 cursor-pointer">Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h2 className="font-semibold text-black mb-6">Customer Care</h2>
            <ul className="space-y-3 text-gray-400">
            <Link rel="stylesheet" href="/myaccount" >  <li className="hover:text-pink-500 cursor-pointer">My Account</li> </Link>
              <li className="hover:text-pink-500 cursor-pointer">Discount</li>
              <li className="hover:text-pink-500 cursor-pointer">Returns</li>
              <br />
              <Link rel="stylesheet" href="/faq" >  <li className="hover:text-pink-500 cursor-pointer">Orders History</li></Link>
              <br />
              <Link rel="stylesheet" href="/order" >  <li className="hover:text-pink-500 cursor-pointer">Order Tracking</li></Link>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h2 className="font-semibold text-black mb-6">Pages</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-pink-500 cursor-pointer">Blog</li>
              <br />
              <Link rel="stylesheet" href="/shopleft" > <li className="hover:text-pink-500 cursor-pointer">Browse the Shop</li></Link>
              <br />
              <Link rel="stylesheet" href="/shoplist" ><li className="hover:text-pink-500 cursor-pointer">Category</li></Link>
              <br />
              <Link rel="stylesheet" href="/hekto-demo" > <li className="hover:text-pink-500 cursor-pointer">Pre-Built Pages</li></Link>
              <li className="hover:text-pink-500 cursor-pointer">Visual Component Elements</li>
              <li className="hover:text-pink-500 cursor-pointer">WooCommerce Pages</li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">©Webecy - All Rights Reserved</p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


