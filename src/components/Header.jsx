import React from 'react'
import WatchlistModal from './WatchlistModal'

const Header = () => {
 
  return (
    <div>

<header className="bg-dark-secondary py-4 px-6 flex items-center justify-center">
<div className="w-full max-w-6xl flex items-center justify-between">

  <div className="flex items-center space-x-4">
    <h1 className="font-['Orbitron'] text-2xl font-bold text-accent-teal">
      NODO Movies 🎬
    </h1>
  </div>

  <div className="flex items-center space-x-4">
  <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        class="carrito"
                    >
                        <img class="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" class="bg-white p-3">
                            <p class="text-center">El carrito esta vacio</p>
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
                                {/* {setPelis.map(listado=>( */}

                               
                  
                          <tr>
                                        <td>
                                            <img class="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
                                        </td>
                                        <td>SRV</td>
                                        <td class="fw-bold">
                                                ${name}
                                        </td>
                                        <td class="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                            >
                                                -
                                            </button>
                                                1
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                                >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                class="btn btn-danger"
                                                type="button"
                                                >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                 {/* ))} */}
                                </tbody>
                            </table>

                            <p class="text-end">Total pagar: <span class="fw-bold">$899</span></p>
                            <button class="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                        </div>
                    </div>
                </nav>

    <i className="ph ph-user-circle text-4xl text-accent-teal hover:text-button-primary-hover cursor-pointer transition-colors duration-300"></i>
  </div>
</div>
</header>
    </div>
  )
}

export default Header


