/---/
// Herramienta React Router
import { NavLink } from "react-router"

// Componentes de complementación
import BgEarth from "../../../assets/BgEarth"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
/---/

export default function Details({ match, countries }){
    const countryInfo = match[0];
    return(
        <>
            <BgEarth/>

            <div className="details-wrapper">
                <Header countryInfo={countryInfo} />
                <Main countryInfo={countryInfo} />
                <Footer countryInfo={countryInfo} countries={countries}/>
            </div>
        </>
    )
}