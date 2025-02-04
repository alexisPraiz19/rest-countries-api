// Componentes de complementación
import { IconSearch } from "../../../assets/Icons"
import { SearchTitle, InputSearch } from "./common/toSearch"

export default function Search(){
    return(
        <div className="search">
            <SearchTitle/>

            <label className="search-input-container">
                <IconSearch/>
                <InputSearch/>
            </label>
        </div>
    )
}