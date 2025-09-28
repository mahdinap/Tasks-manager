export default function First(){
  return(
   <>
   <div className="lg:h-[100dvh]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mx-3 py-4 grid-rows-4 ">
    <div className="lg:col-span-2  h-full">
      <img src="../public/1.jpg" className="object-cover rounded-3xl h-full w-full mb-5" />
    </div>
    <div className="bg-sky-950 h-full w-full lg:row-span-3 rounded-2xl">
      <img src="/public/3.jpg" alt="" className="object-cover w-full h-full rounded-2xl"/>
    </div>
    <div className="h-full w-full lg:col-span-2 lg:row-span-3 rounded-2xl">
      <img src="/public/2.jpg" className="object-cover w-full h-full rounded-2xl"/>
    </div>
    <div className="bg-stone-600 h-full lg:row-span-3 text-center rounded-2xl py-7"><h1 className="text-white font-bold">Apps:</h1></div>
    <div className="bg-stone-400 h-full lg:row-span-3 text-center rounded-2xl py-7"><h6 className="text-white font-bold">To Do list</h6></div>
    <div className="bg-stone-600 h-full rounded-2xl"><h1 className="text-start p-7 font-bold text-white">Devices</h1></div>
    <div className=" bg-stone-400 h-full lg:col-span-2 rounded-2xl text-start"><h2 className="p-4 font-bold">Notes:</h2></div>
  
    
   </div>
   



   </>
  )
}