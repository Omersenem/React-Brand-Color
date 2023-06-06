import {getContrastYIQ} from "../helpers";
import MainContext from "../MainContext";
import {useContext} from "react";

function Brand ({brand}){
    const {setSelectedBrands,selectedBrands} = useContext(MainContext)
    const toogleSelected = () =>{
        if(selectedBrands.includes(brand.slug)){
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        }else{
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }
    return(
                <div  className={`brands ${selectedBrands.includes(brand.slug) ? 'select' : ''}`}>

                    <h5 onClick={toogleSelected} className="mb-2 text-lg font-bold cursor-pointer ">{brand.title}</h5>
                   <div className="flex">
                       {
                           brand.colors.map((color,index) =>(
                               <div key={index} style={{'--bgColor': `#${color}`, '--textColor':`${getContrastYIQ(color)}` }}  className="brand">
                                   <h5 className="">{color}</h5>
                               </div>
                           ))
                       }
                   </div>

                </div>

    )
}
export default Brand