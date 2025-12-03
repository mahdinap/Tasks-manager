import { useEffect, useState } from "react";
import Buttons from "../components/buttons";
import Checkbox from "../components/checkbox";
import Subtitle from "../components/subtitle";
import Input from "../inputs";
import axios from "axios";

import {z} from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"




const schema=z.object({
    "email":z.email("invalid email"),
    "password":z.string().min(8,"must be at least 8 charcters")
})



export default function Login(){
    useEffect(()=>{
        document.title="Log in"
    },[])    

    const {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm(({
        resolver:zodResolver(schema),
        mode:"onBlur"
    }))


async function handler(data){
        
        try{
            const res= await axios.post("http://localhost:5000/signin",data)
            console.log(res);
            localStorage.setItem("Token",res.data.accessToken)
            
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
        <form className="flex flex-col gap-2 p-5" onSubmit={handleSubmit(handler)}>
            <Input label="Email" placholder="Enter Your Email" type="email"  id="email" className="p-2 shadow-md border border-stone-200 rounded-md" {...register("email")}/>
            {errors.email && <p className="text-red-700">{errors.email.message}</p>}
            <Input label="Password" placholder="" type="password"  id="password" className="p-2 shadow-md border border-stone-200 rounded-md" {...register("password")}/>
            {errors.password && <p className="text-red-700">{errors.password.message}</p>}
            <div>
            <Checkbox label='Remmber Password'  id="remmber" name="remmberPass"  />
            
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