const colormap={
    sky:"bg-sky-950 hover:bg-sky-900",
    amber:"bg-amber-500 hover:bg-amber-600"
}
export default function Buttons(prop){
    const {label,color,onClick,className}=prop
    const colorbg=colormap[color]
    return(
        <>
        <button onClick={onClick} className={className}>{label}</button>
        </>
    )
}