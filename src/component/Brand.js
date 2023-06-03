import {getContrastYIQ} from "../helpers";

function Brand ({brand}){
    return(
        <>
            {brand.map(brand => (

                <div className=" w-full mx-4 mb-2 bg-white border-[1px] border-solid border-[#ddd] p-4 ">

                    <h5 className="mb-2 text-lg font-bold cursor-pointer">{brand.title}</h5>
                   <div className="flex">
                       {
                           brand.colors.map(color =>(
                               <div style={{'--bgColor': `#${color}`, '--textColor':`${getContrastYIQ(color)}` }}  className="brand ">
                                   <h5 className="">{color}</h5>
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