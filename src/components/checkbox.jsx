export default function Checkbox(props){
    const{label,id,name,checked,onChange}=props
    return(
        <>
        <div className="flex items-center gap-1"> 
            <input type='checkbox' id={id} name={name} onChange={onChange} checked={checked}/>
            <label htmlFor="">{label}</label>
        </div>
        </>
    )
}