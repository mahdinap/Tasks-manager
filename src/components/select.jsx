function  Select(props){
    const {placholder}=props
    
    return(
        <>
        <label className="text-md  flex flex-col gap-2">
            Priority
            <select className="p-2 shadow-md border border-stone-200 rounded-md hover:cursor-pointer" >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            </select>
        </label>
        </>
    )
}
export default Select