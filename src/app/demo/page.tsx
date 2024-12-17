import React from 'react';
import Image from 'next/image';

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-2xl font-bold mb-8">Hekto Demo</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Keep me up to date on news and exclusive offers</span>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h2 className="text-xl font-bold mb-4">Shipping address</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md my-4"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full px-4 py-2 border border-gray-300 rounded-md my-4"
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="bg-white p-4 md:p-8 rounded-md shadow mt-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-1 md:col-span-4">
              <h2 className="text-xl font-bold mb-4">Cart / Information/ Shipping/ Payment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Image src="/ui-diam-consequat.jpg" alt="UI diam consequat" width={80} height={80} className="rounded-md mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">UI diam consequat</h3>
                    <p className="text-gray-600">Color: Brown</p>
                    <p className="text-gray-600">Size: XL</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src="/ui-diam-consequat.jpg" alt="UI diam consequat" width={80} height={80} className="rounded-md mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">UI diam consequat</h3>
                    <p className="text-gray-600">Color: Brown</p>
                    <p className="text-gray-600">Size: XL</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src="/ui-diam-consequat.jpg" alt="UI diam consequat" width={80} height={80} className="rounded-md mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">UI diam consequat</h3>
                    <p className="text-gray-600">Color: Brown</p>
                    <p className="text-gray-600">Size: XL</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src="/ui-diam-consequat.jpg" alt="UI diam consequat" width={80} height={80} className="rounded-md mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">UI diam consequat</h3>
                    <p className="text-gray-600">Color: Brown</p>
                    <p className="text-gray-600">Size: XL</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src="/ui-diam-consequat.jpg" alt="UI diam consequat" width={80} height={80} className="rounded-md mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">UI diam consequat</h3>
                    <p className="text-gray-600">Color: Brown</p>
                    <p className="text-gray-600">Size: XL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-gray-100 p-4 md:p-8 rounded-md">
              <h2 className="text-xl font-bold mb-4">Subtotals:</h2>
              <p className="text-gray-700 mb-2">£219.00</p>
              <h2 className="text-xl font-bold mb-4">Totals:</h2>
              <p className="text-gray-700 mb-4">£325.00</p>
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span>Shipping & taxes calculated at checkout</span>
              </div>
              <button className="bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
