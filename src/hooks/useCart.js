import { useState, useEffect, useMemo } from 'react';
import { movies } from '../db/movies'

export const useCart = () => {


    const initialLista = () => {
        const localStorageLista = localStorage.getItem('pelis')
        return localStorageLista ? JSON.parse(localStorageLista) : []
    }
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [data] = useState(movies)
    const [pelis, setPelis] = useState(initialLista)


    const MAX_ITEMS = 10
    const MIN_ITEMS = 1


    // verifica si existe
    function addToCard(item) {
        const itemExists = pelis.findIndex(listado => listado.id === item.id)
        if (itemExists >= 0) { // existe 
            if (pelis[itemExists].quantity >= MAX_ITEMS) // control de cantidad al apretar el boton muchas veces
                return
            const updateListado = [...pelis]
            updateListado[itemExists].quantity++
                setPelis(updateListado)
        } else {

            item.quantity = 1
            setPelis([...pelis, item])
        }


    }

    // Local Storage
    useEffect(() => {
        localStorage.setItem('pelis', JSON.stringify(pelis))
    }, [pelis])




    // eliminar pelis seleccionadas
    function removePelis(id) {
        setPelis(prevPelis => prevPelis.filter(pelis => pelis.id !== id))

    }

    // vaciar todas las peliculas seleccionadas
    function clearLista(id) {
        setPelis([])


    }

    // Incrementar
    function IncreaseQuantity(id) {
        const updatedPelis = pelis.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }

            }
            return item
        })

        setPelis(updatedPelis)
    }

    // Decrementar 
    function decreaseQuantity(id) {
        const updatePelis = pelis.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setPelis(updatePelis)
    }


    // State derivado
    const isEmpty = useMemo(() => pelis.length === 0, [pelis])

    const cartTotal = useMemo(() => pelis.reduce((total, item) => total + (item.quantity * item.price), 0, [pelis]))

    return {

        data,
        pelis,
        addToCard,
        removePelis,
        clearLista,
        IncreaseQuantity,
        decreaseQuantity,
        isModalOpen,
        setIsModalOpen,
        isEmpty,
        cartTotal


    }



}