import Buttons from "../components/buttons";
import Checkbox from "../components/checkbox";
import { useNavigate } from "react-router";
import Layout from "./layout/layout";
import { useEffect, useState } from "react";



export default function Tasks(props){
    const [data,setData]=useState([])
   useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setData(tasks);
}, []);

    const {title,due,priority }=props
    const navigate=useNavigate()

    const priorityColor={
         high: "bg-red-600",
         medium: "bg-blue-800",
        low: "bg-stone-300",
    }

    return(
        <Layout>
            <div className="title flex items-center justify-between px-5 ">
                <Buttons label="+Add New Task" onClick={()=>{navigate("/create")}} className="bg-sky-900 text-white p-2 rounded-2xl hover:bg-sky-950"/>
                <h2 className="text-4xl text-sky-900  ">Tasks</h2>
                 <ul className="flex gap-3 bg-gray-200 items-center p-1.5 rounded-md ">
                <li className="bg-white rounded-md px-3">All</li>
                <li>Done</li>
                <li>Not Done</li>
                </ul>
            </div>

            <div>  
                {data.length===0?(
                <p className="text-center mt-5 text-gray-500">No tasks found.</p>
                ):
                (data.map((task,index)=>{
                return (
                <div key={index} className="task flex justify-between py-6 px-4 bg-blue-100 my-2 rounded-2xl">
                <div className="taskDetails flex gap-2">
                <Checkbox/>
                <div className="flex flex-col gap-1">
                    <h4 className="text-xl text-blue-900">{task.taskName}</h4>
                    <h5 className="text-sm text-stone-700">{task.due}</h5>
                </div>
                </div>
                <div className="flex gap-2">
                <span
                className={`${priorityColor[task.Priority]} text-center py-0 px-3 rounded-2xl text-white flex items-center capitalize`}>
                {task.Priority}
                </span>
                <svg className="text-sky-900 hover:cursor-pointer hover:text-sky-950" width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M262.2 48C248.9 48 236.9 56.3 232.2 68.8L216 112L120 112C106.7 112 96 122.7 96 136C96 149.3 106.7 160 120 160L520 160C533.3 160 544 149.3 544 136C544 122.7 533.3 112 520 112L424 112L407.8 68.8C403.1 56.3 391.2 48 377.8 48L262.2 48zM128 208L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 208L464 208L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 208L128 208zM288 280C288 266.7 277.3 256 264 256C250.7 256 240 266.7 240 280L240 456C240 469.3 250.7 480 264 480C277.3 480 288 469.3 288 456L288 280zM400 280C400 266.7 389.3 256 376 256C362.7 256 352 266.7 352 280L352 456C352 469.3 362.7 480 376 480C389.3 480 400 469.3 400 456L400 280z"/></svg>
                </div>
            </div>
            )}))
            }
            </div>
        </Layout>
    )
}