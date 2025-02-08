import { StatusFilterOption } from "./contextConsumer/toFilters"// Componente de complementación
import { status } from "../../func/filters"// Función para filtrado por "estado del país"

export default function Status(){
    return(
        <article className="status">
            <h3 className="status-title">Status</h3>

            <StatusFilterOption status={status}/>
        </article>
    )
}