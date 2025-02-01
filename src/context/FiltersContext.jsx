import { createContext, use, useState } from "react"

export const FilterContext = createContext({});

export default function FilterContextProvider({children}){
    const [matches, setMatches] = useState("250");
    const [searchType, setSearchType] = useState("");
    const [filters, setFilters] = useState({
        sortBy: "population",
        region: [],
        unMember: false,
        independent: false
    })

    const value = {
        filters,
        setFilters,
        matches,
        setMatches,
        searchType, 
        setSearchType
    }

    return(
        <FilterContext.Provider value={value}>
            { children }
        </FilterContext.Provider>
    )
}