

import MovieCard from './components/MovieCard'

import Footer from './components/Footer'
import WatchlistModal from './components/WatchlistModal';
import { useCart } from './hooks/useCart';

function App() {


  const { data, pelis, addToCard, removePelis, clearLista, IncreaseQuantity, decreaseQuantity, isEmpty, cartTotal}= useCart ()



  return (
    < div className='mt-5 text-center'>

    
      
      
        <WatchlistModal 
       
       
       
        pelis={pelis}
        // setPelis={setPelis}
        removePelis={removePelis}
        clearLista={clearLista}
        IncreaseQuantity={IncreaseQuantity}
        decreaseQuantity={decreaseQuantity}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      
      
      
      
     
      
     <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
    {data.map((listado)=>(
      <MovieCard
      key={listado.id}
      listado={listado}
      // setPelis={setPelis}
      addToCard={addToCard}

      
      />
      ))}
        
        </div>
      </main>
      
      <Footer />


    </div>
  )
}

export default App
