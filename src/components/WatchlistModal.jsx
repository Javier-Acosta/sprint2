
import React from 'react'

const WatchlistModal = ({ListSelect, isModalOpen,setIsModalOpen,pelis,removePelis,setPelis,clearLista}) => {

    if (!isModalOpen) 
        return null
        const onClose =()=>setIsModalOpen(false)
    
    
    const prevPelis = {...ListSelect}
   const {name, img,id}=prevPelis


  return (
    <>



<nav class="d-flex align-items-start justify-content-end  py-4 px-6 flex items-center justify-center">
                    <div 
                        class="carrito"
                        >
                        <img class="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" class="bg-white p-3">
                                
                        {pelis.length === 0 ? (

                                <p class="text-center">El carrito esta vacio</p>
                            ):(
                                <table class="w-100 table">
                                <thead>
                                <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                
                                {pelis.map(ListSelect =>(

                                    
                                    
                                    
                                    <tr>
                                        <td>
                                            <img class="img-fluid w-200" src={img} alt="imagen guitarra" />
                                        </td>
                                        <td
                                        class="fw-bold">

                                                ${name}
                                        </td>
                                        <td class="fw-bold">
                                            $500
                                        </td>
                                       
                                        <td>
                                            <button
                                                class="btn btn-danger"
                                                type="button"
                                                onClick={()=>removePelis(id)}
                                                >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                                </table>
                                
                            )}
                                <p class="text-end">Total pagar: <span class="fw-bold">$899</span></p>

                                <button 
                                onClick={onClose}
                                type="button"
                                
                            className="btn btn-dark w-100 mt-3 p-2">Vaciar Lista</button>
                                <button 
                                onClick={clearLista}
                                type="button"
                                
                            className="btn btn-dark w-100 mt-3 p-2">Cerrar Carrito</button>
                        </div>
                    </div>
                </nav>


    </>


    
  )
}

export default WatchlistModal