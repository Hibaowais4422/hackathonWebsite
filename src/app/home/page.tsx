
import Image from 'next/image';
import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'

import Link from 'next/link';
const HeroSection =()=> {
  return (
    <div className='w-full h-full space-y-10 bg-white'>
    <div className="relative bg-[#F2F0FF] min-h-[600px] overflow-hidden ">
        <TopBar/>
     
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="md:w-1/2 relative">
            {/* Hanging Lamp Image */}
            <div className="absolute -top-16 left-18 ml-24">
              <Image
                src="/image 32.png"
                alt="Hanging Lamp"
                width={200}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="mt-8  ml-52 text-center">
              <p className="text-pink-500 mb-4">Best Furniture For Your Castle...</p>
              <h1 className="text-5xl font-bold text-black leading-tight mb-8"> New Furniture Collection
                <br />
                Trends in 2020
              </h1>
              <p className="text-gray-600 mb-8  max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.
              </p>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors">
                Shop Now
              </button>
              {/* Dots Navigation */}
              <div className="flex space-x-2 ml-80 mt-10">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Chair Image */}
          <div className="md:w-1/2 relative mt-12 md:mt-0">
            <div className="relative">
              <div className="relative pl-28 z-10">
                <Image
                  src={"/sofa promotional header.png"}
                  alt="Pink Armchair"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Featured Products */}
    <section className="py-2 bg-white">
  <div className="max-w-4xl mx-auto px-4">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
      Featured Products
    </h2>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Product Card 1 */}
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <img
            src="/Frame 1 (1).png"
            alt="Cantilever Chair"
            className="w-full h-40 object-contain mx-auto"
          />
        </div>
        <div className="text-center p-4 bg-white">
          <h3 className="text-[#FB2E86] font-semibold text-lg">
            Cantilever chair
          </h3>
          <div className="flex justify-center space-x-2 mt-1">
            <span className="h-1 w-6 bg-[#05E6B7]"></span>
            <span className="h-1 w-6 bg-[#FB2E86]"></span>
            <span className="h-1 w-6 bg-[#00009D]"></span>
          </div>
          <p className="text-gray-500 mt-1">Code - Y523201</p>
          <p className="text-gray-900 font-bold mt-2">$42.00</p>
        </div>
      </div>

      {/* Product Card 2 */}
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden relative group">
        <div className="p-6">
          <img
            src="/image 1.png"
            alt="Cantilever Chair"
            className="w-full h-40 object-contain mx-auto"
          />
        </div>
        <div className="text-center p-4 bg-[#2F1AC4] text-white">
          <h3 className="font-semibold text-lg">Cantilever chair</h3>
          <div className="flex justify-center space-x-2 mt-1">
            <span className="h-1 w-6 bg-[#05E6B7]"></span>
            <span className="h-1 w-6 bg-[#F701A8]"></span>
            <span className="h-1 w-6 bg-[#FFEAC1]"></span>
          </div>
          <p className="mt-1">Code - Y523201</p>
          <p className="font-bold mt-2">$42.00</p>
        </div>
        {/* Hover Button */}
        <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          View Details
        </button>
      </div>

      {/* Product Card 3 */}
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <img
            src="/image 1169.png"
            alt="Cantilever Chair"
            className="w-full h-40 object-contain mx-auto"
          />
        </div>
        <div className="text-center p-4 bg-white">
          <h3 className="text-pink-500 font-semibold text-lg">
            Cantilever chair
          </h3>
          <div className="flex justify-center space-x-2 mt-1">
            <span className="h-1 w-6 bg-[#05E6B7]"></span>
            <span className="h-1 w-6 bg-[#FB2E86]"></span>
            <span className="h-1 w-6 bg-[#00009D]"></span>
          </div>
          <p className="text-gray-500 mt-1">Code - Y523201</p>
          <p className="text-gray-900 font-bold mt-2">$42.00</p>
        </div>
      </div>

      {/* Product Card 4 */}
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <img
            src="/image 3.png"
            alt="Cantilever Chair"
            className="w-full h-40 object-contain mx-auto"
          />
        </div>
        <div className="text-center p-4 bg-white">
          <h3 className="text-pink-500 font-semibold text-lg">
            Cantilever chair
          </h3>
          <div className="flex justify-center space-x-2 mt-1">
            <span className="h-1 w-6 bg-[#05E6B7]"></span>
            <span className="h-1 w-6 bg-[#FB2E86]"></span>
            <span className="h-1 w-6 bg-[#00009D]"></span>
          </div>
          <p className="text-gray-500 mt-1">Code - Y523201</p>
          <p className="text-gray-900 font-bold mt-2">$42.00</p>
        </div>
      </div>
    </div>

    {/* Dots for Slider Navigation */}
    <div className="flex justify-center mt-6 space-x-2">
      <span className="h-2 w-6 bg-[#FB2E86] rounded-full"></span>
      <span className="h-2 w-4 bg-pink-300 rounded-full"></span>
      <span className="h-2 w-4 bg-pink-300 rounded-full"></span>
      <span className="h-2 w-4 bg-pink-300 rounded-full"></span>

    </div>
  </div>
</section>

{/* Latest Products*/}

<div className=" bg-white max-w-4xl  mx-auto px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        Latest Products
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8 text-gray-500 font-semibold">
        <a href="#" className="text-red-500 border-b-2 border-red-500 pb-1">
          New Arrival
        </a>
        <a href="#" className="hover:text-gray-800">Best Seller</a>
        <a href="#" className="hover:text-gray-800">Featured</a>
        <a href="#" className="hover:text-gray-800">Special Offer</a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-16 bg-white">
        {/* Product Card 1 */}
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <img
            src="/image 1166.png"
            alt="Product 1"
            className="w-full h-64 object-contain mb-4"
          />
          <h3 className="text-gray-700 font-semibold">Comfort Handy Craft</h3>
          <div className="flex justify-center gap-2 mt-2">
            <p className="text-blue-600 font-bold">$42.00</p>
            <p className="text-red-500 line-through">$65.00</p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg- rounded-lg p-4 text-center relative">
          <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-2 py-1 rounded-full">
            Sale
          </span>
          <img
            src="/Frame 1.png"
            alt="Product 2"
            className="w-full h-64 object-contain mb-4"
          />
          <h3 className="text-gray-700 font-semibold">Comfort Handy Craft</h3>
          <div className="flex justify-center gap-2 mt-2">
            <p className="text-blue-600 font-bold">$42.00</p>
            <p className="text-red-500 line-through">$65.00</p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <img
            src="Frame 1 (1).png"
            alt="Product 3"
            className="w-full h-64 object-contain mb-4"
          />
          <h3 className="text-gray-700 font-semibold">Comfort Handy Craft</h3>
          <div className="flex justify-center gap-2 mt-2">
            <p className="text-blue-600 font-bold">$42.00</p>
            <p className="text-red-500 line-through">$65.00</p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <img
            src="/image 23.png"
            alt="Product 4"
            className="w-full h-64 object-contain mb-4"
          />
          <h3 className="text-gray-700 font-semibold">Comfort Handy Craft</h3>
          <div className="flex justify-center gap-2 mt-2">
            <p className="text-blue-600 font-bold">$42.00</p>
            <p className="text-red-500 line-through">$65.00</p>
          </div>
        </div>

        {/* Product Card 5 */}
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <img
            src="image 32 (1).png"
            alt="Product 5"
            className="w-full h-64 object-contain mb-4"
          />
          <h3 className="text-gray-700 font-semibold">Comfort Handy Craft</h3>
          <div className="flex justify-center gap-2 mt-2">
            <p className="text-blue-600 font-bold">$42.00</p>
            <p className="text-red-500 line-through">$65.00</p>
          </div>
        </div>

        {/* Product Card 6 */}
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <img
            src="/image 3 (1).png"
            alt="Product 6"
            className="w-full h-64 object-contain mb-4"
          />
          <h3 className="text-gray-700 font-semibold">Comfort Handy Craft</h3>
          <div className="flex justify-center gap-2 mt-2">
            <p className="text-blue-600 font-bold">$42.00</p>
            <p className="text-red-500 line-through">$65.00</p>
          </div>
        </div>
      </div>
    </div>
     
 {/*  What Shopex Offer!*/}
 <div className="  bg-white max-w-4xl mx-auto px-4 ">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">  What Shopex Offer!</h2>
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
      
        {/*Unique Features Of Latest & Trending Products*/}
    <div className="bg-white h-[579px] w-[#1050] px-40">
      {/* Unique Features Section */}
      <section className="py-12 ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <img
            src="/Group 153.png"
            alt="Blue Sofa"
            className="w-full lg:w-96 h-auto rounded-lg"
          />
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Unique Features Of Latest & Trending Products
            </h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                All frames constructed with hardwood solids and laminates
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                Reinforced with double wood dowels, glue, screws, corner blocks, and machine nails
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                Arms, backs, and seats are structurally reinforced
              </li>
            </ul>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600">
              Add To Cart
            </button>
            <p className="mt-4 text-lg font-semibold text-gray-800">$22.00</p>
          </div>
        </div>
      </section>
</div>

<div className=" bg-white max-w-4xl mx-auto px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Trending Products
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12">
        {/* Product 1 */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <img
            src="/box for image.png"
            alt="Product 1"
            className="mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-700">Cantilever chair</h3>
          <p className="text-blue-600 font-bold">$26.00</p>
          <p className="text-gray-400 line-through">$42.00</p>
        </div>

        {/* Product 2 */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <img
            
            src="/box for image (1).png"
            alt="Product 2"
            className="mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-700">Cantilever chair</h3>
          <p className="text-blue-600 font-bold">$26.00</p>
          <p className="text-gray-400 line-through">$42.00</p>
        </div>

        {/* Product 3 */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <img
            
            src="/box for image (2).png"
            alt="Product 3"
            className="mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-700">Cantilever chair</h3>
          <p className="text-blue-600 font-bold">$26.00</p>
          <p className="text-gray-400 line-through">$42.00</p>
        </div>

        {/* Product 4 */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <img
          
            src="/box for image (3).png"
            alt="Product 4"
            className="mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-700">Cantilever chair</h3>
          <p className="text-blue-600 font-bold">$26.00</p>
          <p className="text-gray-400 line-through">$42.00</p>
        </div>
      </div>

      {/* Discount Sections */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-white">
  {/* Left Box */}
  <div className="w-full md:w-2/5 h-60 flex flex-col justify-center items-center bg-[#FFF6FB] rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-indigo-900">23% off in all products</h2>
    <p className="text-pink-500 font-semibold underline">Shop Now</p>
    <div className="mt-4">
      <img
        src="/image 1162.png"
        alt="Clock"
        className="h-32 object-contain"
      />
    </div>
  </div>

  {/* Middle Box */}
  <div className="w-full md:w-2/5 h-60 flex flex-col justify-center items-center bg-[#EEEFFB] ">
    <h2 className="text-xl font-bold text-indigo-900">23% off in all products</h2>
    <p className="text-pink-500 font-semibold  underline ">View Collection</p>
    <div className="mt-4">
      <img
        src="/image 1161.png"
        alt="Shelf"
        className="h-32 object-contain"
      />
    </div>
  </div>

  {/* Right Side Items */}
  <div className="w-full md:w-1/5 flex flex-col gap-4">
    {/* Card 1 */}
    <div className="flex items-center gap-4 p-2 bg-[#F5F6F8]">
      <img
        src="/image 30.png"
        alt="Executive Chair"
        className="h-12 w-12 object-cover rounded-md"
      />
      <div>
        <p className="text-indigo-900 font-semibold">Executive Seat chair</p>
        <p className="text-gray-500 text-sm">$32.00</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center gap-4 p-2 bg-[#F5F6F8]">
      <img
        src="/image 19.png"
        alt="Executive Chair"
        className="h-12 w-12 object-cover rounded-md"
      />
      <div>
        <p className="text-indigo-900 font-semibold">Executive Seat chair</p>
        <p className="text-gray-500 text-sm">$32.00</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex items-center gap-4 p-2 bg-[#F5F6F8]">
      <img
        src="/image 28.png"
        alt="Executive Chair"
        className="h-12 w-12 object-cover rounded-md"
      />
      <div>
        <p className="text-indigo-900 font-semibold">Executive Seat chair</p>
        <p className="text-gray-500 text-sm">$32.00</p>
      </div>
    </div>
  </div>
</div>
    </div>

      {/* Discount Item Section */}
      <section className="py-12 bg-white max-w-4xl mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 space-x-2">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#151875] mb-4">
              20% Discount Of All Products
            </h2>
            <p className="text-[#] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                Material expose like metals
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                Clear lines and geometric figures
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                Simple neutral colours
              </li>
            </ul>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600">
              Shop Now
            </button>
          </div>
          <img
            src="/Group 154.png"
            alt="Discount Sofa"
            className="w-full lg:w-2/3 h-2/3 rounded-lg "
          />
        </div>
      </section>
   
<section className="py-12 bg-white max-w-4xl mx-auto px-4">
  <div className="max-w-7xl mx-auto px-4 text-center">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
      Top Categories
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Card 1 */}
      <div className="relative group p-4 rounded-full bg-cover ">
        <div className="w-52 h-52 flex justify-center items-center bg-[#F6F7FB] rounded-full  border-[#9877E7] border-l-8">
          <img
            src="/image 20.png"
            alt="Mini LCW Chair"
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Mini LCW Chair</h3>
          <p className="text-gray-500">$56.00</p>
        </div>
        {/* Button */}
        <button className="absolute top-1/2  left-20 bg-green-500 text-white px-2 py-1 text-sm rounded-sm mt-3  ">
          View Shop
        </button>
      </div>

      {/* Card 2 */}
      <div className="relative group p-4 rounded-full bg-gradient-to-br ">
        <div className="w-48 h-48 flex justify-center items-center bg-[#F6F7FB] rounded-full shadow-lg">
          <img
            src="/image 1168.png"
            alt="Mini LCW Chair"
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Mini LCW Chair</h3>
          <p className="text-gray-500">$56.00</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative group p-4 rounded-full bg-gradient-to-br ">
        <div className="w-48 h-48 flex justify-center items-center bg-[#F6F7FB] rounded-full shadow-lg">
          <img
            src="/box for image.png"
            alt="Mini LCW Chair"
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Mini LCW Chair</h3>
          <p className="text-gray-500">$56.00</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative group p-4 rounded-full bg-gradient-to-br ">
        <div className="w-48 h-48 flex justify-center items-center bg-[#F6F7FB] rounded-full shadow-lg bg-cover">
          <img
            src="/image 20.png"
            alt="Mini LCW Chair"
            className="w-40 h-28 object-contain"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Mini LCW Chair</h3>
          <p className="text-gray-500">$56.00</p>
        </div>
      </div>
    </div>

    {/* Dots for Carousel Indicator */}
    <div className="flex justify-center mt-6 space-x-2">
      <span className="h-2 w-2 bg-[#FB2E86] rounded-full"></span>
      <span className="h-2 w-2 border-[#FB2E86] border-2 rounded-full"></span>
      <span className="h-2 w-2 border-[#FB2E86] border-2  rounded-full"></span>
    </div>
  </div>
</section>

<section
  className="h-[400px] w-full  bg-cover bg-center bg-no-repeat flex items-center justify-center  max-w-7xl mx-auto px-4"style={{
    backgroundImage: "url('/Rectangle 102 (1).png')",

  }}
>
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-4xl font-bold text-[#151875] mb-4">
      Get Latest Update By Subscribe 
      <br /> Our Newsletter
    </h2>
    <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600">
      Shop Now
    </button>
  </div>
</section>


      {/* Brands Section */}
    <BrandLogos/>

          {/* Blogs */}
          <section className="py-10 bg-white max-w-6xl mx-auto px-4">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#151875] mb-10">
        Latest Blog
      </h2>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
        {/* Blog Card 1 */}
        <div className="bg-white rounded-lg  overflow-hidden">
          <img
            src="Frame 3 (1).png"
            alt="Blog 1"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2 text-[#151875] text-sm">
              <span>✍️ SaberAli</span>
              <span>📅 21 August, 2020</span>
            </div>
            <h3 className="text-lg font-bold text-[#151875] mb-2">
              Top essential Trends in 2021
            </h3>
            <p className="text-[#151875] text-sm mb-4">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly.
            </p>
            <a
              href="#"
              className="text-[#151875] font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white rounded-lg  overflow-hidden">
          <img
            src="Frame 3.png"
            alt="Blog 2"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2 text-[#151875] text-sm">
              <span>✍️ Surfauxion</span>
              <span>📅 21 August, 2020</span>
            </div>
            <h3 className="text-lg font-bold text-[#FB2E86] mb-2">
              Top essential trends in 2021
            </h3>
            <p className="text-[#151875] text-sm mb-4">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly.
            </p>
            <a
              href="#"
              className="text-[#FB2E86] font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white rounded-lg  overflow-hidden">
          <img
            src="Frame 4.png"
            alt="Blog 3"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2 text-[#151875] text-sm">
              <span>✍️ SaberAli</span>
              <span>📅 21 August, 2020</span>
            </div>
            <h3 className="text-lg font-bold text-[#151875] mb-2">
              Top essential Trends in 2021
            </h3>
            <p className="text-[#151875] text-sm mb-4">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly.
            </p>
            <a
              href="#"
              className="text-[#151875] font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
 </div>

  );
};

export default HeroSection