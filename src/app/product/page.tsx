import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'
import Link from 'next/link';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Vel elit euismod',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/image 9.png',
  },
  {
    id: 2,
    name: 'Ultricies condimentum imperdiet',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/image 1165.png',
  },
  {
    id: 3,
    name: 'Vitae suspendisse sed',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/image 1173.png',
  },
  {
    id: 4,
    name: 'Sed at fermentum',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/10011 1.png',
  },
  {
    id: 5,
    name: 'Fusce pellentesque at',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/unnamed 1.png',
  },
  {
    id: 6,
    name: 'Vestibulum magna laoreet',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/1562173100-movado-connect-1562173094 2.png',
  },
  {
    id: 7,
    name: 'Sollicitudin amet orci',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/purepng 1.png',
  },
  {
    id: 8,
    name: 'Ultrices mauris sit',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/image 1164.png',
  },
  {
    id: 9,
    name: 'Pellentesque condimentum ac',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/smart.png',
  },
  {
    id: 10,
    name: 'Cras scelerisque velit',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/cam 2.png',
  },
  {
    id: 11,
    name: 'Lectus vulputate faucibus',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/hadphone.png',
  },
  {
    id: 12,
    name: 'Purus risus, ut',
    price: '$26.00',
    discountedPrice: '$42.00',
    image: '/10011 1.png',
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
        <TopBar/>
            <div className="bg-[#F6F5FF] py-16 ">
        <div className="container mx-auto px-4 ">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">Shop List</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/home" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/productsdetail/page" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">Shop List</span>
          </div>
        </div>
      </div>
      <div className='bg-white w-[#1171]'>
        <div className="container mx-auto px-4 py-4">
      <div className=" bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-800 py-6">Ecommerce Accessories & Fashion Items</h1>
        
        <div className="flex justify-end items-end mb-6 bg-white px-56 gap-10 ">
          <div className="flex space-x-4">
            <label>
              <span className="text-gray-600">Per Page:</span>
              <select className="ml-2 border rounded px-2 py-1">
                <option>12</option>
                <option>24</option>
                <option>36</option>
              </select>
            </label>
            <label>
              <span className="text-gray-600">Sort By:</span>
              <select className="ml-2 border rounded px-2 py-1">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </label>
          </div>
          <span className="text-gray-600">View:</span>

         
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#F6F7FB]  shadow rounded-lg overflow-hidden group hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className=" h-42 w-42 pl-10  object-cover group-hover:scale-105 transition"
              />
              <div className="p-4 bg-white pb-10">
                <h2 className="text-lg font-semibold text-[#151875]">{product.name}</h2>
                <div className="flex space-x-4 mt-2">
              <div className="w-4 h-4 rounded-full bg-[#DE9034]"></div>
              <div className="w-4 h-4 rounded-full bg-[#EC42A2]"></div>
              <div className="w-4 h-4 rounded-full bg-[#8568FF]"></div>
            </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-[#151875] font-bold">{product.price}</span>
                  <span className="line-through text-[#FB2E86]  text-sm">{product.discountedPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BrandLogos/>
      </div>

     
      <Footer/>
    </div>
  );
}
