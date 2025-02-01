/---/
import { use } from "react"// Herramienta React
import { FilterContext } from "../../../../context/FiltersContext"// Consumo de contexto
import { ExpandDown } from "../../../../assets/Icons"
/---/

export default function SortBy(){
    const { setFilters } = use(FilterContext);

    return(
        <article className="sort-by">
            <h3 className="sort-by-title">Sort by</h3>

            <div className="sort-by-container-select">
                <select className="sort-by-select" name="sort-by-select" onChange={(e) => { setFilters(prev => ({... prev, sortBy: e.target.value})) }}>
                    <option value="population" className="sort-by-select_option">Population</option>
                    <option value="alphabet" className="sort-by-select_option">Alphabet</option>
                    <option value="area" className="sort-by-select_option">Area</option>
                </select>

                <ExpandDown/>
            </div>
        </article>
    )
}