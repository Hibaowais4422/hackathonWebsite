// import Image from "next/image";
// import TopBar from '../components/topbar'
// import  BrandLogos from '../components/brand'
// import  Footer from '../components/footer'
// import Link from 'next/link';
// import {  ShoppingCart, Heart, Search ,CheckSquare2Icon } from "lucide-react";

// export default function ProductPage() {
//     return (
//       <div className="grid grid-col lg:grid-col gap-2 p-6 bg-gray-50">
//         {/* Sidebar Section */}
//         <div className="lg:w-1/4 w-full space-y-8 mt-8">
        
//         <div className="">
//               <h2 className="font-bold text-lg mb-3 text-[#151875]"> Product Brand </h2>
//               <ul>
//                 <li > ☑ Coaster Furniture </li>
//               </ul>
//             </div>
//           {/* Discount Offer */}
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="font-bold text-lg mb-3">Discount Offer</h2>
//             <ul className="space-y-2 text-gray-600">
//               <li>✅ 20% Cashback</li>
//               <li>✅ 5% Cashback Offer</li>
//               <li>✅ 25% Discount Offer</li>
//             </ul>
//           </div>
  
//           {/* Rating Item */}
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="font-bold text-lg mb-3">Rating Item</h2>
//             <ul className="space-y-1">
//               <li>⭐ ⭐ ⭐ ⭐ ⭐ (321)</li>
//               <li>⭐ ⭐ ⭐ ⭐ ☆ (176)</li>
//               <li>⭐ ⭐ ⭐ ☆ ☆ (92)</li>
//               <li>⭐ ⭐ ☆ ☆ ☆ (89)</li>
//             </ul>
//           </div>
  
//           {/* Categories */}
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="font-bold text-lg mb-3">Categories</h2>
//             <ul className="space-y-1 text-gray-600">
//               <li>☑ Prestashop</li>
//               <li>☑ Magento</li>
//               <li>☑ Bigcommerce</li>
//               <li>☑ osCommerce</li>
//               <li>☑ 3dcart</li>
//               <li>☑ Bags</li>
//               <li>☑ Accessories</li>
//             </ul>
//           </div>
  
//           {/* Price Filter */}
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="font-bold text-lg mb-3">Price Filter</h2>
//             <ul className="space-y-2">
//               <li className="text">☑</li>
//               <li>☑ $150.00 - $350.00</li>
//               <li>☑ $350.00 - $450.00</li>
//               <li>☑ $450.00 +</li>

//             </ul>
//             <CheckSquare2Icon size={18}/>
//           </div>
  
//           {/* Color Filter */}
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="font-bold text-lg mb-3">Filter By Color</h2>
//             <div className="flex space-x-4">
//               <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
//               <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
//               <div className="w-6 h-6 bg-green-500 rounded-full"></div>
//               <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
//               <div className="w-6 h-6 bg-sky-500 rounded-full"></div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-2 absolute top-1/5 left-1/4">
//         <div className=" p-6 ml-6   ">
//           {/* Product Card 1 */}
//           <div className="bg-white  flex flex-col md:flex-row">
//             <Image
//               src="/rectangle 32 (6).png"
//               alt="Product 1"
//               width={300}
//               height={200}
//               className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
//             />
//             <div className="p-6 flex flex-col justify-between">
//             <div className="w-2/3 ml-4">
//         {/* Title */}
//         <div className="flex items-center space-x-4">
//       {/* Title */}
//       <h2 className="font-bold text-2xl text-blue-900">
//       Curabitur lectus
//       </h2>

//       {/* Dots */}
//       <div className="flex space-x-2">
//         <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
//         <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
//         <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
//       </div>
//     </div>
       
//         {/* Price */}
//         <div className="flex items-center mb-2 space-x-2">
//           <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
//           <span className="text-[#FF2AAA] line-through">$52.00</span>
//         {/* </div> */}

//         {/* Rating */}
//         <div className="flex">
//           <span className="text-[#FFC416]">★ ★ ★ ★</span>
//           <span className="text-gray-400">★</span>
//         </div>
//         </div>
//         {/* Description */}
//         <p className="text-[#9295AA] mb-3 text-sm leading-5">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
//           adipiscing in phasellus non in justo.
//         </p>

//         {/* Icons */}
//         <div className="flex space-x-4">
//           <button className="text-[#535399] hover:text-blue-900">
//             <ShoppingCart size={20} />
//           </button>
//           <button className="text-[#535399] hover:text-blue-900">
//             <Heart size={20} />
//           </button>
//           <button className="text-[#535399] hover:text-blue-900">
//             <Search size={20} />
//           </button>
//         </div>
//       </div>
//              </div>
//           </div>

//         </div>

//         <div className=" p-6 ml-6 mt-10 space-y-10">
//           {/* Product Card 1 */}
//           <div className="bg-white  flex flex-col md:flex-row">
//             <Image
//               src="/rectangle 32 (6).png"
//               alt="Product 1"
//               width={300}
//               height={200}
//               className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
//             />
//             <div className="p-6 flex flex-col justify-between">
//             <div className="w-2/3 ml-4">
//         {/* Title */}
//         <div className="flex items-center space-x-4">
//       {/* Title */}
//       <h2 className="font-bold text-2xl text-blue-900">
//       Curabitur lectus
//       </h2>

//       {/* Dots */}
//       <div className="flex space-x-2">
//         <span className="w-4 h-4 bg-[#DE9034] rounded-full"></span>
//         <span className="w-4 h-4 bg-[#E60584] rounded-full"></span>
//         <span className="w-4 h-4 bg-[#5E37FF] rounded-full"></span>
//       </div>
//     </div>
       
//         {/* Price */}
//         <div className="flex items-center mb-2 space-x-2">
//           <span className="text-[#111C85] font-bold text-md mr-2">$26.00</span>
//           <span className="text-[#FF2AAA] line-through">$52.00</span>
//         {/* </div> */}

//         {/* Rating */}
//         <div className="flex">
//           <span className="text-[#FFC416]">★ ★ ★ ★</span>
//           <span className="text-gray-400">★</span>
//         </div>
//         </div>
//         {/* Description */}
//         <p className="text-[#9295AA] mb-3 text-sm leading-5">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
//           adipiscing in phasellus non in justo.
//         </p>

//         {/* Icons */}
//         <div className="flex space-x-4">
//           <button className="text-[#535399] hover:text-blue-900">
//             <ShoppingCart size={20} />
//           </button>
//           <button className="text-[#535399] hover:text-blue-900">
//             <Heart size={20} />
//           </button>
//           <button className="text-[#535399] hover:text-blue-900">
//             <Search size={20} />
//           </button>
//         </div>
//       </div>
//              </div>
//           </div>

//         </div>
//         </div>
//     </div>
//     )
// }































// // //         {/* Products Section */}
// // //         {/* <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
// // //           {products.map((product) => (
// // //             <div
// // //               key={product.id}
// // //               className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
// // //             >
// // //               {/* Product Image */}
// // //               {/* <img
// // //                 src={product.image}
// // //                 alt={product.name}
// // //                 className="w-28 h-28 object-cover rounded"
// // //               />
// // //     */}
// // //               {/* Product Content */}
// // //               {/* <div>
// // //                 <h2 className="font-bold text-xl text-gray-800">{product.name}</h2>
// // //                 <div className="flex items-center gap-2 mt-1">
// // //                   <span className="text-blue-600 font-semibold">{product.price}</span>
// // //                   <span className="text-red-500 line-through">{product.oldPrice}</span>
// // //                   ⭐ ⭐ ⭐ ⭐ ☆
// // //                 </div>
// // //                 <p className="text-sm text-gray-600 mt-2">{product.description}</p>
  
// // //                 {/* Actions */}
// // //                 {/* <div className="flex space-x-4 mt-3 text-gray-500">
// // //                   <button>🛒</button>
// // //                   <button>❤️</button>
// // //                   <button>🔍</button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     );
// // //   } */}
// // // {/*   
// // //   // Product Data
// // //   const products = [
// // //     {
// // //       id: 1,
// // //       name: "Sodales sit",
// // //       price: "$26.00",
// // //       oldPrice: "$52.00",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// // //       image: "https://via.placeholder.com/100",
// // //     },
// // //     {
// // //       id: 2,
// // //       name: "Nibn varius",
// // //       price: "$26.00",
// // //       oldPrice: "$52.00",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// // //       image: "https://via.placeholder.com/100",
// // //     },
// // //     {
// // //       id: 3,
// // //       name: "Mauris quis",
// // //       price: "$26.00",
// // //       oldPrice: "$50.00",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// // //       image: "https://via.placeholder.com/100",
// // //     },
// // //     {
// // //       id: 4,
// // //       name: "Morbi sagittis",
// // //       price: "$26.00",
// // //       oldPrice: "$50.00",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// // //       image: "https://via.placeholder.com/100",
// // //     },
// // //     {
// // //       id: 5,
// // //       name: "Ultricises venenatis",
// // //       price: "$26.00",
// // //       oldPrice: "$32.00",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// // //       image: "https://via.placeholder.com/100",
// // //     },
// // //     {
// // //       id: 6,
// // //       name: "Scelerisque dignissim",
// // //       price: "$26.00",
// // //       oldPrice: "$52.00",
// // //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// // //       image: "https://via.placeholder.com/100",
// // //     },
// // //   ];
// // //    */} 







// // import { Check, Star } from "lucide-react";

// // // Reusable FilterSection Component
// // interface FilterSectionProps {
// //   title: string;
// //   items: { name: string; isChecked?: boolean; icon?: string }[];
// // }

// // const FilterSection = ({ title, items }: FilterSectionProps) => {
// //   return (
// //     <div className="mb-6">
// //       <h3 className="text-lg font-bold text-indigo-900 mb-2 border-b pb-2">{title}</h3>
// //       <ul className="space-y-3">
// //         {items.map((item, index) => (
// //           <li key={index} className="flex items-center">
// //             <span
// //               className={`w-5 h-5 flex items-center justify-center rounded mr-3 ${
// //                 item.isChecked ? "bg-indigo-100" : "bg-gray-200"
// //               }`}
// //             >
// //               {item.isChecked && <Check size={16} className="text-indigo-600" />}
// //             </span>
// //             {item.icon === "star" && <Star size={16} className="text-yellow-500 mr-1" />}
// //             <span className="text-gray-700 text-sm">{item.name}</span>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default function Home() {
// //   // Data for each section
// //   const productBrands = [
// //     { name: "Coaster Furniture", isChecked: true },
// //     { name: "Fusion Dot High Fashion", isChecked: true },
// //     { name: "Unique Furniture Restor", isChecked: true },
// //     { name: "Dream Furniture Flipping", isChecked: true },
// //     { name: "Young Repurposed", isChecked: true },
// //     { name: "Green DIY furniture", isChecked: true },
// //   ];

// //   const discountOffers = [
// //     { name: "20% Cashback", isChecked: true },
// //     { name: "5% Cashback Offer", isChecked: true },
// //     { name: "25% Discount Offer", isChecked: true },
// //   ];

// //   const ratingItems = [
// //     { name: "(2341)", isChecked: true, icon: "star" },
// //     { name: "(1726)", isChecked: true, icon: "star" },
// //     { name: "(120)", isChecked: true, icon: "star" },
// //     { name: "(85)", isChecked: true, icon: "star" },
// //   ];

// //   const categories = [
// //     { name: "Prestashop", isChecked: true },
// //     { name: "Magento", isChecked: true },
// //     { name: "Bigcommerce", isChecked: true },
// //     { name: "osCommerce", isChecked: true },
// //     { name: "3dcart", isChecked: true },
// //     { name: "Bags", isChecked: true },
// //     { name: "Accessories" },
// //     { name: "Jewellery" },
// //     { name: "Watches", isChecked: true },
// //   ];

// //   const priceFilters = [
// //     { name: "$0.00 - $150.00", isChecked: true },
// //     { name: "$150.00 - $350.00", isChecked: true },
// //     { name: "$150.00 - $504.00", isChecked: true },
// //     { name: "$450.00+", isChecked: true },
// //   ];

// //   const colors = [
// //     { name: "Blue" },
// //     { name: "Orange" },
// //     { name: "Brown" },
// //     { name: "Green" },
// //     { name: "Purple" },
// //     { name: "Sky" },
// //   ];

// //   return (
// //     <div className="bg-gray-50 min-h-screen flex justify-center py-10">
// //       <div className="w-64 bg-white rounded-lg shadow-lg p-4">
// //         {/* Product Brand */}
// //         <FilterSection title="Product Brand" items={productBrands} />

// //         {/* Discount Offer */}
// //         <FilterSection title="Discount Offer" items={discountOffers} />

// //         {/* Rating Items */}
// //         <FilterSection title="Rating Item" items={ratingItems} />

// //         {/* Categories */}
// //         <FilterSection title="Categories" items={categories} />

// //         {/* Price Filter */}
// //         <FilterSection title="Price Filter" items={priceFilters} />

// //         {/* Filter by Color */}
// //         <FilterSection title="Filter By Color" items={colors} />
// //       </div>
// //     </div>
// //   );
// // }





// // import React from "react";

// // const Page = () => {
// //   // Product Data
// //   const products = [
// //     {
// //       id: 1,
// //       name: "Sodales sit",
// //       price: "$26.00",
// //       oldPrice: "$52.00",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //       image: "https://via.placeholder.com/150",
// //     },
// //     {
// //       id: 2,
// //       name: "Nibn varius",
// //       price: "$26.00",
// //       oldPrice: "$52.00",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //       image: "https://via.placeholder.com/150",
// //     },
// //     {
// //       id: 3,
// //       name: "Mauris quis",
// //       price: "$26.00",
// //       oldPrice: "$50.00",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //       image: "https://via.placeholder.com/150",
// //     },
// //     {
// //       id: 4,
// //       name: "Morbi sagittis",
// //       price: "$26.00",
// //       oldPrice: "$50.00",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //       image: "https://via.placeholder.com/150",
// //     },
// //     {
// //       id: 5,
// //       name: "Ultricises venenatis",
// //       price: "$26.00",
// //       oldPrice: "$32.00",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //       image: "https://via.placeholder.com/150",
// //     },
// //     {
// //       id: 6,
// //       name: "Scelerisque dignissim",
// //       price: "$26.00",
// //       oldPrice: "$52.00",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //       image: "https://via.placeholder.com/150",
// //     },
// //   ];

// //   return (
// //     <div className="flex flex-col lg:flex-row gap-6 p-4">
// //       {/* Sidebar Filters */}
// //       <div className="lg:w-1/4 w-full">
// //         <div>
// //           <h2 className="text-lg font-bold mb-2">Product Brand</h2>
// //           <ul className="space-y-2">
// //             {[
// //               "Coaster Furniture",
// //               "Fusion Dot High Fashion",
// //               "Unique Furniture Restor",
// //               "Dream Furniture Flipping",
// //               "Young Repurposed",
// //               "Green DIY furniture",
// //             ].map((brand, index) => (
// //               <li key={index} className="flex items-center gap-2">
// //                 <input type="checkbox" defaultChecked className="accent-purple-600" />
// //                 <span>{brand}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         <div className="mt-6">
// //           <h2 className="text-lg font-bold mb-2">Discount Offer</h2>
// //           <ul className="space-y-2">
// //             {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
// //               (offer, index) => (
// //                 <li key={index} className="flex items-center gap-2">
// //                   <input type="checkbox" className="accent-pink-600" />
// //                   <span>{offer}</span>
// //                 </li>
// //               )
// //             )}
// //           </ul>
// //         </div>

// //         <div className="mt-6">
// //           <h2 className="text-lg font-bold mb-2">Rating Item</h2>
// //           {[4, 3, 2, 1].map((stars, index) => (
// //             <div key={index} className="flex items-center gap-2">
// //               <input type="checkbox" className="accent-yellow-400" />
// //               <div className="flex gap-1">
// //                 {Array.from({ length: 5 }, (_, i) => (
// //                   <span key={i} className={i < stars ? "text-yellow-400" : "text-gray-300"}>
// //                     ★
// //                   </span>
// //                 ))}
// //               </div>
// //               <span>({Math.floor(Math.random() * 3000)})</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Products Section */}
// //       <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4"
// //           >
// //             {/* Product Image */}
// //             <img
// //               src={product.image}
// //               alt={product.name}
// //               className="w-28 h-28 object-cover rounded"
// //             />
// //             {/* Product Details */}
// //             <div>
// //               <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
// //               <div className="flex items-center gap-2 mt-1">
// //                 <span className="text-blue-600 font-semibold">{product.price}</span>
// //                 <span className="text-red-500 line-through">{product.oldPrice}</span>
// //                 <span className="text-yellow-400">★★★★☆</span>
// //               </div>
// //               <p className="text-sm text-gray-600 mt-2">{product.description}</p>
// //               <div className="flex space-x-4 mt-3 text-gray-500">
// //                 <button>🛒</button>
// //                 <button>❤️</button>
// //                 <button>🔍</button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Page;







// // "use client";
// // import React from "react";

// // const Page = () => {
// //   // Product Data
// //   const products = [
// //     {
// //       id: 1,
// //       name: "Dictum morbi",
// //       price: "$26.00",
// //       oldPrice: "$52.00",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //       image: "https://via.placeholder.com/150",
// //     },
// //     {
// //       id: 2,
// //       name: "Sodales sit",
// //       price: "$26.00",
// //       oldPrice: "$52.00",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //       image: "https://via.placeholder.com/150",
// //     },
// //     {
// //       id: 3,
// //       name: "Nibn varius",
// //       price: "$26.00",
// //       oldPrice: "$52.00",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //       image: "https://via.placeholder.com/150",
// //     },
// //   ];

// //   return (
// //     <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-6">
// //       {/* Sidebar */}
// //       <div className="w-full lg:w-1/4 bg-white p-4 shadow rounded">
// //         {/* Product Brand */}
// //         <div className="mb-6">
// //           <h3 className="font-bold text-lg mb-2 text-gray-800">Product Brand</h3>
// //           <ul className="space-y-2">
// //             {["Coaster Furniture", "Fusion Dot High Fashion", "Unique Furniture Restor"].map(
// //               (brand) => (
// //                 <li key={brand} className="flex items-center">
// //                   <input type="checkbox" className="mr-2" defaultChecked />
// //                   <span>{brand}</span>
// //                 </li>
// //               )
// //             )}
// //           </ul>
// //         </div>

// //         {/* Discount Offer */}
// //         <div className="mb-6">
// //           <h3 className="font-bold text-lg mb-2 text-gray-800">Discount Offer</h3>
// //           <ul className="space-y-2">
// //             {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map((offer) => (
// //               <li key={offer} className="flex items-center">
// //                 <input type="checkbox" className="mr-2" defaultChecked />
// //                 <span>{offer}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Rating Items */}
// //         <div className="mb-6">
// //           <h3 className="font-bold text-lg mb-2 text-gray-800">Rating Item</h3>
// //           {[5, 4, 3, 2, 1].map((stars) => (
// //             <div key={stars} className="flex items-center gap-2">
// //               <span>{"⭐".repeat(stars)}</span>
// //               <span className="text-gray-100 text-sm">({stars * 100})</span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Categories */}
// //         <div className="mb-6">
// //           <h3 className="font-bold text-lg mb-2 text-gray-800">Categories</h3>
// //           <ul className="space-y-2">
// //             {["Prestashop", "Magento", "Bigcommerce", "osCommerce", "3dcart"].map((cat) => (
// //               <li key={cat} className="flex items-center">
// //                 <input type="checkbox" className="mr-2" defaultChecked />
// //                 <span>{cat}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>

// //       {/* Products Section */}
// //       <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4"
// //           >
// //             {/* Product Image */}
// //             <img
// //               src={product.image}
// //               alt={product.name}
// //               className="w-28 h-28 object-cover rounded"
// //             />

// //             {/* Product Content */}
// //             <div>
// //               <h2 className="font-bold text-lg text-gray-800">{product.name}</h2>
// //               <div className="flex items-center gap-2 mt-1">
// //                 <span className="text-blue-600 font-semibold">{product.price}</span>
// //                 <span className="text-red-500 line-through">{product.oldPrice}</span>
// //               </div>
// //               <p className="text-sm text-gray-600 mt-2">{product.description}</p>

// //               {/* Actions */}
// //               <div className="flex space-x-4 mt-3 text-gray-500">
// //                 <button>🛒</button>
// //                 <button>❤️</button>
// //                 <button>🔍</button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Page;
