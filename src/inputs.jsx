export default function Input(prop){
    const {placholder,type,label}=prop
    return(
        <>
        <label>{label}</label>
        <input type={type} placeholder={placholder}
        className="p-2 shadow-md rounded-md"/>
        </>
    )

}