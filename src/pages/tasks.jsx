import Checkbox from "../components/checkbox";


export default function Tasks(){
    return(
        <div className="bg-gray-100 w-full h-full flex justify-center items-center">
        <div className="container bg-white w-4/5 h-auto rounded-lg p-7 ">
            <div className="title flex items-center justify-between px-5 ">
            <h2 className="text-4xl text-blue-900  ">Tasks</h2>
            <ul className="flex gap-2 bg-gray-200 items-center p-1.5 rounded-md">
                <li className="bg-white rounded-md p-1">All</li>
                <li>Done</li>
                <li>Not Done</li>
            </ul>
            </div>
            <div className="task flex justify-between py-6 px-4 bg-blue-100 my-2 rounded-2xl">
            <div className="taskDetails flex gap-2">
                <Checkbox/>
                <div className="flex flex-col gap-1">
                    <h4 className="text-xl text-blue-900">Finish project proposal</h4>
                    <h5 className="text-sm text-stone-700">Due:2025:05:028</h5>
                </div>
            </div>
            <span className="bg-red-600 text-center py-0 px-3 rounded-2xl text-white flex items-center">high</span>
            </div>
             <div className="task flex justify-between py-6 px-4 bg-blue-100 my-2 rounded-2xl">
            <div className="taskDetails flex gap-2">
                <Checkbox/>
                <div className="flex flex-col gap-1">
                    <h4 className="text-xl text-blue-900">Finish project proposal</h4>
                    <h5 className="text-sm text-stone-700">Due:2025:05:028</h5>
                </div>
            </div>
            <span className="bg-blue-800 text-center py-0 px-3 rounded-2xl text-white flex items-center">Medium</span>
            </div>
             <div className="task flex justify-between py-6 px-4 bg-blue-100 my-2 rounded-2xl">
            <div className="taskDetails flex gap-2">
                <Checkbox/>
                <div className="flex flex-col gap-1">
                    <h4 className="text-xl text-blue-900">Finish project proposal</h4>
                    <h5 className="text-sm text-stone-700">Due:2025:05:028</h5>
                </div>
            </div>
            <span className="bg-stone-300 text-center py-0 px-3 rounded-2xl text-white flex items-center">Low</span>
            </div>
        </div>
        </div>
    )
}