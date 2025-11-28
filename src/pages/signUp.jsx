import { useState } from "react";
import Buttons from "../components/buttons";
import Checkbox from "../components/checkbox";
import Subtitle from "../components/subtitle";
import Input from "../inputs";
import { useEffect } from "react";
import axios from "axios"



export default function SingUp(){
    useEffect(() => {
  document.title = "Sign UP";
}, []);

    const [info,setInfo]=useState({
        "username":"",
        "email":"",
        "password":"",
        "remmberPass":false
    })
    function onChange(e){
        const id=e.target.id
        const value=e.target.type==="checkbox"?e.target.checked:e.target.value
        setInfo((prev)=>({...prev,[id]:value}))
    }
    async function handleSubmit(event){
        event.preventDefault()
        try{

            const res=await axios.post("http://localhost:5000/register",info)
            console.log(res)
            localStorage.setItem("Token",res.data.accessToken)
            localStorage.setItem("name",info.username)
            
        }catch(res){

            console.log("error is :",res.response.data);
            alert(res.response.data)
            
        }
        
        
    }
    return(
        <>
        <div className="flex flex-col items-center justify-center ">
        <div className="overflow-x-hidden grid grid-cols-1 lg:grid-cols-2 lg:w-4/5 rounded-2xl shadow-2xl mb-1">
        <div className="bg-sky-950 flex lg:items-start flex-col justify-center p-10 items-center">
            <h1 className="text-white text-4xl font-bold mb-4 wrap-none font-ubuntu">welcome to task manager</h1>
            <span className="text-white text-lg font-semibold">organize your tasks and stay on top of your productivity</span>
        </div>
        <div>

            <h1 className="text-sky-950 text-4xl text-center font-bold font-suse ">Sign Up</h1>
        
            <form className="flex flex-col gap-5 p-5" onSubmit={handleSubmit}>
            <Input label="User Name" placholder="Enter Your User Name" type="text" onChange={onChange} value={info.username} id='username' className="p-2 shadow-md border border-stone-200 rounded-md"/>
            <Input label="Email" placholder="Enter Your User Email" type="email" onChange={onChange} value={info.email} id='email' className="p-2 shadow-md border border-stone-200 rounded-md" />
            <Input label="Password" placholder="" type="password" id='password' onChange={onChange} value={info.password} className="p-2 shadow-md border border-stone-200 rounded-md"/>
            <Checkbox label="Remmeber Password" id="remmberPass" onChange={onChange} value={info.remmberPass} className="p-2 shadow-md border border-stone-200 rounded-md" />
            <Buttons label="Sign Up" className="bg-sky-900 hover:bg-sky-950 text-white rounded-md py-2"  />

            </form>
        </div>
        

        </div>
        <Subtitle page="signup"/>

        </div>
        </>
    )
}