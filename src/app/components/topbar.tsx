import React from 'react';
import { Mail, Phone, Globe, DollarSign, User, Heart, ShoppingCart, ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-[#7E33E0] text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="mailto:mhhasanul@gmail.com" className="flex items-center space-x-2">
              <Mail size={16} />
              <span>mhhasanul@gmail.com</span>
            </a>
            <a href="tel:(12345)67890" className="flex items-center space-x-2">
              <Phone size={16} />
              <span>(12345)67890</span>
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-1">
              <Globe size={16} />
              <span>English</span>
              <ChevronDown size={14} />
            </button>

            <button className="flex items-center space-x-1">
              <DollarSign size={16} />
              <span>USD</span>
              <ChevronDown size={14} />
            </button>

            <button className="flex items-center space-x-1">
              <span>Login</span>
              <User size={16} />
            </button>

            <button className="flex items-center space-x-1">
              <span>Wishlist</span>
              <Heart size={16} />
            </button>

            <button className="flex items-center">
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-[#0D0E43]">
              Hekto
            </Link>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <Link href="/home" className="text-[#FB2E86]">Home</Link>
              <Link href="/about" className="text-[#0D0E43]">Pages</Link>
              <Link href="/product" className="text-[#0D0E43]">Products</Link>
              <Link href="/blog" className="text-[#0D0E43]">Blog</Link>
              <Link href="/shoppingg" className="text-[#0D0E43]">Shop</Link>
              <Link href="/contact" className="text-[#0D0E43]">Contact</Link>
            </nav>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                className="border border-[#E7E6EF] rounded pl-4 pr-10 py-1 w-60 focus:outline-none"
            
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-[#FB2E86] rounded-r">
                <Search size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      {/* <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">Shop List</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/pages" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">Shop List</span>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;



// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Main Blog Section */}
//           <div className="md:col-span-2 space-y-8">
//             {/* Blog 1 */}
//             <div className="bg-white shadow-md rounded-md overflow-hidden">
//               <Image
//                 src="/images/blog1.png"
//                 alt="Blog Image 1"
//                 width={800}
//                 height={400}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-bold mb-2">
//                   Mauris at orci non vulputate diam tincidunt nec.
//                 </h2>
//                 <p className="text-gray-600 mb-4">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//                   facilisis est auctor vehicula.
//                 </p>
//                 <div className="text-pink-500 hover:underline">
//                   <a href="#">Read More »</a>
//                 </div>
//               </div>
//             </div>

//             {/* Blog 2 */}
//             <div className="bg-white shadow-md rounded-md overflow-hidden">
//               <Image
//                 src="/images/blog2.png"
//                 alt="Blog Image 2"
//                 width={800}
//                 height={400}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-bold mb-2">
//                   Aenean vitae in aliquam ultricies lectus. Etiam.
//                 </h2>
//                 <p className="text-gray-600 mb-4">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Vestibulum vel nisi ut dui sodales vehicula.
//                 </p>
//                 <div className="text-pink-500 hover:underline">
//                   <a href="#">Read More »</a>
//                 </div>
//               </div>
//             </div>

//             {/* Blog 3 */}
//             <div className="bg-white shadow-md rounded-md overflow-hidden">
//               <Image
//                 src="/images/blog3.png"
//                 alt="Blog Image 3"
//                 width={800}
//                 height={400}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-bold mb-2">
//                   Sit nam congue feugiat nisl, mauris amet nisl.
//                 </h2>
//                 <p className="text-gray-600 mb-4">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Vestibulum vel nisi ut dui sodales vehicula.
//                 </p>
//                 <div className="text-pink-500 hover:underline">
//                   <a href="#">Read More »</a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-8">
//             {/* Search */}
//             <div>
//               <h3 className="font-bold text-lg mb-2">Search</h3>
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full border p-2 rounded-md"
//               />
//             </div>

//             {/* Categories */}
//             <div>
//               <h3 className="font-bold text-lg mb-2">Categories</h3>
//               <ul className="text-gray-600 space-y-2">
//                 <li>Design</li>
//                 <li>Technology</li>
//                 <li>Fashion</li>
//                 <li>Travel</li>
//               </ul>
//             </div>

//             {/* Recent Posts */}
//             <div>
//               <h3 className="font-bold text-lg mb-2">Recent Posts</h3>
//               <ul className="text-gray-600 space-y-2">
//                 <li>A long-established fact</li>
//                 <li>The point of using Lorem</li>
//                 <li>It has a more-or-less</li>
//               </ul>
//             </div>

//             {/* Sale Products */}
//             <div>
//               <h3 className="font-bold text-lg mb-2">Sale Product</h3>
//               <Image
//                 src="/images/sale.png"
//                 alt="Sale Product"
//                 width={300}
//                 height={200}
//                 className="w-full rounded-md"
//               />
//             </div>

//             {/* Tags */}
//             <div>
//               <h3 className="font-bold text-lg mb-2">Tags</h3>
//               <div className="flex flex-wrap gap-2">
//                 <span className="bg-gray-200 px-3 py-1 rounded-md text-sm">
//                   General
//                 </span>
//                 <span className="bg-gray-200 px-3 py-1 rounded-md text-sm">
//                   Design
//                 </span>
//                 <span className="bg-gray-200 px-3 py-1 rounded-md text-sm">
//                   Travel
//                 </span>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h3 className="font-bold text-lg mb-2">Follow</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-pink-500 hover:underline">
//                   Facebook
//                 </a>
//                 <a href="#" className="text-blue-400 hover:underline">
//                   Twitter
//                 </a>
//                 <a href="#" className="text-purple-600 hover:underline">
//                   Instagram
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
