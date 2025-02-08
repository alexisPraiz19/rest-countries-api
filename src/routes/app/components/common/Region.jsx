import { RegionFilterOptions } from "./contextConsumer/toFilters"// Componente de complemetación
import { region } from "../../func/filters"// Función de filtrado por región

export default function Region(){
    return(
        <article className="region">
            <h3 className="region-title">Region</h3>

            <RegionFilterOptions region={region} />
        </article>
    )
}