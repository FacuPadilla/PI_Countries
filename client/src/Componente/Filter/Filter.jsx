import "./Filter.styles.css"
import { OrderCountries } from "../../redux/actions"
import { useDispatch } from "react-redux"

const Filter = ()=> {

    const dispatch = useDispatch();
    const handleOrder = (event)=> {
        dispatch(OrderCountries(event.target.value))
    }
 
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
      
      
        </div>
    )

}
export default Filter