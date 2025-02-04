import { SortBySelect } from "./toFilters"// Componente de complementación
import { ExpandDown } from "../../../../assets/Icons"

export default function SortBy(){

    return(
        <article className="sort-by">
            <h3 className="sort-by-title">Sort by</h3>

            <div className="sort-by-container-select">
                <SortBySelect/>
                <ExpandDown/>
            </div>
        </article>
    )
}