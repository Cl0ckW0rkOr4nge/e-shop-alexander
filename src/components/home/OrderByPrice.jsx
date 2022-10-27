import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../store/slices/products.slice'


const OrderByPrice = () => {

    const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingProducts())
    }

    const handleDescending = () => {
        dispatch(descendingProducts())
    }


    return (
        <div>
            <button onClick={handleAscending} className='order_btn'>Ascending ⬆️</button>
            <button onClick={handleDescending} className='order_btn'>Descending ⬇️ </button>
        </div>
    )
}

export default OrderByPrice