import { useEffect, useState } from "react";
import Buttons from "../components/buttons";
import Checkbox from "../components/checkbox";
import Subtitle from "../components/subtitle";
import Input from "../inputs";
import axios from "axios";






export default function Login(){
    useEffect(()=>{
        document.title="Log in"
    },[])

    const [info,setInfo]=useState({
"email":"",
"password":"",
"remmber":false,
})

function onChange(e){
    const id=e.target.id
    const value =e.target.type==="checkbox"?e.target.checked:e.target.value 

    setInfo((prev=>({...prev,[id]:value})))
    
    }
async function handler(event){
        event.preventDefault()
        try{
            const res= await axios.post("http://localhost:5000/signin",info)
            console.log(res);
            
        }catch(res){
            console.log("Error is:",res.response.data);
            alert(res.response.data)
            
        }
       
    }
    return(
        <>
        <div className="flex flex-col items-center justify-center">
        <div className="overflow-x-hidden h-full grid grid-cols-1 lg:grid-cols-2 lg:w-4/5 rounded-2xl shadow-2xl mb-1 ">
        <div className="bg-sky-950 flex items-start flex-col justify-center p-10 ">
            <h1 className="text-white text-4xl font-bold mb-4 wrap-none font-ubuntu">welcome to task manager</h1>
            <span className="text-white text-lg font-semibold">organize your tasks and stay on top of your productivity</span>
        </div>
        <div>

        <h1 className="text-sky-950  text-4xl text-center font-bold font-suse" >log in</h1>
        <form className="flex flex-col gap-5 p-5" onSubmit={handler}>
            <Input label="Email" placholder="Enter Your Email" type="email" value={info.email} onChange={onChange} id="email" className="p-2 shadow-md border border-stone-200 rounded-md"/>
            <Input label="Password" placholder="" type="password" value={info.password} onChange={onChange} id="password" className="p-2 shadow-md border border-stone-200 rounded-md"/>
            <div>
            <Checkbox label='Remmber Password'  id="remmber" name="remmberPass" onChange={onChange} checked={info.remmber} />
            
            </div>
            <Buttons label="Log In" className="bg-sky-900 text-white hover:bg-sky-950 rounded-md py-2"/>
        </form>
        </div>
        </div>
            <Subtitle page="login"/> 
        </div>
        
    
        
        </>
    )
}