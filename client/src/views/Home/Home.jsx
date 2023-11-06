import "./Home.styles.css"
import NavBar from "../../Componente/NavBar/NavBar"
import Cards from "../../Componente/Cards/Cards"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCountries } from "../../redux/actions"

const Home = ()=> {

const dispatch = useDispatch()


useEffect(()=>{
    dispatch(getCountries())
}, [dispatch])






    return (
        <div className="home">
            <h2 className="home-title">NationNav</h2>
            <NavBar/>
            <Cards/>


        </div>
    )

}

export default Home