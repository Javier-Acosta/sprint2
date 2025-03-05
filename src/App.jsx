import {  useState, useEffect} from 'react';
import {movies} from './db/movies'

import MovieCard from './components/MovieCard'
import Header from './components/Header'
import Footer from './components/Footer'
import WatchlistModal from './components/WatchlistModal';
import { stringify } from 'querystring';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setData] = useState(movies)
  const [pelis, setPelis] = useState([])

  // Local Storage
  useEffect (()=>{
    localStorage.setItem('setPelis',JSON,stringify(pelis))
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

      
      />
      ))}
      
      <Footer/>


    </div>
  )
}

export default App
