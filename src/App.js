import Sidebar from "./component/Sidebar";
import './App.css';
import Content from "./component/Content";
import MainContext from "./MainContext";
import './index.scss'
import BrandsData from "./brand.json";
import {useEffect, useState} from "react";
import Copied from "./component/Copied";

function App() {
    const brandsArray =[]
    // eslint-disable-next-line array-callback-return
    Object.keys(BrandsData).map(key => {
        brandsArray.push(BrandsData[key])
    })
    // eslint-disable-next-line no-unused-vars
    const [brands, setBrands] =useState(brandsArray)
    const [copied,setCopied]=useState(false)
    // eslint-disable-next-line no-unused-vars
    const [selectedBrands, setSelectedBrands] =useState([])
    useEffect( () => {
        console.log(selectedBrands)

    },[selectedBrands])
    const data= {
        brands,setSelectedBrands,selectedBrands,setCopied

    }
    useEffect(()=>{
        if(copied){
            setTimeout(()=>{
                setCopied(false)
            },1000)
        }
    },[copied])

  return (
   <>
     <MainContext.Provider value={data}>
         {copied && <Copied color={copied}/>}

         <Sidebar/>
         <Content />
     </MainContext.Provider>
   </>
  );
}

export default App;
