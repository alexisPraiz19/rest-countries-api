/---/
import { use } from "react"
import { FilterContext } from "../../../../context/FiltersContext"
import CheckboxOption from "./CheckboxOption"
/---/

// Componente con optiones de orneamiento
export function SortBySelect(){
    const { setFilters } = use(FilterContext);

    return(
        <select className="sort-by-select" name="sort-by-select" onChange={(e) => { setFilters(prev => ({... prev, sortBy: e.target.value})) }}>
            <option value = "population" className="sort-by-select_option">Population</option>
            <option value = "alphabet" className="sort-by-select_option">Alphabet</option>
            <option value = "area" className="sort-by-select_option">Area</option>
        </select>
    )
}

// Componente con opciones de filtrado según Region seleccionada
export function RegionFilterOptions({ region }){
    const { setFilters, filters } = use(FilterContext);

    return(
        <>
            <CheckboxOption
            labelClass = "region-input-container"
            inputName  = "americas"
            inputClass = "region-input" text="Americas"
            onChange   = { e => setFilters(region(e, filters)) }
            />
            
            <CheckboxOption
            labelClass = "region-input-container" 
            inputName  = "antartic" 
            inputClass = "region-input" text="Antarctic"
            onChange   = { e => setFilters(region(e, filters)) }
            />
            
            <CheckboxOption
            labelClass = "region-input-container" 
            inputName  = "africa" 
            inputClass = "region-input" text="Africa"
            onChange   = { e => setFilters(region(e, filters)) }
            />
            
            <CheckboxOption
            labelClass = "region-input-container" 
            inputName  = "asia" 
            inputClass = "region-input" text="Asia"
            onChange   = { e => setFilters(region(e, filters)) }
            />
            
            <CheckboxOption
            labelClass = "region-input-container"
            inputName  = "europe"
            inputClass = "region-input" text="Europe"
            onChange   = { e => setFilters(region(e, filters)) }
            />
            
            <CheckboxOption
            labelClass = "region-input-container" 
            inputName  = "oceania"
            inputClass = "region-input" text="Oceania"
            onChange   = { e => setFilters(region(e, filters)) }
            />
        </>
    )
}

// Componente con opciones de filtrado según el "estado del país"
export function StatusFilterOption({ status }){
    const { filters, setFilters } = use(FilterContext);

    return(
        <>
            <CheckboxOption
            labelClass = "status-input-container"
            inputName  = "unMember"
            inputClass = "status-input" 
            text       = "Member of the United Nations"
            onChange   = { e => setFilters(status(e, filters)) }
            />
        
            <CheckboxOption
            labelClass = "status-input-container"
            inputName  = "independent"
            inputClass = "status-input" ç
            text       = "Independent"
            onChange   = { e => setFilters(status(e, filters)) }
            />
        </>
    )
}