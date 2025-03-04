
import React from 'react'

const WatchlistModal = ({ListSelect, isModalOpen,setIsModalOpen,pelis,removePelis,setPelis,clearLista}) => {

    if (!isModalOpen) 
        return null
        const onClose =()=>setIsModalOpen(false)
    
    
    const prevPelis = {...ListSelect, setPelis}
   const {name, img,id}=prevPelis


  return (
    <>



<nav className="d-flex align-items-start justify-content-end  py-4 px-6 flex items-center justify-center">
                    <div 
                        className="carrito"
                        >
                        <img className="img-fluid" src="../src/assets/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                                
                        {pelis.length === 0 ? (

                                <p className="text-center">El carrito esta vacio</p>
                            ):(
                                <table className="w-100 table">
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
                                {pelis.map(prevPelis =>(
                                

                                    
                                    
                                    
                                    <tr>
                                        <td>
                                            <img className="img-fluid w-200" src={img} alt="imagen guitarra" />
                                        </td>
                                        <td
                                        className="fw-bold">

                                                ${name}
                                        </td>
                                        <td className="fw-bold">
                                            $500
                                        </td>
                                       
                                        <td>
                                            <button
                                                className="btn btn-danger"
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
                                
                                <p className="text-end">Total pagar: <span className="fw-bold">$899</span></p>

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