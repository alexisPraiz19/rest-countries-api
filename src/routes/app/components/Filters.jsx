// Componentes de complementación
import SortBy from "./common/SortBy"
import Region from "./common/Region"
import Status from "./common/Status"

export default function Filters(){
    return(
        <aside className="filters">
            <SortBy/>
            <Region/>
            <Status/>
        </aside>
    )
}