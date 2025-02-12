/---/
// Herramientas React
import { use } from "react"
import { useParams } from "react-router"
import { DataCountries } from "../../context/DataCountries"

// Componentes de complementación
import Details from "./components/Details"
import ErrorPath from "../ErrorPath"
/---/

export default function DetailsPage(){
    const { countryName } = useParams();
    const { countries }   = use(DataCountries);
    const match = countries.filter(country => country.name.common == countryName);
    
    return(
        match.length != 0 ? <Details match={match} countries={countries}/> : <ErrorPath/>
    )
}