export default function Checkbox(props){
    const{label,id}=props
    return(
        <>
        <div className="flex items-center gap-1"> 
            <input type="checkbox" id={id} />
            <label htmlFor="">{label}</label>
        </div>
        </>
    )
}