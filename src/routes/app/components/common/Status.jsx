/---/
import { useContext } from "react"// Herramienta React
import { status } from "../../func/filters"// función para filtrado por "estado del país"
import { FilterContext } from "../../../../context/FiltersContext"// Contexto de filtros
import CheckboxOption from "./CheckboxOption"// Componente de complementación
/---/

export default function Status(){
    const { filters, setFilters } = useContext(FilterContext);

    return(
        <article className="status">
            <h3 className="status-title">Status</h3>

            <CheckboxOption
            labelClass={"status-input-container"}
            inputName={"unMember"}
            inputClass="status-input" text={"Member of the United Nations"}
            onChange={(e) => { setFilters(status(e, filters)) }}
            />

            <CheckboxOption
            labelClass={"status-input-container"}
            inputName={"independent"}
            inputClass={"status-input"} text={"Independent"}
            onChange={(e) => { setFilters(status(e, filters)) }}
            />
        </article>
    )
}