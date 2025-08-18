import { NavLink } from "react-router"

export default function ErrorPath(){
    return(
        <div className="errorPath">
            <h1>Country not found or <span>error</span> in the URL</h1>
            <NavLink to="/">Go Back</NavLink>
        </div>
    )
}