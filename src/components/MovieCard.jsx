import React from 'react'
import { movies } from '../db/movies';

export default function MovieCard ({listado, addToCard})  {
  //destructuring
const {id,img,name}=listado



  return (
    <div>

    
           <main>
      
      

      
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          <div className="bg-dark-secondary rounded-lg shadow-lg overflow-hidden">
            <img src= {img} alt="The Shining" className="" />
            <div className="p-4">
              <h2 className="text-text-primary text-lg text-center font-bold mb-2">
                 {name}
              </h2>
              <button
                type='button'
                onClick={()=> addToCard (listado)}
                className="bg-blue-600 bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active text-dark-secondary py-2 px-4 rounded-md w-full font-semibold transition-colors duration-300">
                <i className="ph ph-plus"></i> Add to Watchlist
              </button>
            </div>
          </div>

         
        </div>
      </div>
    </main>
    </div>
  )
}



 