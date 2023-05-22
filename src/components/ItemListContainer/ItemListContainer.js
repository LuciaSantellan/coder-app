import ItemCount from "../ItemCount/ItemCount"
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        
        asyncsFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])

    return(
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer 