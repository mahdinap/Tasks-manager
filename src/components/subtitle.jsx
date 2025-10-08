export default function Subtitle(prop){
    const {page}=prop;
    return(
        <>
        <div className="mt-3 mb-3" >
            <p className="flex gap-1">
                {page==="login"?"Dont have an account?":"Already have an account?"}
                <a className="underline text-sky-600" href={page==="login"?"../signup":"../login"}>
                    {page==="login"?"signup":"login"}
                </a>
            </p>
        </div>
        </>
    )
}