import TopBar from '../components/topbar'
import  BrandLogos from '../components/brand'
import  Footer from '../components/footer'
import Link from 'next/link';


export default function BlogPage() {
    return (
      <div> <TopBar/>
      <div className="flex flex-col lg:flex-row gap-8 p-6 bg-white">
       
        {/* Blog Posts Section */}
        <div className="lg:w-1/2  w-full space-y-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="/1 (1).png"
              alt="Blog Image 1"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>🧑 Self Author</span>
                <span>📅 20 Apr 2020</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-800 mt-3">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi
                lacus auctor interdum porttitor, eleifend volutpat...
              </p>
              <a href="#" className="text-pink-600 mt-4 inline-block font-semibold">
                Read More &raquo;
              </a>
            </div>
          </div>
  
          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="/1 (2).png"
              alt="Blog Image 2"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>🧑 Self Author</span>
                <span>📅 20 Apr 2020</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-800 mt-3">
                Aenean vitae in aliquam ultricies lectus. Etiam.
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi
                lacus auctor interdum porttitor, eleifend volutpat...
              </p>
              <a href="#" className="text-pink-600 mt-4 inline-block font-semibold">
                Read More &raquo;
              </a>
            </div>
          </div>
  
          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="/1 (3).png"
              alt="Blog Image 3"
              className="w-full h-72 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>🧑 Self Author</span>
                <span>📅 20 Apr 2020</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-800 mt-3">
                Sit nam congue feugiat nisl, mauris amet nisi.
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi
                lacus auctor interdum porttitor, eleifend volutpat...
              </p>
              <a href="#" className="text-pink-600 mt-4 inline-block font-semibold">
                Read More &raquo;
              </a>
            </div>
          </div>
        </div>
  
        {/* Sidebar Section */}
        <div className="lg:w-1/4 w-full space-y-8">
          {/* Search */}
          <div className="bg-white p-4 ">
            <h2 className="font-bold text-lg mb-2">Search</h2>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border rounded focus:outline-pink-500"
            />
          </div>
  
   {/* Categories */}
<div className="mb-6 ">
  <h3 className="font-bold text-xl mb-4 text-blue-900">Categories</h3>
  <div className="grid grid-cols-2 gap-4 text-blue-900">
    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold">
      Hobbies <span className="text-sm">(14)</span>
    </button>
    <button className="hover:text-pink-500 transition">
      Women <span className="text-sm">(21)</span>
    </button>
    <button className="hover:text-pink-500 transition">
      Women <span className="text-sm">(21)</span>
    </button>
    <button className="hover:text-pink-500 transition">
      Women <span className="text-sm">(21)</span>
    </button>
    <button className="hover:text-pink-500 transition">
      Women <span className="text-sm">(21)</span>
    </button>
    <button className="hover:text-pink-500 transition">
      Women <span className="text-sm">(21)</span>
    </button>
  </div>
 </div>

  
          {/* Recent Post */}
          {/* <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-lg mb-3">Recent Post</h2>
            <ul className="space-y-2 text-blue-600">
              <li>✍ How to live a happy life</li>
              <li>✍ Best travel destinations</li>
              <li>✍ 5 tips for a healthy mind</li>
            </ul>
          </div> */}
          {/* Recent Post */}
 <div className="mb-6">
  <h3 className="font-bold text-xl mb-4 text-blue-900">Recent Post</h3>
  <div className="space-y-4">
    {/* Post Item */}
    <div className="flex items-center space-x-4">
      <img
        src="/127.png"
        alt="Post Image"
        className="w-20 h-16 object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>

    {/* Post Item */}
    <div className="flex items-center space-x-4">
      <img
        src="/126.png"
        alt="Post Image"
        className="w-20 h-16 object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>

    {/* Post Item */}
    <div className="flex items-center space-x-4">
      <img
        src="/128.png"
        alt="Post Image"
        className="w-20 h-16 object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>

    {/* Post Item */}
    <div className="flex items-center space-x-4">
      <img
        src="123.png"
        alt="Post Image"
        className="w-20 h-16 object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>
  </div>
</div>

  
          {/* Sale Product */}
          <div className="mb-6">
  <h3 className="font-bold text-xl mb-4 text-blue-900">Recent Post</h3>
  <div className="space-y-4">
          <div className="flex items-center space-x-4">
      <img
        src="/122.png"
        alt="Post Image"
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <img
        src="/121.png"
        alt="Post Image"
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <img
        src="124.png"
        alt="Post Image"
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div>
        <h4 className="text-blue-900 font-semibold">
          It is a long established fact
        </h4>
        <p className="text-gray-500 text-sm">Aug 09 2020</p>
      </div>
    </div>
  </div>
  </div>
         
  
            {/* Offer Product Section */}
<div className="mb-2">
  <h2 className="font-bold text-2xl text-blue-900 mb-6">Offer product</h2>
  
  <div className="grid grid-cols-2 gap-6">
    {/* Product 1 */}
    <div className="text-center">
      <img 
        src="/Mask Group (3).png" 
        alt="Product 1" 
        className="w-48 h-48 object-cover rounded-md mb-4"
      />
      <h4 className="font-semibold text-blue-900 mb-1">Duis lectus est.</h4>
      <p className="text-gray-500">$12.00 - $15.00</p>
    </div>

    {/* Product 2 */}
    <div className="text-center">
      <img 
        src="/Mask Group (4).png" 
        alt="Product 2" 
        className="w-48 h-48 object-cover rounded-md mb-4"
      />
      <h4 className="font-semibold text-blue-900 mb-1">Sed placerat.</h4>
      <p className="text-gray-500">$12.00 - $15.00</p>
    </div>

    {/* Product 3 */}
    <div className="text-center">
      <img 
        src="/Mask Group (4).png" 
        alt="Product 3" 
        className="w-48 h-48 object-cover rounded-md mb-4"
      />
      <h4 className="font-semibold text-blue-900 mb-1">Netus proin.</h4>
      <p className="text-gray-500">$12.00 - $15.00</p>
    </div>

    {/* Product 4 */}
    <div className="text-center">
      <img 
        src="/Mask Group (5).png" 
        alt="Product 4" 
        className="w-48 h-48 object-cover rounded-md mb-4"
      />
      <h4 className="font-semibold text-blue-900 mb-1">Platea in.</h4>
      <p className="text-gray-500">$12.00 - $15.00</p>
    </div>
  </div>
</div>


 {/* Follow Us */}
 <div className="bg-white p-4 ">
            <h2 className="font-bold text-lg mb-3 text-[#151875]">Follow</h2>
            <div className="flex space-x-4">
            <img 
        src="/Group 224.png" 
        alt="Product 4" 
        className="w-48 h-48 object-cover rounded-md mb-4"
      />
               </div>
          </div>
       
        </div>
        </div>
        <BrandLogos/>
        <Footer/>
      
      </div>
    );
  }
  



















