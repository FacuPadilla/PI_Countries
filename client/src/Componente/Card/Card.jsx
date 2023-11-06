import "./Card.styles.css"
import {Link} from 'react-router-dom'

const Card = (props)=> {
    if (props.name && props.bandera){
    
    return (
        
        <div className="card-container">
            <div>
            <h1>  {props.name}</h1>
            </div>
            <div>
            <img src={props.bandera} alt="" width="300" height="200" />
            </div>
            <div>
                <h2>Continente: {props.continente}</h2>
            </div>
            <div>
            <Link to={`/detail/${props.id}`}>
            <button className="DETALLESS">Ver Detalles</button>
            </Link>
            </div>
            
        </div>
    )}
}

export default Card