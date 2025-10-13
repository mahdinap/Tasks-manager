import { useEffect } from "react";
import Input from "../inputs";
import { ArrowLeft} from "@phosphor-icons/react";

export default function CreateNewTsk(){

    useEffect(()=>{
        document.title='Create New Task'
        document.body.classList.add("bg-sky-100")
        return()=>{
            document.body.classList.remove("bg-sky-100")
        }
    })
    return(
    <>
    <div className="flex flex-col w-2/3 bg-stone-50 rounded-2xl p-3">
    
    <button className="text-sky-950 py-2 px-3 bg-stone-200 hover:bg-stone-300 rounded-2xl font-medium inline-flex items-center gap-1 w-max">
  <ArrowLeft size={20} />
  Back
</button>


        <h2 className="text-sky-950 text-3xl  text-center">Creat New task</h2>
        <form action="" className="flex flex-col">
        <Input label="Task Name" />
        <label htmlFor="Priority">Priority</label>
        <select name="Priority" id="Priority">
            <option value="null" disabled selected>Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        </form>
    </div>
    </>)
}