import "./LandingPage.styles.css"
import React from 'react'
import { Link } from "react-router-dom"

const LandingPage = ()=> {
    return (
        <div className="landing">
            <h1 className="titulo">NationNAV</h1>
            <p>Explora información detallada sobre todos los países del mundo.</p>
            <p>Descubre datos, estadísticas, curiosidades y mucho más.</p>
            <p>¡Viaja a través de culturas, geografías y poblaciones sin salir de tu pantalla!</p>
            <Link to="/home"><button>ENTRAR</button></Link>
        
           
        </div>
    )
}

export default LandingPage