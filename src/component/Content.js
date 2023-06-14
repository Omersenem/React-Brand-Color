import Search from "./Search";
import React, {useContext} from "react";
import MainContext from "../MainContext";
import Brand from "./Brand";
function Content(){
    const {brands}=useContext(MainContext)

    return(
        <main className="content bg-[#f8f8f8]">

         <header className="header">
             <Search/>
         </header>
            <section className=" mt-3 brands">
                {
                       brands.map(brand => (
                           <Brand brand={brand}/>
                       ))
                }

            </section>
        </main>
    )
}
export default Content