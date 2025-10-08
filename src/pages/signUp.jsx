import Buttons from "../components/buttons";
import Subtitle from "../components/subtitle";
import Input from "../inputs";

export default function SingUp(){
    return(
        <>
        <div className="flex flex-col items-center justify-center ">
        <div className="overflow-x-hidden grid grid-cols-1 lg:grid-cols-2 lg:w-4/5 rounded-2xl shadow-2xl mb-1">
        <div className="bg-sky-950 flex lg:items-start flex-col justify-center p-10 items-center">
            <h1 className="text-white text-4xl font-bold mb-4 wrap-none font-ubuntu">welcome to task manager</h1>
            <span className="text-white text-lg font-semibold">organize your tasks and stay on top of your productivity</span>
        </div>
        <div className="flex flex-col gap-5 p-5">
            <h1 className="text-sky-950 text-4xl text-center font-bold font-suse ">Sign Up</h1>
            <Input label="User Name" placholder="Enter Your User Name" type="text" />
            <Input label="Email" placholder="Enter Your User Email" type="email" />
            <Input label="Password" placholder="" type="pasword" />
            <Buttons label="Sign Up" color="sky" />
        </div>

        </div>
        <Subtitle page="signup"/>

        </div>
        </>
    )
}