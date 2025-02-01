/---/
import { use } from "react"
import { DataCountries } from "../../../context/DataCountries"

// Componentes de complementación
import TableItem from "./common/TableItem"
import Loading from "./common/Loading"
/---/

export default function CountryTable(){
    const { countries, loading } = use(DataCountries);

    return(
        <table className="country-table">
            <thead className="country-table-thead">
                <tr className="country-table-thead_tr">
                    <th className="country-table-thead_th">Flag</th>
                    <th className="country-table-thead_th">Name</th>
                    <th className="country-table-thead_th">Population</th>
                    <th className="country-table-thead_th">Area (km²)</th>
                    <th className="country-table-thead_th">Region</th>
                </tr>
            </thead>

            <tbody className="country-table-tbody">
                {
                    loading ?  <Loading/> 
                    : <TableItem countries={countries}/>
                }
            </tbody>
        </table>
    )
}