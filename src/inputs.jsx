export default function Input(prop){
    const {placholder,type,label,value,name,onChange,id}=prop
    return(
        <>
        <label>{label}</label>
        <input type={type} placeholder={placholder} value={value} name={name} onChange={onChange} id={id}
        className="p-2 shadow-md rounded-md"/>
        </>
    )

}