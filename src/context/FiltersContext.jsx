import { createContext, use, useState } from "react"

export const FilterContext = createContext({});

export default function FilterContextProvider({children}){
    const [matches, setMatches] = useState("250");
    const [filters, setFilters] = useState({
        type: "",
        sortBy: "population",
        region: [],
        unMember: false,
        independent: false
    })

    return(
        <FilterContext.Provider value={{
            filters, setFilters,
            matches, setMatches
        }}>
            { children }
        </FilterContext.Provider>
    )
}