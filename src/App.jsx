import {  useState } from 'react';
import {movies} from './db/movies'

import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState(movies)

  return (
    < div className='mt-5 text-center'>
    
      <Header/>
    {data.map((listado)=>(
      <Body
key={listado.id}
      listado={listado}
      
      />
      ))}
      
      <Footer/>


    </div>
  )
}

export default App
