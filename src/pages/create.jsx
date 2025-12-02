import { useEffect, useState } from "react";
import Input from "../inputs";
import Buttons from "../components/buttons";
import DatePicker from "../components/DatePicker/datePicker";
import Select from "../components/select";
import Tasks from "./tasks";
import { useNavigate } from "react-router-dom";
import Layout from "./layout/layout";



export default function CreateNewTsk(){
    const  navigate=useNavigate()
    const [task,setTask]=useState({
        id:Date.now(),
        "taskName":"",
        "due":null,
        "Priority":"",
        "completed":false,
        
    })
    const [error,setError]=useState("")

    function handlerChange(e){
        const value=e.target.value
        const id=e.target.id
        setTask(
            (prev)=>(
                {...prev,[id]:value}
            )   
        )
        
    }

    function handlerSubmiit(e){
    e.preventDefault();
    if(!task.due){
        setError("Date is requierd")
        return
    }
    else{setError("")}

    console.log(task);
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = [...existingTasks, task];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTask({
        
        taskName: "",
        due: null,
        Priority: ""
    });
    console.log(task.id);
    
    navigate("/tasks");
}

    return(
    <>
    <Layout>

    <div>
    
    <Buttons onClick={()=>{navigate("/tasks")}} label="< Back" className=" bg-sky-900 rounded-lg shadow-md font-semibold transition-all duration-200 py-2 px-5 text-white active:scale-100 hover:bg-sky-950 w-30" />
        <h2 className="text-sky-950 text-3xl  text-center">Creat New task</h2>
        <form action="" className="flex flex-col gap-3" onSubmit={handlerSubmiit}>
        <Input required label="Task Name" placholder="Enter your task" id="taskName" onChange={handlerChange} className="p-2 shadow-md border border-stone-200 rounded-md" value={task.taskName}/>
        <DatePicker className="border" id="due" value={task.due} placholder="enter date" onChange={(date)=>{setTask((prev)=>({...prev,due:date}))}} />
        {error && <p className="text-red-700">{error}</p>}
        <Select required id="Priority" value={task.Priority} onChange={handlerChange} />
        <div className="flex justify-end my-4">

        <Buttons label="Save Task" className=" bg-sky-900 rounded-lg shadow-md font-semibold transition-all duration-200 py-2 px-5 text-white active:scale-100 hover:bg-sky-950 w-30 "/>
        </div>
        </form>
    </div>
    </Layout>
    </>
    )
}