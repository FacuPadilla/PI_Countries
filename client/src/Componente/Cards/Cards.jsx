import "./Cards.styles.css"
import Card from "../Card/Card"
import { useSelector } from "react-redux"
import { useState } from "react"



const Cards = ()=> {

// uso useSelector para extraer el estado de allCountries del store de Redux.
    const country= useSelector(state=> state.allCountries);
 

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10; // Número de paises por página

  // Calcular el índice de inicio y fin para la página actual
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage;

  // utilizo slice en el array country para obtener los paises que se mostrarán en la página actual.
  //startIndex y endIndex se utilizan para determinar qué elementos deben incluirse en la página actual usando slice.
  const countryToShow = country.slice(startIndex, endIndex);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



    return(
        <div>
          
        <div className="card-list">
            {countryToShow.map(el =>{
                return <Card
                name= {el.name}
                bandera= {el.bandera}
                continente={el.continente}
                id = {el.id}
                
                />
            })}

        </div>
        <p>Estas en la pagina {currentPage}</p>
    <div>
        {/* Botón para la página anterior */}
        <button
          
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          PREV
        </button>

        {/* Botones de páginas */}
        {/*calculo el número total de páginas necesarias para mostrar todos los elementos,
         donde dog.length es la cantidad total de elementos y perPage es la cantidad de elementos por página.
          */}
          {/* Para cada elemento en este array, creoun botón representando una página,*/}
        {Array.from({ length: Math.ceil(country.length / perPage) }, (_, index) => (
          
          <button
          
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            
          >
            {index + 1}
          </button>
        ))}

        {/* Botón para la página siguiente */}
        <button
        
          onClick={() => handlePageChange(currentPage + 1)}
          //disabled se utiliza para deshabilitar este botón si ya estás en la última página 
          disabled={currentPage === Math.ceil(country.length / perPage)}
        >
          NEXT
        </button>
        
      </div>
        
        </div>
    )
}

export default Cards