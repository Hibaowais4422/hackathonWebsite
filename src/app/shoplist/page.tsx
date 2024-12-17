import Image from "next/image";
import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'
import Link from 'next/link';
import { LayoutGrid, List, ShoppingCart, Heart, Search  } from "lucide-react";



export default function Home() {
  return (
    <div className="bg-white ">
        <TopBar/>
         <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-4">Shop List</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0D0E43]">Home</Link>
            <span className="text-[#0D0E43]">.</span>
            <Link href="/shopleft" className="text-[#0D0E43]">Pages</Link>
            <span className="text-[#FB2E86]">Shop List</span>
          </div>
        </div>
      </div>
    <div className="bg-white py-10 p-6 ml-16 mt-1 ">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 ">
          <h1 className="text-xl font-bold text-indigo-800">
            Ecommerce Accesories & Fashion item
          </h1>
          <p className="text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
        {/* </div> */}

        {/* Filters */}
        <div className=" flex justify-end items-end -mt-10 space-x-2 text-sm">
          <div>
            <label className=" text-[#3F509E]">Per Page:</label>
            <input
              type="number"
              className="border rounded px-2 py-1 w-20"
            />
          </div>
          <div>
            <label className="mr-2 text-[#3F509E]">Sort By:</label>
            <select className="border rounded px- py-1">
              <option className="text-[#8A8FB9]">Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
       
          <div className="flex items-center space-x-4">
      <span className="text-[#3F509E]">View:</span>
      <button className="text-[#151875] hover:text-blue-900">
        <LayoutGrid size={20} />
      </button>
      <button className="text-[#151875] hover:text-blue-700">
        <List size={20} />
      </button>
      <input
              type="number"
              className="border rounded px-1 py-1 w-28"
            />
    </div>
        </div>
        </div>

        {/* Product Listing */}
        <div className=" p-6 ml-6 mt-10 space-y-20">
          {/* Product Card 1 */}
          <div className="bg-white  flex flex-col md:flex-row">
            <Image
              src="/rectangle 32.png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
            <div className="w-2/3 ml-4">
        {/* Title */}
        <div className="flex items-center space-x-4">
      {/* Title */}
      <h2 className="font-bold text-2xl text-blue-900">
        Accumsan tincidunt
      </h2>

      {/* Dots */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
        <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
        <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
      </div>
    </div>
       
        {/* Price */}
        <div className="flex items-center mb-2 space-x-2">
          <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
          <span className="text-[#FF2AAA] line-through">$52.00</span>
        {/* </div> */}

        {/* Rating */}
        <div className="flex">
          <span className="text-[#FFC416]">★ ★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
        {/* Description */}
        <p className="text-[#9295AA] mb-3 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        {/* Icons */}
        <div className="flex space-x-4">
          <button className="text-[#535399] hover:text-blue-900">
            <ShoppingCart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Heart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Search size={20} />
          </button>
        </div>
      </div>
             </div>
          </div>

        </div>
        <div className=" p-6 ml-6 mt-10 space-y-10">
          {/* Product Card 1 */}
          <div className="bg-white  flex flex-col md:flex-row">
            <Image
              src="/rectangle 32 (1).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
            <div className="w-2/3 ml-4">
        {/* Title */}
        <div className="flex items-center space-x-4">
      {/* Title */}
      <h2 className="font-bold text-2xl text-blue-900">
      In nulla
      </h2>

      {/* Dots */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
        <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
        <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
      </div>
    </div>
       
        {/* Price */}
        <div className="flex items-center mb-2 space-x-2">
          <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
          <span className="text-[#FF2AAA] line-through">$52.00</span>
        {/* </div> */}

        {/* Rating */}
        <div className="flex">
          <span className="text-[#FFC416]">★ ★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
        {/* Description */}
        <p className="text-[#9295AA] mb-3 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        {/* Icons */}
        <div className="flex space-x-4">
          <button className="text-[#535399] hover:text-blue-900">
            <ShoppingCart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Heart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Search size={20} />
          </button>
        </div>
      </div>
             </div>
          </div>

        </div>
        <div className=" p-6 ml-6 mt-10 space-y-10">
          {/* Product Card 1 */}
          <div className="bg-white  flex flex-col md:flex-row">
            <Image
              src="/rectangle 32 (2).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
            <div className="w-2/3 ml-4">
        {/* Title */}
        <div className="flex items-center space-x-4">
      {/* Title */}
      <h2 className="font-bold text-2xl text-blue-900">
      Vel sem
      </h2>

      {/* Dots */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
        <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
        <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
      </div>
    </div>
       
        {/* Price */}
        <div className="flex items-center mb-2 space-x-2">
          <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
          <span className="text-[#FF2AAA] line-through">$52.00</span>
        {/* </div> */}

        {/* Rating */}
        <div className="flex">
          <span className="text-[#FFC416]">★ ★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
        {/* Description */}
        <p className="text-[#9295AA] mb-3 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        {/* Icons */}
        <div className="flex space-x-4">
          <button className="text-[#535399] hover:text-blue-900">
            <ShoppingCart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Heart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Search size={20} />
          </button>
        </div>
      </div>
             </div>
          </div>

        </div>
        <div className=" p-6 ml-6 mt-10 space-y-10">
          {/* Product Card 1 */}
          <div className="bg-white  flex flex-col md:flex-row">
            <Image
              src="/rectangle 32 (3).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
            <div className="w-2/3 ml-4">
        {/* Title */}
        <div className="flex items-center space-x-4">
      {/* Title */}
      <h2 className="font-bold text-2xl text-blue-900">
      Porttitor cum
      </h2>

      {/* Dots */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
        <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
        <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
      </div>
    </div>
       
        {/* Price */}
        <div className="flex items-center mb-2 space-x-2">
          <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
          <span className="text-[#FF2AAA] line-through">$52.00</span>
        {/* </div> */}

        {/* Rating */}
        <div className="flex">
          <span className="text-[#FFC416]">★ ★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
        {/* Description */}
        <p className="text-[#9295AA] mb-3 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        {/* Icons */}
        <div className="flex space-x-4">
          <button className="text-[#535399] hover:text-blue-900">
            <ShoppingCart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Heart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Search size={20} />
          </button>
        </div>
      </div>
             </div>
          </div>

        </div>
        <div className=" p-6 ml-6 mt-10 space-y-10">
          {/* Product Card 1 */}
          <div className="bg-white  flex flex-col md:flex-row">
            <Image
              src="/rectangle 32 (4).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
            <div className="w-2/3 ml-4">
        {/* Title */}
        <div className="flex items-center space-x-4">
      {/* Title */}
      <h2 className="font-bold text-2xl text-blue-900">
      Nunc in
      </h2>

      {/* Dots */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
        <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
        <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
      </div>
    </div>
       
        {/* Price */}
        <div className="flex items-center mb-2 space-x-2">
          <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
          <span className="text-[#FF2AAA] line-through">$52.00</span>
        {/* </div> */}

        {/* Rating */}
        <div className="flex">
          <span className="text-[#FFC416]">★ ★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
        {/* Description */}
        <p className="text-[#9295AA] mb-3 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        {/* Icons */}
        <div className="flex space-x-4">
          <button className="text-[#535399] hover:text-blue-900">
            <ShoppingCart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Heart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Search size={20} />
          </button>
        </div>
      </div>
             </div>
          </div>

        </div>
        <div className=" p-6 ml-6 mt-10 space-y-10">
          {/* Product Card 1 */}
          <div className="bg-white  flex flex-col md:flex-row">
            <Image
              src="/rectangle 32 (5).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
            <div className="w-2/3 ml-4">
        {/* Title */}
        <div className="flex items-center space-x-4">
      {/* Title */}
      <h2 className="font-bold text-2xl text-blue-900">
      Vitae facilisis
      </h2>

      {/* Dots */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
        <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
        <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
      </div>
    </div>
       
        {/* Price */}
        <div className="flex items-center mb-2 space-x-2">
          <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
          <span className="text-[#FF2AAA] line-through">$52.00</span>
        {/* </div> */}

        {/* Rating */}
        <div className="flex">
          <span className="text-[#FFC416]">★ ★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
        {/* Description */}
        <p className="text-[#9295AA] mb-3 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        {/* Icons */}
        <div className="flex space-x-4">
          <button className="text-[#535399] hover:text-blue-900">
            <ShoppingCart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Heart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Search size={20} />
          </button>
        </div>
      </div>
             </div>
          </div>

        </div>
        <div className=" p-6 ml-6 mt-10 space-y-10">
          {/* Product Card 1 */}
          <div className="bg-white  flex flex-col md:flex-row">
            <Image
              src="/rectangle 32 (6).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
            <div className="w-2/3 ml-4">
        {/* Title */}
        <div className="flex items-center space-x-4">
      {/* Title */}
      <h2 className="font-bold text-2xl text-blue-900">
      Curabitur lectus
      </h2>

      {/* Dots */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
        <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
        <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
      </div>
    </div>
       
        {/* Price */}
        <div className="flex items-center mb-2 space-x-2">
          <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
          <span className="text-[#FF2AAA] line-through">$52.00</span>
        {/* </div> */}

        {/* Rating */}
        <div className="flex">
          <span className="text-[#FFC416]">★ ★ ★ ★</span>
          <span className="text-gray-400">★</span>
        </div>
        </div>
        {/* Description */}
        <p className="text-[#9295AA] mb-3 text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        {/* Icons */}
        <div className="flex space-x-4">
          <button className="text-[#535399] hover:text-blue-900">
            <ShoppingCart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Heart size={20} />
          </button>
          <button className="text-[#535399] hover:text-blue-900">
            <Search size={20} />
          </button>
        </div>
      </div>
             </div>
          </div>

        </div>



      </div>
    </div>
    <BrandLogos/>
    <Footer/>
    </div>
  );
}
