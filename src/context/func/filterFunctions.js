// Filtrado por región
export function filterRegion(filters, countries){
    // Retorna array de paises cuya región coincida con alguno 
    // del <array de regiones> proporcionado por el estado de "filters"
    if(filters.region.length > 0) return countries.filter(country => filters.region.includes(country.region));

    return countries
}

// Filtrado por "estado" del país
export function filterStatus(filters, countries){
    if(filters.unMember && filters.independent) return countries.filter(country => country.unMember && country.independent)
    else if(filters.unMember) return countries.filter(country => country.unMember);
    else if(filters.independent) return countries.filter(country => country.independent);

    return countries
}

// Filtrado por "tipado"/escritura
export function filterType(value, countries){
    // Retorna array de paises cuyo Nombre, Region, o Subregion coincida con lo escrito en el input de búsqueda
    if(value != "") return countries.filter(country => {
        let name = country.name.common.toLowerCase();
        let officialName = country.name.official.toLowerCase();
        let region = country.region.toLowerCase();
        let subregion = country.subregion != undefined ? country.subregion.toLowerCase() : "without subregion"

        if(name.includes(value) 
        || officialName.includes(value) 
        || region.includes(value) 
        || subregion.includes(value)) return country 
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
        default: return countries.sort((a,b) => a.area - b.area);
    }
}