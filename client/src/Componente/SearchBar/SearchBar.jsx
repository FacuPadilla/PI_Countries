import "./SearchBar.styles.css"
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getCountrybyName, getCountries } from "../../redux/actions";
import {Link} from "react-router-dom"


const SearchBar = ()=> {

    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const Country = useSelector((state)=> state.allCountries)
    //actualizo el estado local de forma dinamica
  const handleChange = (event)=> {
    event.preventDefault();

    let input = event.target.value;

    setName(input)
  }
 //funcion para mi boton buscar utilizando el dipsatch para traer mi funcion del store
  //función onSearch, utilizo el valor actualizado de name (el valor del input) al hacer la búsqueda de perros por nombre:
  const onSearch =  ()=> {
    dispatch(getCountrybyName(name))

    
    
     
  }
//funcion para mi boton para q reinicie el estado global y me devuelva todso los paises
  const reset = ()=> {
    dispatch(getCountries())
  }
 


    return (
        <div className="searchbars">
            
                <input className="botonees" placeholder="Busqueda" type="text" value={name} onChange={handleChange}/>
                <button onClick={onSearch} className="botonee">Buscar</button>
                <button onClick={reset} className="botonee">Reset</button>
                <Link to="/form">
                  <button className="botonee">Crear Actividad</button>
                </Link>

                
            
        </div>
        
    )

}
export default SearchBar