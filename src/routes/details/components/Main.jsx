export default function Main({ countryInfo }){
    return(
        <main className="details-main">
            <ul className="details-main_list">
                <li className="details-main_listItem">
                    <span>Capital</span>
                    <span>{ countryInfo.capital.map(capitalName => capitalName) }</span>
                </li>

                <li className="details-main_listItem">
                    <span>Subregion</span>
                    <span>{ countryInfo.subregion }</span>
                </li>

                <li className="details-main_listItem">
                    <span>Language</span>
                    <span>{ Object.values(countryInfo.languages).join(", ") }</span>
                </li>

                <li className="details-main_listItem">
                    <span>Currencies</span>
                    <span>{ Object.values(countryInfo.currencies).map(i => i.name).join(", ") }</span>
                 </li>

                <li className="details-main_listItem">
                    <span>Continents</span>
                    <span>{ countryInfo.continents.map(i => i).join(", ") }</span>
                </li>
            </ul>
        </main>
    )
}