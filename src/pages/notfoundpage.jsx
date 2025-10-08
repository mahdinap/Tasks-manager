import { Link } from "react-router-dom";
export default function NotFoundPage(){
    return(
        <>
        <div className=" container mx-auto  flex items-center justify-center flex-col h-full gap-4">
        <h1 className="text-8xl text-stone-800 font-bold">404</h1>
        <h2 className="text-3xl text-stone-600" >Page Not Found!</h2>


        <div className="flex gap-4">
        <Link to={"/"}>
        <button className="w-32 mt-4 py-2 px-4 bg-sky-500 rounded-md shadow-md text-white cursor-pointer hover:bg-sky-600">Go Home</button>
        </Link>
        <Link to={"/login"}>
        <button className="w-32 mt-4 py-2 px-4 bg-sky-500 rounded-md shadow-md text-white cursor-pointer hover:bg-sky-600">Log in</button>
        </Link>

        </div>
        </div>
        </>
    )
}