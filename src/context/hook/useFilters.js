/---/
import { useState, useEffect, use } from "react"
import { FilterContext } from "../FiltersContext"
import { filterRegionAndStatus, filterByType, sortCountries } from "../func/filterFunctions"
/---/

export function useFilters(countries){
    const [ filteredElements, setFilteredElements] = useState(countries);
    const { filters, setMatches } = use(FilterContext);
    
    // Los elementos que se reenderizaran, habrán pasado por cada filtro para mantener la coordinación entre todos los filtros
    // Los filtros dependen uno del otro para entregar los elementos más precisos posibles
    const filteredRegionAndStatus = filterRegionAndStatus(filters, countries);
    const filteredByType          = filterByType(filters.type.toLowerCase(), filteredRegionAndStatus);

    // Una vez filtrado los países, el ultimo paso es ordenarlos
    const elements = sortCountries(filters.sortBy, filteredByType);
    
    useEffect(()=>{
        const length = elements.length;
        setMatches(length);
        
        length > 0
        ?  setFilteredElements(elements) 
        :  setFilteredElements(undefined);
    }, [filters])

    return { filteredElements }
}