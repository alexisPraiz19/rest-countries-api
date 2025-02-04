// Estableciendo preferencias de filtrado por región
export function region(e, filters){
    const newFilters = { ... filters  };
    const region     = newFilters.region;
    const value      = e.target.value;

    if(!region.includes(value)) region.push(value);
    else{ const toDelete = region.indexOf(value); region.splice(toDelete, 1)  }
    
    return newFilters;
}

// Estableciendo preferencias de filtrado por "estado del país"
export function status(e, filters){
    const newFilters = { ... filters  };
    const isCheck    = e.target.checked;
    
    if(e.target.name == "unMember") newFilters["unMember"] = isCheck;
    else newFilters["independent"] = isCheck;

    return newFilters;
}