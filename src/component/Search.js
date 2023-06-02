import {GrSearch} from "react-icons/gr";

function Search(){
    return(
        <div className="search">
            <div className="icon w-[60px] h-full flex items-center ml-5  absolute top-0 left-0"><GrSearch/></div>
            <input className="search-input " type="text" placeholder="Search Brands"/>
        </div>
    )
}

export default Search