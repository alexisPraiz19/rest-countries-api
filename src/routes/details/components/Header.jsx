export default function Header({ countryInfo }){
    return (
        <header className="details-header">
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
        </header>
    )
}