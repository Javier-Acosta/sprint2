import {  useState } from 'react';
import {movies} from './db/movies'

import MovieCard from './components/MovieCard'
import Header from './components/Header'
import Footer from './components/Footer'
import WatchlistModal from './components/WatchlistModal';


function App() {
  const [data, setData] = useState(movies)
  const [pelis, setPelis] = useState([])
  

  return (
    < div className='mt-5 text-center'>

      <Header/>
      {pelis.map((ListSelect)=>(
        <WatchlistModal 
        key={ListSelect.id}
        ListSelect={ListSelect}
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
