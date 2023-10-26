import "./LandingPage.styles.css"
import React from 'react'
import { Link } from "react-router-dom"

const LandingPage = ()=> {
    return (
        <div className="landing">
            <h1> Soy la landinggg</h1>
            <Link to="/home"><button>ENTRAR</button></Link>
        
           
        </div>
    )
}

export default LandingPage