/---/
import { useState, useEffect, use } from "react"
import { FilterContext } from "../FiltersContext"
import { filterRegion, filterStatus, filterType, sortCountries } from "../func/filterFunctions"
/---/

export function useFilters(countries){
    const [ filteredElements, setFilteredElements] = useState(countries);
    const { filters, setMatches } = use(FilterContext);
    
    // Los elementos que se reenderizaran, habrán pasado por cada filtro para mantener la coordinación entre todos los filtros
    // Los filtros dependen uno del otro para entregar los elementos más precisos posibles
    const filteredRegion = filterRegion(filters, countries);
    const filteredStatus = filterStatus(filters, filteredRegion);
    const filteredType   = filterType(filters.type.toLowerCase(), filteredStatus);

    // Una vez filtrado los países, el ultimo paso es ordenarlos
    const elements = sortCountries(filters.sortBy, filteredType);

    useEffect(()=>{
        const length = elements.length;
        setMatches(length);
        
        length > 0  
        ?  setFilteredElements(elements) 
        :  setFilteredElements(undefined);
    }, [filters])

    return { filteredElements }
}