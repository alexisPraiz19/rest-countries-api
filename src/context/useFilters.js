import { useState, useEffect, use } from "react"
import { FilterContext } from "./FiltersContext"

export function useFilters(countries){
    let   copyCountries = [... countries];
    const [filteredElements, setFilteredElements] = useState(copyCountries);
    const [final, setFinal] = useState();
    const { filters, searchType, setMatches } = use(FilterContext);

    let filteredRegion = filters.region.length > 0 ? copyCountries.filter((country) => { if(filters.region.includes(country.region)) return country }) : copyCountries;
    let toRender;
    
    if(filters.unMember && filters.independent) toRender = filteredRegion.filter(country => country.unMember && country.independent)
    else if(filters.unMember) toRender = filteredRegion.filter(country => country.unMember);
    else if(filters.independent) toRender = filteredRegion.filter(country => country.independent);
    else toRender = filteredRegion;
    let finalrender;

    if(searchType != ""){
        const value = searchType.toLowerCase();
        finalrender = toRender.filter((i) =>{
           let name = i.name.common.toLowerCase();
           let officialName = i.name.official.toLowerCase();
           let region = i.region.toLowerCase();
           let subregion = i.subregion != undefined ? i.subregion.toLowerCase() : "without subregion"

           if(name.includes(value) || officialName.includes(value) || region.includes(value) || subregion.includes(value)) return i
        })
    }else finalrender = toRender;

    useEffect(()=>{
        setFinal(finalrender)
        setMatches(finalrender.length);
        finalrender.length > 0 ? setFilteredElements(finalrender) : setFilteredElements(undefined);
    }, [filters, searchType])

    return { filteredElements }
}