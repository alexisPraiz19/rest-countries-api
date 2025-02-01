/---/
import { use } from "react"
import { FilterContext } from "../../../../context/FiltersContext"
import { region } from "../../func/filters"// Función de filtrado por región
import CheckboxOption from "./CheckboxOption"// Componente de complementación
/---/

export default function Region(){
    const { filters, setFilters } = use(FilterContext);

    return(
        <article className="region">
            <h3 className="region-title">Region</h3>

            <CheckboxOption
            labelClass="region-input-container"
            inputName="americas"
            inputClass="region-input" text="Americas"
            onChange={(e) => { setFilters(region(e, filters)) }}
            />

            <CheckboxOption
            labelClass="region-input-container" 
            inputName="antartic" 
            inputClass="region-input" text="Antarctic"
            onChange={(e) => { setFilters(region(e, filters)) }}
            />

            <CheckboxOption
            labelClass="region-input-container" 
            inputName="africa" 
            inputClass="region-input" text="Africa"
            onChange={(e) => { setFilters(region(e, filters)) }}
            />

            <CheckboxOption
            labelClass="region-input-container" 
            inputName="asia" 
            inputClass="region-input" text="Asia"
            onChange={(e) => { setFilters(region(e, filters)) }}
            />

            <CheckboxOption
            labelClass="region-input-container"
            inputName="europe"
            inputClass="region-input" text="Europe"
            onChange={(e) => { setFilters(region(e, filters)) }}
            />

            <CheckboxOption
            labelClass="region-input-container" 
            inputName="oceania"
            inputClass="region-input" text="Oceania"
            onChange={(e) => { setFilters(region(e, filters)) }}
            />
        </article>
    )
}