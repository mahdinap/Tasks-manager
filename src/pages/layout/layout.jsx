export default function Layout({children}){

    return(
        <div className="bg-gray-100 min-h-screen w-full flex justify-center items-center p-4">
      <div className="container bg-white w-full md:w-4/5 rounded-xl p-6 shadow-sm">
        {children}
      </div>
    </div>
    )
}