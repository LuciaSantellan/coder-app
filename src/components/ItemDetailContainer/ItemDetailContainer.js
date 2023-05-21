import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)

    useEffect(() => {
        getProductById('1')
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}






export default ItemDetailContainer