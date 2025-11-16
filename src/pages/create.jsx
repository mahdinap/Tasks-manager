import { useEffect, useState } from "react";
import Input from "../inputs";
import Buttons from "../components/buttons";
import DatePicker from "../components/DatePicker/datePicker";
import Select from "../components/select";

export default function CreateNewTsk(){
    const [task,setTask]=useState({})

    useEffect(()=>{
        document.title='Create New Task'
        document.body.classList.add("bg-sky-100")
        return()=>{
            document.body.classList.remove("bg-sky-100")
        }
    },[])

    function handlerOnChange(e){
        const value=e.target.value
        const id=e.target.id
        setTask(
            (prev)=>(
                {...prev,[id]:value}
            )
                
        )
        console.log(task);
        
    }

    function handlerSubmiit(e){
        e.preventDefault()
        console.log(e.value);
        
    }
    return(
    <>
    <div className="flex flex-col w-2/3 bg-white rounded-2xl p-3">
    
    <Buttons label="< Back" className=" bg-sky-900 rounded-lg shadow-md font-semibold transition-all duration-200 py-2 px-5 text-white active:scale-100 hover:bg-sky-950 w-30" />
        <h2 className="text-sky-950 text-3xl  text-center">Creat New task</h2>
        <form action="" className="flex flex-col gap-3" onSubmit={handlerSubmiit}>
        <Input onChange={handlerOnChange} label="Task Name" placholder="Enter your task" id="taskName" className="p-2 shadow-md border border-stone-200 rounded-md"/>
        <DatePicker className="border" id="dueDate" onChange={handlerOnChange}/>
      <Select placholder="Set provirty"/>
        <div className="flex justify-end my-4">

        <Buttons label="Save Task" className=" bg-sky-900 rounded-lg shadow-md font-semibold transition-all duration-200 py-2 px-5 text-white active:scale-100 hover:bg-sky-950 w-30 "/>
        </div>
        </form>
    </div>
    </>
    )
}