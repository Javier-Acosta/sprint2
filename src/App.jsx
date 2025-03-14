import {  useState, useEffect} from 'react';
import {movies} from './db/movies'

import MovieCard from './components/MovieCard'
import Header from './components/Header'
import Footer from './components/Footer'
import WatchlistModal from './components/WatchlistModal';

function App() {

  const initialLista=()=>{
    const localStorageLista= localStorage.getItem('pelis')
    return localStorageLista ? JSON.parse(localStorageLista):[]
  }
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setData] = useState(movies)
  const [pelis, setPelis] = useState(initialLista)


  // verifica si existe
function addToCard(item) {

  const itemExists= pelis.findIndex(listado=> listado.id === item.id)
  if (itemExists >=0) { // existe 
    const updateListado=[...pelis]
    updateListado[itemExists].quantity++
    setPelis(updateListado)
  }else{

    item.quantity =1 
    setPelis( prevPelis =>[...prevPelis, item])
  }

  
}

  // Local Storage
  useEffect (()=>{
    localStorage.setItem('pelis',JSON.stringify(pelis)) 
  }, [pelis])
  



  // eliminar pelis seleccionadas
  function removePelis(id) {
    setPelis(prevPelis=>prevPelis.filter(pelis=>pelis.id !== id))
   
}

// vaciar todas las peliculas seleccionadas
function clearLista(id) {
  setPelis([])
  
  
}




  return (
    < div className='mt-5 text-center'>

      <Header 
      setIsModalOpen={setIsModalOpen} />

      
      {pelis.map((ListSelect)=>(
        <WatchlistModal 
        key={ListSelect.id}
        ListSelect={ListSelect}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        pelis={pelis}
        setPelis={setPelis}
        removePelis={removePelis}
        clearLista={clearLista}
      />

      
      
      
      ))}
     
      
    {data.map((listado)=>(
      <MovieCard
      key={listado.id}
      listado={listado}
      setPelis={setPelis}
      addToCard={addToCard}

      
      />
      ))}
      
      <Footer/>


    </div>
  )
}

export default App
