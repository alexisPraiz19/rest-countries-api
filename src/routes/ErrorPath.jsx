import { NavLink } from "react-router"

export default function ErrorPath(){
    return(
        <>
            <h1>Path invalido</h1>
            <NavLink to="/">Regrese</NavLink>
        </>
    )
}