import "./Detail.styles.css"
import { useEffect, useState } from "react";
import { useParams, useHistory} from "react-router-dom";
import axios from "axios";

const Detail = ()=> {

    //aqui tuve q usar useHistory q hace casi lo mismo q useNavigate pero estoy con una version mas vieja de react-router-dom
const history = useHistory()
const GoBack = () => {
  history.goBack()
}
  //useParams para obtener el id de la url de detail
  const { id } = useParams();
  //Creo un Estado
  const [country, setCountry] = useState({});
  //Este efecto se ejecutata cada vez q el estado character cambie(osea el dog) para obtener el dog q quiero
  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(
      ({ data }) => {
        if (data.name) {
            setCountry(data);
        } else {
          window.alert("No hay pais con ese ID");
        }
      }
    );
    return setCountry({});
  }, [id]);

    
    return(
        <div>
            <h1 className="h1"> Estas en el detalle de {country.name}</h1>
            <div className="container">
            <div className="divs">
        <h2>
          ID: {country.id}
        </h2>
        <h2>Nombre: {country.name}</h2>
        </div>
        <img src={country.bandera} alt="" ></img>
        <br></br>
        <h2>Capital: {country.capital}</h2>
        <h2>Continente: {country.continente}</h2>
        <h2>Subregion: {country.subregion}</h2>
        <h2>Area: {country.area}</h2>
        <h2> Poblacion: {country.poblacion}</h2>
            <button className="btn" onClick={GoBack}>Volver</button>
            </div>
        </div>

    )
}

export default Detail