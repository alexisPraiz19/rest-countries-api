/---/
// Herramientas React
import { use, useEffect, useState } from "react"
import { useParams } from "react-router"
import { DataCountries } from "../../context/DataCountries"
import { useGetCountries } from "../../context/hook/useGetCountries"

// Componentes de complementación
import Details from "./components/Details"
import ErrorPath from "../ErrorPath"
/---/

export default function DetailsPage(){
    const { countryName } = useParams();
    const { countries }   = useGetCountries();
    const [match, setMatch] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/alpha/${countryName}?fullText=true`)
        .then(response => {
            if (!response.ok) {
                setError(true);
                return;
            };
            return response.json();
        })
        .then(res => setMatch(res))
        .finally(() => setLoading(false))
    }, [countryName])

    if(loading) return <div className="details-loading">
        <h2>Loading country...</h2>
    </div>
    
    return(
        <>
            { error == null 
              ? ( <Details match={match} countries={countries} /> ) 
              : ( <ErrorPath/> )
            }
        </>
    )
}