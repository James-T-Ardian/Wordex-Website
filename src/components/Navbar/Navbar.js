import React from "react"
import "./Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className="logo"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Wordex-Website">W</Link></li>
                <li className="links"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Wordex-Website/synonyms">Synonyms</Link></li>
                <li className="links"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Wordex-Website/antonyms">Antonyms</Link></li>
                <li className="links"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Wordex-Website/rhymes">Rhymes</Link></li>
                <li className="links"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Wordex-Website/examples">Examples</Link></li>
            </ul>
        </div>
    )
}


export default Navbar