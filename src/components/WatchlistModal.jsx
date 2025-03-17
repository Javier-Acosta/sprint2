
import carrito from '../assets/carrito.png'

const WatchlistModal = ({ListSelect,isModalOpen,setIsModalOpen,pelis,removePelis,setPelis,clearLista,IncreaseQuantity, decreaseQuantity,isEmpty,cartTotal}) => {

    

    if (!isModalOpen) 
        return null
        const onClose =()=>setIsModalOpen(false)
    
    
    const prevPelis = {...ListSelect}
    console.log(prevPelis);
    
   const {name, img,id, price}=prevPelis


  return (
    <>



<nav className="d-flex align-items-start justify-content-end  py-4 px-6 flex items-center justify-center">
                    <div 
                        className="carrito"
                        >
                        <img className="img-fluid" src={carrito} alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                                
                        { isEmpty ? (

                                <p className="text-center">El carrito esta vacio</p>
                            ):(
                                <>
                                <table className="w-100 table">
                                <thead>
                                <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                
                                </tr>
                                </thead>
                                <tbody>
                                {pelis.map(listado =>(
                                

                                    
                                    
                                    
                                    <tr  >
                                        <td>
                                            <img className="img-fluid w-200" src={img} alt="imagen guitarra" />
                                        </td>
                                        <td
                                        className="fw-bold">

                                                {name}
                                        </td>
                                       
                                        <td className="fw-bold">
                                                        ${price}
                                                    </td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => decreaseQuantity(id)}
                                                        >
                                                            -
                                                        </button>
                                                            {listado.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => IncreaseQuantity(id)}
                                                        >
                                                            +
                                                        </button>
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
                               
                               
                               <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                               </>
                               )}
                                
                               
                               
                                <button 
                                onClick={clearLista}
                                type="button"
                                
                                className="btn btn-dark w-100 mt-3 p-2">Vaciar Lista</button>
                                <button 
                                type="button"
                                onClick={onClose}
                                
                            className="btn btn-dark w-100 mt-3 p-2">Cerrar Carrito</button>
                        </div>
                    </div>
                </nav>


    </>


    
  )
}

export default WatchlistModal