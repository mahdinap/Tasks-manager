import { useState } from "react";
import Buttons from "../components/buttons";
import Checkbox from "../components/checkbox";
import Subtitle from "../components/subtitle";
import Input from "../inputs";
import { useEffect } from "react";

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
    function handlerClick(event){
        event.preventDefault()
        console.log(info);
        
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
        
            <form className="flex flex-col gap-5 p-5">
            <Input label="User Name" placholder="Enter Your User Name" type="text" onChange={onChange} value={info.username} id='username'/>
            <Input label="Email" placholder="Enter Your User Email" type="email" onChange={onChange} value={info.email} id='email' />
            <Input label="Password" placholder="" type="password" id='password' onChange={onChange} value={info.password} />
            <Checkbox label="Remmeber Password" id="remmberPass" onChange={onChange} value={info.remmberPass} />
            <Buttons label="Sign Up" color="sky" onClick={handlerClick} />

            </form>
        </div>
        

        </div>
        <Subtitle page="signup"/>

        </div>
        </>
    )
}