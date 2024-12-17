import React from 'react'

const page = () => {
  return (

<div className="w-full px-4 md:px-12 py-8 bg-gray-50 text-gray-800">

  {/* Product Details Section */}
  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
    {/* Product Images */}
    <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 p-4">
      <img
        src="/path-to-main-image.png"
        alt="Main Product"
        className="col-span-2 rounded-lg object-cover h-72"
      />
      <img
        src="/path-to-image1.png"
        alt="Image 1"
        className="rounded-lg object-cover h-32"
      />
      <img
        src="/path-to-image2.png"
        alt="Image 2"
        className="rounded-lg object-cover h-32"
      />
    </div>

    {/* Product Info */}
    <div className="w-full md:w-1/2 p-6 space-y-4">
      <h2 className="text-2xl font-bold text-indigo-900">Playwood arm chair</h2>
      <div className="flex items-center space-x-2">
        <p className="text-lg text-gray-700 font-semibold">$320.00</p>
        <p className="text-lg text-red-500 line-through">$360.00</p>
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus.
      </p>
      <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg">
        Add To Cart
      </button>
      <div className="flex items-center space-x-2 text-gray-500">
        <p>Categories:</p>
        <p className="text-indigo-600 cursor-pointer hover:underline">Tags</p>
      </div>
      <div className="text-gray-500">
        Share:
        <span className="ml-2 text-indigo-600 cursor-pointer hover:underline">🔗</span>
      </div>
    </div>
  </div>

  {/* Description and Tabs */}
  <div className="w-full bg-white mt-8 rounded-lg shadow-lg p-6">
    <div className="flex space-x-6 text-gray-700 border-b pb-2 mb-4">
      <p className="text-indigo-600 font-semibold cursor-pointer border-b-2 border-indigo-500">
        Description
      </p>
      <p className="cursor-pointer hover:text-indigo-600">Additional Info</p>
      <p className="cursor-pointer hover:text-indigo-600">Reviews</p>
      <p className="cursor-pointer hover:text-indigo-600">Video</p>
    </div>
    <p className="text-gray-600 leading-7">
      Aliquam sit amet vulputate vulputate integer sagittis. Faucibus dui diam orci,
      nulla lobortis justo netus dui. Eu in fringilla volutpat nunc nec dui.
    </p>
    <div className="mt-4 space-y-2 text-gray-600">
      <div className="flex items-center">
        ➡️ Aliquam sit amet vulputate vulputate integer sagittis.
      </div>
      <div className="flex items-center">
        ➡️ Faucibus dui diam orci, nulla lobortis justo netus dui.
      </div>
      <div className="flex items-center">
        ➡️ Eu in fringilla volutpat nunc nec dui.
      </div>
    </div>
  </div>

  {/* Related Products */}
  <div className="w-full mt-8">
    <h3 className="text-2xl font-bold text-indigo-900 mb-4">Related Products</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Product Card */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/path-to-related-product1.png"
          alt="Product"
          className="h-32 mx-auto rounded-lg object-cover"
        />
        <p className="mt-2 text-gray-800 font-semibold">Mens Fashion Wear</p>
        <p className="text-gray-500">$45.00</p>
      </div>

      {/* Repeat Product Cards */}
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/path-to-related-product2.png"
          alt="Product"
          className="h-32 mx-auto rounded-lg object-cover"
        />
        <p className="mt-2 text-gray-800 font-semibold">Women's Fashion</p>
        <p className="text-gray-500">$57.00</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/path-to-related-product3.png"
          alt="Product"
          className="h-32 mx-auto rounded-lg object-cover"
        />
        <p className="mt-2 text-gray-800 font-semibold">Wok Dummy Fashion</p>
        <p className="text-gray-500">$67.00</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="/path-to-related-product4.png"
          alt="Product"
          className="h-32 mx-auto rounded-lg object-cover"
        />
        <p className="mt-2 text-gray-800 font-semibold">Top Wall Digital Clock</p>
        <p className="text-gray-500">$18.00</p>
      </div>
    </div>
  </div>
</div>
  )
}
export default page