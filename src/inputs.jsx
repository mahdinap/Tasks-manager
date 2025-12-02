import { forwardRef } from "react"

const Input=forwardRef ((props,ref)=>{
    const {placholder,type,label,name,id,className,...res}=props
    return(
        <>
        <label>{label}</label>
        <input type={type} placeholder={placholder}  name={name}  id={id} ref={ref} {...res} required
        className={className}/>
        </>
    )

})
export default Input