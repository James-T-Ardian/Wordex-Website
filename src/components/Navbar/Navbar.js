import React from "react"
import "./Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className="logo">W</li>
                <li className="links"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/synonyms">Synonyms</Link></li>
                <li className="links"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/antonyms">Antonyms</Link></li>
                <li className="links"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/rhymes">Rhymes</Link></li>
                <li className="links"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/examples">Examples</Link></li>
            </ul>
        </div>
    )
}


export default Navbar