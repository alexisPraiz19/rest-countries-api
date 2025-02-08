import { useFilters } from "../../../../context/hook/useFilters"
import NotFoundCountries from "./NotFoundCountires";

export default function TableItem({ countries }){
    const { filteredElements } = useFilters(countries);

    return(
        <>
        {   
            filteredElements != undefined ? 
            filteredElements.map(({ cca3, name, flag, flags, population, area, region }) => (
                    <tr className="country-table-tbody_tr" key={cca3}>
                        <td className="country-table-tbody_td">
                            <img src={flags.png} alt={flag} className="country-table-tbody_flag"/>
                        </td>
                        <td className="country-table-tbody_td">{ name.common }</td>
                        <td className="country-table-tbody_td">{ population }</td>
                        <td className="country-table-tbody_td">{ area }</td>
                        <td className="country-table-tbody_td">{ region }</td>
                    </tr>
                )
            )
            : <NotFoundCountries/>
        }
        </>
    )
}