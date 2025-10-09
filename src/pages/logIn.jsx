import Buttons from "../components/buttons";
import Checkbox from "../components/checkbox";
import Subtitle from "../components/subtitle";
import Input from "../inputs";

export default function Login(){
    return(
        <>
        <div className="flex flex-col items-center justify-center">
        <div className="overflow-x-hidden h-full grid grid-cols-1 lg:grid-cols-2 lg:w-4/5 rounded-2xl shadow-2xl mb-1 ">
        <div className="bg-sky-950 flex items-start flex-col justify-center p-10 ">
            <h1 className="text-white text-4xl font-bold mb-4 wrap-none font-ubuntu">welcome to task manager</h1>
            <span className="text-white text-lg font-semibold">organize your tasks and stay on top of your productivity</span>
        </div>
        <div className="flex flex-col gap-5 p-5">
            <h1 className="text-sky-950  text-4xl text-center font-bold font-suse" >log in</h1>
            <Input label="Email" placholder="Enter Your Email" type="email" />
            <Input label="Password" placholder="" type="pasword" />
            <Checkbox label='Remmber Password' id="remmberPassword"/>
            <Buttons label="Log In" color="sky" />
        </div>
        </div>
            <Subtitle page="login"/> 
        </div>
    
        
        </>
    )
}