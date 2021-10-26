import React from "react"
import "./Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <Link to="/synonyms">Synonyms</Link>
                <Link to="/antonyms">Antonyms</Link>
                <Link to="/rhymes">Rhymes</Link>
                <Link to="/examples">Examples</Link>
            </ul>
        </nav>
    )
}


export default Navbar