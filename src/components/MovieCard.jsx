import React from 'react'

export default function MovieCard ({listado, addToCard})  {
  //destructuring
const {id,img,name,price}=listado



  


   return (
    

    
           
      
      

      
      
        < div className="  col-md-6 col-lg-2 align-items-center  p-5    ">
          
          <div className="bg-dark-secondary rounded-lg shadow-lg overflow-hidden  ">
            <img src= {img} alt="The Shining" className="h-100 w-100 object-contain" />
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

         
        
      
    
    
  )
}


 