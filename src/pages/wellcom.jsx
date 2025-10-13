import { useEffect } from "react";
export default function Wellcome(props){
    const {name}=props
     useEffect(() => {
    // وقتی وارد این صفحه می‌شیم، رنگ پس‌زمینه کل صفحه تغییر کنه
    document.body.classList.add("bg-sky-100") // رنگ آبی روشن
    document.title="Wellcome"
    
    // وقتی از این صفحه خارج می‌شیم، رنگ برگرده
    return () => {
      document.body.classList.remove("bg-sky-100");
    };
  }, []);
    return(
        <>
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-2xl md:w-3/5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20 text-sky-950">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
            <h1 className="text-sky-950 text-5xl font-bold  py-4 font-suse text-center">Wellcome Ghazal!</h1>
            <p className="text-stone-500 font-semibold mb-4">let's get start on your tasks</p>
            <button className="bg-sky-950 text-stone-50 py-2 px-5 rounded-2xl hover:bg-sky-900">Add New Task</button>

        </div>



        </>
    )
}