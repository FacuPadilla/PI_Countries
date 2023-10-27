import "./Card.styles.css"
import {Link} from 'react-router-dom'

const Card = (props)=> {
    if (props.name && props.bandera){
    
    return (
        
        <div className="card-container">
            <div>
            <h1>  {props.name}</h1>
            </div>
            <div className="bandera">
            <figure><img src={props.bandera} alt="" width="300" height="200" /></figure>
            </div>
            <div>
                <h2>continente: {props.continente}</h2>
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