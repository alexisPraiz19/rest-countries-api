// Componentes de complementación
import Search from "./Search"
import Filters from "./Filters"
import ContentWrapper from "./ContentWrapper"

import FilterContextProvider from "../../../context/FiltersContext"

export default function Main(){
    return(
        <FilterContextProvider>
            <main className="main">
                <Search/>
                <Filters/>
                <ContentWrapper/>
            </main>
        </FilterContextProvider>
    )
}