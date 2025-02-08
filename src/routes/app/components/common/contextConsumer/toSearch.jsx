import { use } from "react"
import { FilterContext } from "../../../../../context/FiltersContext"

export function SearchTitle(){
    const { matches } = use(FilterContext);
    return (<h2 className="search-title">Found { matches } countries</h2>)
}

export function InputSearch(){
    const { setFilters } = use(FilterContext);
    return ( <input type="search" name="search-by-type" className="search-input" placeholder="Search by Name, Region, Subregion" onChange={(e) => setFilters(prev => ({...prev, type: e.target.value}))}/>)
}