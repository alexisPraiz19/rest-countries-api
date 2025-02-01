/---/
import { use } from "react"
import { IconSearch } from "../../../assets/Icons"
import { FilterContext } from "../../../context/FiltersContext"
/---/

export default function Search(){
    const { matches, setSearchType } = use(FilterContext);

    return(
        <div className="search">
            <h2 className="search-title">Found { matches } countries</h2>

            <label className="search-input-container">
                <IconSearch/>
                <input type="search" name="search-by-type" className="search-input" placeholder="Search by Name, Region, Subregion" onChange={(e) => setSearchType(e.target.value)}/>
            </label>
        </div>
    )
}