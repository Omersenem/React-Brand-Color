import Search from "./Search";
import BrandsData from "../brand.json"
import React, {useState} from "react";
import Brand from "./Brand";
function Content(){
    const brandsArray =[]
    // eslint-disable-next-line array-callback-return
    Object.keys(BrandsData).map(key => {
        brandsArray.push(BrandsData[key])
    })
   const [brands, setBrands] =useState(brandsArray)
    return(
        <main className="content bg-[#f8f8f8]">

         <header className="header">
             <Search/>
         </header>
            <section className="brands mt-3">
                {
                        <Brand brand={brands}/>
                }

            </section>
        </main>
    )
}
export default Content