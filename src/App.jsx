export default function First(){
  return(
   <>
   <div className="lg:h-[100dvh]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mx-3 py-4 lg:grid-rows-4 ">
    <div className="lg:col-span-2 ">
      <img src="../public/1.jpg" className="object-cover rounded-3xl lg:h-full w-full h-40" />
    </div>
    <div className="h-40 md:h-full lg:w-full lg:row-span-3 rounded-2xl">
      <img src="/public/3.jpg" alt="" className="object-cover w-full h-40 lg:h-full rounded-2xl "/>
    </div>
    <div className="h-40  md:h-full w-full lg:col-span-2 lg:row-span-3 rounded-2xl">
      <img src="/public/2.jpg" className="object-cover w-full lg:h-full h-40 rounded-2xl"/>
    </div>
    <div className="bg-stone-600 h-40 lg:h-full lg:row-span-3 text-center rounded-2xl py-7"><h1 className="text-white font-bold">Apps:</h1></div>
    <div className="bg-stone-400 h-40 lg:h-full lg:row-span-3 text-center rounded-2xl py-7"><h6 className="text-white font-bold">To Do list</h6></div>
    <div className="bg-stone-600 h-40 lg:h-full rounded-2xl"><h1 className="text-start p-7 font-bold text-white">Devices</h1></div>
    <div className=" bg-stone-400 h-40 sm:h-full lg:col-span-2 rounded-2xl text-start"><h2 className="p-4 font-bold">Notes:</h2></div>
   </div>
   </>
  )
}
// export default function First() {
//   return (
//     <>
//       <div className="lg:h-[100dvh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mx-3 py-4">
        
//         {/* تصویر اول */}
//         <div className="lg:col-span-2 lg:h-full">
//           <img
//             src="/1.jpg"
//             className="object-cover rounded-3xl h-50 w-full sm:h-full"
//             alt="img1"
//           />
//         </div>

//         {/* تصویر دوم */}
//         <div className="lg:row-span-3 lg:h-full">
//           <img
//             src="/3.jpg"
//             className="object-cover rounded-2xl w-full h-full"
//             alt="img2"
//           />
//         </div>

//         {/* تصویر سوم */}
//         <div className="lg:col-span-2 lg:row-span-3">
//           <img
//             src="/2.jpg"
//             className="object-cover rounded-2xl w-full h-full"
//             alt="img3"
//           />
//         </div>

//         {/* بخش متن‌ها */}
//         <div className="bg-stone-600 lg:row-span-3 text-center rounded-2xl py-7 sm:h-full h-50">
//           <h1 className="text-white font-bold">Apps:</h1>
//         </div>

//         <div className="bg-stone-400 lg:row-span-3 text-center rounded-2xl py-7">
//           <h6 className="text-white font-bold">To Do list</h6>
//         </div>

//         <div className="bg-stone-600 rounded-2xl">
//           <h1 className="text-start p-7 font-bold text-white">Devices</h1>
//         </div>

//         <div className="bg-stone-400 lg:col-span-2 rounded-2xl text-start">
//           <h2 className="p-4 font-bold">Notes:</h2>
//         </div>
//       </div>
//     </>
//   );
// }
