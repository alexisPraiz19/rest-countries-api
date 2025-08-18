import { useState, useEffect } from "react"

export function useGetCountries(){
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      if(!loading) return // Para evitar que la petición "fetch" vuelva a ejecutarse cada que el Hook es llamado

      fetch("https://restcountries.com/v3.1/all?fields=name,region,subregion,population,area,flags,independent,unMember,cca3")
      .then(response => response.json())
      .then(response => setCountries(response))
      .finally(()=> setLoading(false))
    }, [])

    return { countries, loading }
}