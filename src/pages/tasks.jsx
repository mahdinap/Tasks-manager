import Buttons from "../components/buttons";
import Checkbox from "../components/checkbox";
import { useNavigate } from "react-router";
import Layout from "./layout/layout";
import { useEffect, useState } from "react";
import TrashIcon from "../components/icons/trashIcon";



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
                <TrashIcon className="text-sky-900 hover:cursor-pointer hover:text-sky-950" />
                </div>
            </div>
            )}))
            }
            </div>
        </Layout>
    )
}