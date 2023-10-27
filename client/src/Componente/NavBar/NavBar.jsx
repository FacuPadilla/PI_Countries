import "./NavBar.styles.css"
import SearchBar from "../SearchBar/SearchBar"
import Filter from "../Filter/Filter"

const NavBar = ()=> {
    return (
        <div className="containerNav">
            
            <SearchBar/>
            <Filter/>
            
        </div>
    )
}

export default NavBar