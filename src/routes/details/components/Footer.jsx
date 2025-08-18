import { NavLink } from "react-router"

export default function Footer({ countryInfo, countries }){
    return(
        <footer className="details-footer">
            <h3 className="details-footer_title">{ countryInfo.borders ? "Neighbouring Countries" : "No neighbouring countries" }</h3>
            
            <ul className="details-footer_list">
                { 
                    countryInfo.borders?.map(border => {
                        const neighbouring = countries.find(country => country.cca3 == border);
                        
                        return (
                            <li key={border} className="details-footer_listItem">
                                <figure className="details-footer_figure">
                                    <NavLink to={`/details/${ neighbouring.cca3 }`} className="details-footer_link" title="go to detail of neighbouring country">
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
    )
}