import Sidebar from "./component/Sidebar";
import './App.css';
import Content from "./component/Content";
import MainContext from "./MainContext";
import BrandsData from "./brand.json";
import {useEffect, useState} from "react";

function App() {
    const brandsArray =[]
    // eslint-disable-next-line array-callback-return
    Object.keys(BrandsData).map(key => {
        brandsArray.push(BrandsData[key])
    })
    // eslint-disable-next-line no-unused-vars
    const [brands, setBrands] =useState(brandsArray)
    // eslint-disable-next-line no-unused-vars
    const [selectedBrands, setSelectedBrands] =useState([])
    useEffect( () => {
        console.log(selectedBrands)

    },[selectedBrands])
    const data= {
        brands,setSelectedBrands,selectedBrands

    }

  return (
   <>
     <MainContext.Provider value={data}>
         <Sidebar/>
         <Content />
     </MainContext.Provider>
   </>
  );
}

export default App;
