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
        <main className="content">

         <header className="header">
             <Search/>
         </header>
            <section className="brands">
                {
                    brands.map(brand => (

                        <Brand brand={brand.title}/>
                    ))
                }

            </section>
        </main>
    )
}
export default Content