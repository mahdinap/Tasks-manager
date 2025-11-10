import { useEffect } from "react";
import Input from "../inputs";
import { ArrowLeft} from "@phosphor-icons/react";
import Buttons from "../components/buttons";

export default function CreateNewTsk(){

    useEffect(()=>{
        document.title='Create New Task'
        document.body.classList.add("bg-sky-100")
        return()=>{
            document.body.classList.remove("bg-sky-100")
        }
    })
    function handlerSubmiit(e){
        e.preventDefault()
    }
    return(
    <>
    <div className="flex flex-col w-2/3 bg-stone-50 rounded-2xl p-3">
    
    <Buttons label="< Back" className=" bg-sky-900 rounded-lg shadow-md font-semibold transition-all duration-200 py-2 px-5 text-white active:scale-100 hover:bg-sky-950 w-30" />
        <h2 className="text-sky-950 text-3xl  text-center">Creat New task</h2>
        <form action="" className="flex flex-col gap-3"onSubmit={handlerSubmiit}>
        <Input label="Task Name" placholder="Enter your task"/>
        <label htmlFor="Priority">Priority</label>
        <select name="Priority" id="Priority" className=" p-2 shadow-md rounded-md">
            <option value="null" disabled selected>Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <div className="flex justify-end my-4">

        <Buttons label="Save Task" color="sky" className=" bg-sky-900 rounded-lg shadow-md font-semibold transition-all duration-200 py-2 px-5 text-white active:scale-100 hover:bg-sky-950 w-30 "/>
        </div>
        </form>
    </div>
    </>
    )
}