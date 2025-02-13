export default function NotFoundCountries(){
    return(
        <tr>
            <td style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>
                No countries found
                <img src="/images/no-found.gif" alt="no found countries image" style={{width: "clamp(230px, 100%, 330px)"}}/>
            </td>
        </tr>
    )
}