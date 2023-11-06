import "./Form.styles.css"
import {useHistory} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import {getCountries} from "../../redux/actions"
import axios from "axios"

const Form = ()=> {

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getCountries())
  }, [dispatch])

    const ids = useSelector((state)=> state.allCountries);
    console.log(ids)
    


    const history = useHistory()
const GoBack = () => {
  history.goBack()
}
//CREO ESTADO PARA LOS INPUTS
const [form, setForm]= useState({
    Nombre: "",
   Dificultad: "",
   Duracion: "",
   Temporada: "",
   paises: [],
  })
  //creo este estado y lo iniciliazo en false para renderizar el formulario y cuando sea true renderizar un msj de act creada
const [actCreada, setActCreada] = useState(false);
//Estado de los errores q los inicializo con ese mensaje y a medida q alguien escribe en el input cambian
const [error, setError]= useState({
    Nombre: "",
    Dificultad: "",
    Duracion: "",
    Temporada: "",
    paises: "",
  })
  //funcion q valida la informacion de mis inputs
const validate = (input) => {
    let newErrors = { ...error }; // Copia del objeto de errores existente
  
    // Validación para el nombre
    if (input.Nombre.length < 3) {
      newErrors = { ...newErrors, Nombre: "El nombre es muy corto" };
    } else {
      newErrors = { ...newErrors, Nombre: "" };
    }
  
    // Validación para la Duracion
  
    if (isNaN(parseFloat(input.Duracion)) ) {
        newErrors = { ...newErrors, Duracion: "Debe ser un número" };
      } else {
        newErrors = { ...newErrors, Duracion: "" };
        
      }
  
    // Validación para la Dificultad
    if (isNaN(parseFloat(input.Dificultad)) ) {
        newErrors = { ...newErrors, Dificultad: "Debe ser un número del 1 al 5" };
      } else {
        newErrors = { ...newErrors, Dificultad: "" };
        
      }
       // Validación para la Temporada
    if (input.Temporada !== "Invierno" &&
    input.Temporada !== "Verano" &&
    input.Temporada !== "Otoño" &&
    input.Temporada !== "Primavera") {
        newErrors = { ...newErrors, Temporada: "Ingrese una temporada " };
      } else {
        newErrors = { ...newErrors, Temporada: "" };
        
      }
    
    
    setError(newErrors);
  };
  const changeHandler= (event)=> {
    const property = event.target.name;
    const value = event.target.value;
    //SPREAD OPERAOT PARA Q NO SE PISEN LOS ESTADOS DE LOS INPUTS
    setForm({...form, [property]:value})
  
    validate({...form, [property]:value}
    )
  }
  const handleSubmit = async (e)=> {
    e.preventDefault();
    
    try {
      let ActNueva = {
        name: form.Nombre,
        Dificultad: form.Dificultad,
        Temporada: form.Temporada,
        Duracion: form.Duracion,
        paises: form.paises
    
      }
      
      if (ActNueva.name.length < 3 ){
        return window.alert("el nombre debe tener minimo 3 caracteres")
      } else if (isNaN(parseFloat(ActNueva.Dificultad)) || ActNueva.Dificultad < 1 || ActNueva.Dificultad > 5) {
        window.alert("La dificultad debe ser un número entre 1 y 5");
      }else if(isNaN(parseFloat(ActNueva.Duracion)) || ActNueva.Duracion < 1 || ActNueva.Duracion > 24){
        window.alert("La duracion debe ser un numero entre 1 y 24")

      } else {
        const respuesta = await axios.post(`http://localhost:3001/Activity`, ActNueva)
        setActCreada(true)
      }

    
        
      }
       catch (error) {
      window.alert(`Debe completar todos los campos correctamente`)
      
    }
    
    }

    return(
        <div>
            <h1>CREA UNA ACTIVIDAD</h1>
        <div className="forms">
            {actCreada === true ?
             (
             <div>
                <p className="PPS"> ¡Actividad Creada Exitosamente!</p>
                <br></br>
                <p>¡Felicidades!</p>
                <p>Ahora puedes volver a Home y ver tu actividad agregada al pais correspondiente</p>
                
             </div>
             
             )
             : <form onSubmit={handleSubmit}>
            <div className="margins">
            <input className="inputss" type="text"  placeholder="Minimo 3 caracteres" value={form.Nombre} onChange={changeHandler} name="Nombre"></input>
            <label className="labelss" >Nombre</label>
            <br></br>
            <br></br>
            <span className="error">{error.Nombre}</span>
            </div>
            <div className="margins">
            <select
                className="selectBB"
                value={form.Dificultad}
                onChange={changeHandler}
                name="Dificultad"
              >
                <option className="opti"  value="">Selecciona dificultad</option>
                {[1, 2, 3, 4, 5].map((level) => (
                  <option className="opti"   key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            <label className="labelssD" >Dificultad</label>
            <br></br>
            <br></br>
            <span className="error">{error.Dificultad}</span>
            </div>
            <div className="margins">
            <input className="inputss" type="text"  placeholder="Numero del 1 al 24" value={form.Duracion} onChange={changeHandler} name="Duracion"></input>
            <label className="labelss" >Duracion (hs)</label>
            <br></br>
            <br></br>
            <span className="error">{error.Duracion}</span>
            </div>
            <div className="margins">
            <select className="selectBB" value={form.Temporada} onChange={changeHandler} name="Temporada">
              <option className="opti" value="">Selecciona una temporada</option>
              <option className="opti" value="Invierno">Invierno</option>
              <option className="opti" value="Verano">Verano</option>
              <option className="opti" value="Otoño">Otoño</option>
              <option className="opti" value="Primavera">Primavera</option>
            </select>
            <label className="labelssT" >Temporada</label>
            <br></br>
            <br></br>
            <span className="error">{error.Temporada}</span>
            
            </div>
            <div className="margins">
            <select  className="selectBB" value={form.paises} onChange={changeHandler} name="paises">
  {ids.map((country) => {
    return (
      <option className="opti" key={country.id} value={country.id}>{country.name}</option>
    );
  })}
</select>
            <label className="labelssP" >Paises</label>
            </div>
            <br></br>
            <br></br>
            <button className="ACOMODO" type="submit"> Crear Actividad</button>
            </form> }
            
            
            
            <br></br>


           
            
        </div>
        <br></br>
        <button onClick={GoBack} className="DETALLESS">Home</button>
        </div>

    )
}

export default Form