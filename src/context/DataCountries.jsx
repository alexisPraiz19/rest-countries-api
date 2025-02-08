import { createContext } from "react"// Herramienta React
import { useGetCountries } from "./hook/useGetCountries"// Custom Hook

// Creación del contexto
export const DataCountries = createContext({});

export default function DataCountriesProvider({children}){
    const { countries, loading } = useGetCountries();

    return(
        <DataCountries.Provider value={{ countries, loading }}>
            { children }
        </DataCountries.Provider>
    )
}