const colormap={
    sky:"bg-sky-950 hover:bg-sky-900",
    amber:"bg-amber-500 hover:bg-amber-600"
}
export default function Buttons(prop){
    const {label,color}=prop
    const colorbg=colormap[color]
    return(
        <>
        <button className={`${colorbg} rounded-lg shadow-md font-semibold transition-all duration-200 py-2 px-5 text-white active:scale-100 `}>{label}</button>
        </>
    )
}