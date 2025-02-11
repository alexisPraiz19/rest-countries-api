import { NavLink } from "react-router";
import BgEarth from "../../../assets/BgEarth"

export default function Details({ match, countries }){
    const countryInfo = match[0];

    return(
        <>
            <BgEarth/>
            <div className="details-wrapper">
                <header className="details-header">
                    <figure className="details-header_figure">
                        <img src={countryInfo.flags.png} alt={countryInfo.flag} className="details-header_flagImage"/>
                        <figcaption className="details-header_figcaption">
                            {countryInfo.name.common}
                            <span className="details-header_officialName">{countryInfo.name.official}</span>
                        </figcaption>
                    </figure>

                    <div className="details-header_countryInfo">
                        <div className="details-header_infoContainer">
                            <span>Population</span>
                            <span className="details-header_bar">|</span>
                            <span>{ countryInfo.population.toLocaleString() }</span>
                        </div>
                        
                        <div className="details-header_infoContainer">
                            <span>Area (km²)</span>
                            <span className="details-header_bar">|</span>
                            <span>{ countryInfo.area.toLocaleString() }</span>
                        </div>
                    </div>
                </header>
                
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

                <footer className="details-footer">
                    <h3 className="details-footer_title">Neighbouring Countries</h3>
                    
                    <ul className="details-footer_list">
                        { 
                            countryInfo.borders.map((border) => {
                                const neighbouring = countries.find(country => country.cca3 == border);
                                return (
                                    <li key={border} className="details-footer_listItem">
                                        <figure className="details-footer_figure">
                                            <NavLink to={`/details/${ neighbouring.name.common }`} className="details-footer_link">
                                                <img src={ neighbouring.flags.png } alt={`flag ${ border }`}  className="details-footer_flagImage"/>
                                                <figcaption className="details-footer_figcaption">{ neighbouring.name.common }</figcaption>
                                            </NavLink>
                                        </figure>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <NavLink to="/" className="go-back">Go Back</NavLink>
                </footer>
            </div>
        </>
    )
}