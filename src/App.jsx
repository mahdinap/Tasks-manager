export default function First(){
  return(
   <>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-3 my-5  ">
    <div className="lg:row-span-2 lg:col-span-2 bg-amber-500">1</div>
    
    <div className="bg-sky-950 h-40">2</div>
    <div className=" bg-red-500 h-40">3</div>
    
    <div className="bg-green-500 h-40">4</div>
    <div className="bg-yellow-500 h-40">5</div>
    <div className="bg-lime-400 h-40">6</div>
    
    
    <div className="bg-pink-700 h-full lg:row-span-2" >7</div>
    <div className="bg-green-950 h-40 lg:col-span-2">8</div>
    <div className=" bg-rose-700 h-40 ">9</div>
    
    <div className=" bg-sky-700 h-40 ">10</div>
    <div className=" bg-lime-700 h-40 ">11</div>
    
   </div>

   </>
  )
}