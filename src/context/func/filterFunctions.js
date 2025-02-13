export function filterRegionAndStatus(filters, countries){
    // Si el <array de regiones> es distinto a 0 : retorna array de paises cuya región coincida con alguno 
    // del <array de regiones> proporcionado por el estado de "filters", de lo contrario, la variable
    // es igual a un array con todos los paises del mundo
    let region = filters.region.length > 0 ? countries.filter(country => filters.region.includes(country.region)) : countries;

    // Valida el estado de paises según el "checkbox" activo y retorna los paises que coincidan
    // con los filtros de estado. Si ningún "checkbox" está activo, entonces el "estado"
    // se considera nullo y por defecto es igual a paises filtrados por región
    let status = filters.unMember && filters.independent 
        ? region.filter(country => country.unMember && country.independent) 
        : filters.unMember ? region.filter(country => country.unMember)
        : filters.independent ? region.filter(country => country.independent)
        : region;

    return status
}

export function filterByType(searchInput, countries){
    // Retorna array de paises cuyo Nombre, Region, o Subregion coincida con lo escrito en el input de búsqueda
    if(searchInput != "") 
        return countries.filter(country => {
            let name = country.name.common.toLowerCase();
            let officialName = country.name.official.toLowerCase();
            let region = country.region.toLowerCase();
            let subregion = country.subregion != undefined ? country.subregion.toLowerCase() : "without subregion"

            if(name.includes(searchInput) 
            || officialName.includes(searchInput) 
            || region.includes(searchInput) 
            || subregion.includes(searchInput)) return country
        })
    
    return countries
}

// Ordenar paises según opción seleccionada
export function sortCountries(sortBy, countries){
    switch(sortBy){
        case "population": return countries.sort((a,b) => b.population - a.population); break;
        case "alphabet": 
            return countries.sort((a, b) => {
                if(a.name.common < b.name.common) return -1;
                if(a.name.common > b.common) return 1;
                return 0;
            }); 
        break;
        default: return countries.sort((a,b) => b.area - a.area);
    }
}