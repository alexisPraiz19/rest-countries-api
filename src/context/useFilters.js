import { useState, useEffect, use } from "react"
import { FilterContext } from "./FiltersContext"

// Filtrado por región
function filterRegion(filters, copyCountries){
    //Retorna array de paises cuya región coincida con alguno del array de regiones proporcionado por "filters"
    if(filters.region.length > 0 ) return copyCountries.filter(country => filters.region.includes(country.region));
    
    return copyCountries
}

// Filtrado por "estado del país"
function filterStatus(filters, filteredRegion){
    if(filters.unMember && filters.independent) return filteredRegion.filter(country => country.unMember && country.independent)
    else if(filters.unMember) return filteredRegion.filter(country => country.unMember);
    else if(filters.independent) return filteredRegion.filter(country => country.independent);

    return filteredRegion
}

// Filtrado por "tipado"/escritura
function filterType(searchType, filteredByStatus){
    const value = searchType.toLowerCase();

    if(value != ""){
        return filteredByStatus.filter(country => {
            let name = country.name.common.toLowerCase();
            let officialName = country.name.official.toLowerCase();
            let region = country.region.toLowerCase();
            let subregion = country.subregion != undefined ? country.subregion.toLowerCase() : "without subregion"

            if(name.includes(value) 
            || officialName.includes(value) 
            || region.includes(value) 
            || subregion.includes(value)) return country
        })
    }
    
    return filteredByStatus
}

// Ordenar paises según opción seleccionada
function sortCountries(filters, filteredByType){
    if(filters.sortBy == "population") return filteredByType.sort((a,b) => b.population - a.population );
    else if(filters.sortBy == "alphabet"){
        return filteredByType.sort((a, b) => {
            if (a.name.common < b.name.common) return -1;
            if (a.name.common > b.common) return 1;
            return 0;
        });
    }
    else return filteredByType.sort((a,b) => a.area - b.area )
}

// Hook - función más importante a exportar
export function useFilters(countries){
    let   copyCountries = [... countries];
    const [filteredElements, setFilteredElements] = useState(copyCountries);
    const { filters, searchType, setMatches } = use(FilterContext);

    const filteredRegion   = filterRegion(filters, copyCountries);
    const filteredByStatus = filterStatus(filters, filteredRegion);
    const filteredByType   = filterType(searchType, filteredByStatus);
    const toRender         = sortCountries(filters, filteredByType);

    useEffect(()=>{
        setMatches(toRender.length);
        toRender.length > 0 ? setFilteredElements(toRender) : setFilteredElements(undefined);
    }, [filters, searchType])

    return { filteredElements }
}