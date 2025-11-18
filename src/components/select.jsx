function  Select(props){
    const {onChange,value,id}=props
    
    return(
        <>
        <label className="text-md  flex flex-col gap-2">
            Priority
            <select id={id} className="p-2 shadow-md border border-stone-200 rounded-md hover:cursor-pointer" value={value} onChange={onChange} >
            <option value="" hidden>Select priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            </select>
        </label>
        </>
    )
}
export default Select