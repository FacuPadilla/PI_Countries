import "./NavBar.styles.css"
import SearchBar from "../SearchBar/SearchBar"
import Filter from "../Filter/Filter"

const NavBar = ()=> {
    return (
        <div className="containerNav">
            <div className="elementoo"><SearchBar/></div>
            <div className="elementoo"><Filter/></div>
            
            
        </div>
    )
}

export default NavBar