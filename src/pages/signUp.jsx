import Buttons from "../components/buttons";
import Input from "../inputs";

export default function SingUp(){
    return(
        <>
        <div className="main-container container mx-auto grid grid-cols-1 lg:grid-cols-2 w-2/3 rounded-2xl shadow-2xl mt-5 lg:mt-20 ">
        <div className="bg-sky-950 flex items-start flex-col justify-center p-10 ">
            <h1 className="text-white">welcome to task manager</h1>
            <span className="text-white">organize your tasks and stay on top of your productivity</span>
            </div>
        <div className="flex flex-col gap-5 p-5">
            <h1 className="text-sky-950">sign up</h1>
            <Input label="User Name" placholder="Enter Your User Name" type="text" />
            <Input label="Email" placholder="Enter Your User Email" type="email" />
            <Input label="Password" placholder="" type="pasword" />
            <Buttons label="Sign Up" color="sky" />
        </div>

        </div>
        </>
    )
}