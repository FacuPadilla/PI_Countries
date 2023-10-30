import "./Filter.styles.css"
import { OrderCountries, FiltContinents } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Filter = ()=> {


    const filtCont = useSelector((state) => state.countriesCopy)
    const dispatch = useDispatch();

    const handleOrder = (event)=> {
        dispatch(OrderCountries(event.target.value))
    }
    const handleFilter = (event)=>{
        dispatch(FiltContinents(event.target.value))
    }
    console.log(filtCont)

 
    return (
        <div>
      <select id="orderSelect" onChange={handleOrder}>
          <option value="A"> A-Z</option>
          <option value="B"> Z-A</option>
       </select>
       <select className="selectcss" onChange={handleOrder}>
          <option value="C">mayor poblacion</option>
          <option value="D">menor poblacion</option>
       </select>
       <select value={filtCont} onChange={handleFilter}>
        <option>Filtrado</option>
        <option value="all"> Todos</option>
          <option value="Africa">africa</option>
          <option value="North America">north America</option>
          <option value="Asia"> Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
       </select>
      
      
        </div>
    )

}
export default Filter