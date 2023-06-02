function Brand ({brand}){
    return(
        <>
            {brand.map(brand => (

                <div className=" w-full mx-4 mb-2 bg-white border-[1px] border-solid border-[#ddd] p-4 ">

                    <h5 className="mb-2 text-lg font-bold cursor-pointer">{brand.title}</h5>
                   <div className="flex">
                       {
                           brand.colors.map(color =>(
                               <div style={{backgroundColor: `#${color}`}}  className="w-[70px] h-[40px] flex items-center justify-center">
                                   <h5 className="hidden">{color}</h5>
                               </div>
                           ))
                       }
                   </div>

                </div>

            ))}
        </>

    )
}
export default Brand