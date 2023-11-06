import "./Filter.styles.css"
import { OrderCountries, FiltContinents, FiltActivity, GetActivity} from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const Filter = ()=> {


    const filtCont = useSelector((state) => state.countriesCopy)
    const AllActs = useSelector((state)=> state.AllActs )
    const dispatch = useDispatch();

    const handleOrder = (event)=> {
        dispatch(OrderCountries(event.target.value))
    }
    const handleFilter = (event)=>{
        dispatch(FiltContinents(event.target.value))
    }

    const handleFiltActs = (event)=> {
        dispatch(FiltActivity(event.target.value))
    }
    useEffect(()=>{
        dispatch(GetActivity())
    }, [dispatch])
    console.log(filtCont)
    console.log(AllActs)

 
    return (
        <div className="filterrs">
      <select className="selectcss" onChange={handleOrder}>
        <option className="optionss" value="">Ordenar</option>
          <option className="optionss" value="A"> A-Z</option>
          <option className="optionss" value="B"> Z-A</option>
       </select>
       <select className="selectcss" onChange={handleOrder}>
        <option className="optionss" value="">Ordenar poblacion</option>
          <option className="optionss" value="C">mayor poblacion</option>
          <option className="optionss" value="D">menor poblacion</option>
       </select>
       <select className="selectcss" value={filtCont} onChange={handleFilter}>
        <option className="optionss" value="">Filtrado</option>
        <option className="optionss" value="all"> Todos</option>
          <option className="optionss" value="Africa">africa</option>
          <option className="optionss" value="North America">north America</option>
          <option className="optionss" value="Asia"> Asia</option>
          <option className="optionss" value="Oceania">Oceania</option>
          <option className="optionss" value="Europe">Europe</option>
          <option className="optionss" value="South America">South America</option>
          <option className="optionss" value="Antarctica">Antarctica</option>
       </select>
       <select className="selectcss" onChange={handleFiltActs}>
        <option className="optionss" value="">Actividades</option>
        {AllActs.map((act)=>{
            return <option className="optionss" value={act.name}>{act.name}</option>
        })}
       </select>
      
      
        </div>
    )

}
export default Filter