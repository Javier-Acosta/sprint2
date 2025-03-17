

import MovieCard from './components/MovieCard'
import Header from './components/Header'
import Footer from './components/Footer'
import WatchlistModal from './components/WatchlistModal';
import { useCart } from './hooks/useCart';

function App() {


  const { data, pelis, addToCard, removePelis, clearLista, IncreaseQuantity, decreaseQuantity, isModalOpen, 
    setIsModalOpen, isEmpty, cartTotal}= useCart ()



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
        // setPelis={setPelis}
        removePelis={removePelis}
        clearLista={clearLista}
        IncreaseQuantity={IncreaseQuantity}
        decreaseQuantity={decreaseQuantity}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      
      
      
      ))}
     
      
    {data.map((listado)=>(
      <MovieCard
      key={listado.id}
      listado={listado}
      // setPelis={setPelis}
      addToCard={addToCard}

      
      />
      ))}
      
      <Footer/>


    </div>
  )
}

export default App
