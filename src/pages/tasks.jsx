import Buttons from "../components/buttons";
import Checkbox from "../components/checkbox";
import { useNavigate } from "react-router";


export default function Tasks(props){
    const {title,due,priority }=props
    const navigate=useNavigate()
    const priorityColor={
         high: "bg-red-600",
    medium: "bg-blue-800",
    low: "bg-stone-300",
    }
    return(
        <div className="bg-gray-100 w-full h-full flex justify-center items-center">
        <div className="container bg-white w-4/5 h-auto rounded-lg p-7 ">
            <div className="title flex items-center justify-between px-5 ">
                <Buttons label="+Add New Task" onClick={()=>{navigate("/create")}} className="bg-blue-950 text-white p-2 rounded-2xl hover:bg-blue-900"/>
            <h2 className="text-4xl text-blue-900  ">Tasks</h2>
            <ul className="flex gap-3 bg-gray-200 items-center p-1.5 rounded-md ">
                <li className="bg-white rounded-md px-3">All</li>
                <li>Done</li>
                <li>Not Done</li>
            </ul>
            </div>
            <div className="task flex justify-between py-6 px-4 bg-blue-100 my-2 rounded-2xl">
            <div className="taskDetails flex gap-2">
                <Checkbox/>
                <div className="flex flex-col gap-1">
                    <h4 className="text-xl text-blue-900">{title}</h4>
                    <h5 className="text-sm text-stone-700">{due}</h5>
                </div>
            </div>
            <span
        className={`${priorityColor[priority]} text-center py-0 px-3 rounded-2xl text-white flex items-center capitalize`}>
        {priority}
      </span>
            </div>
        </div>
        </div>
    )
}