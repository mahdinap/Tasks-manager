export default function Wellcome(props){
    const {name}=props
    return(
        <>
        <div className="flex items-center justify-center"></div>
        <div>
            <h1 className="text-sky-950 text-5xl font-bold border border-sky-950 rounded-3xl py-4 px-40 font-suse">Wellcome Ghazal{name}</h1>
        </div>
        </>
    )
}