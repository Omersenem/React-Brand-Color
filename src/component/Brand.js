import {getContrastYIQ} from "../helpers";
import MainContext from "../MainContext";
import {useContext} from "react";
import ClipboardButton from "react-clipboard.js";

function Brand({brand}) {
    const {setSelectedBrands, selectedBrands,setCopied} = useContext(MainContext)
    const toogleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }

    const setColor = (color)=>{
        setCopied(color)

    }
    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>

            <h5 onClick={toogleSelected} className="mb-2 text-lg font-bold cursor-pointer ">{brand.title}</h5>
            <div className="brand-colors">
                {
                    brand.colors.map((color,key) => (

                        <ClipboardButton key={key} data-clipboard-text={color}
                                         onSuccess={() => setColor(color)}
                                         component="span"
                                         style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="svg-copy"

                            >
                                <path d="M502.6 70.63L441.35 9.38C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.02 256c.88 35.4 29.58 64 64.88 64h192c35.2 0 64-28.8 64-64V93.25c0-8.48-3.4-16.62-9.4-22.62zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16V64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1v192zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16l.88-255.9c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64L0 448c.002 35.3 28.66 64 64 64h192c35.2 0 64-28.8 64-64v-32h-47.1l-.9 32z" />
                            </svg>
                            {color}
                        </ClipboardButton>
                    ))
                }
            </div>
        </div>

    )
}

export default Brand