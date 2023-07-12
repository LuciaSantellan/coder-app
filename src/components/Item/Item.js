import "./Item.css";
import { Link } from "react-router-dom";
import { getFirestore } from "firebase/firestore";

const Item = ({ id, name, imageId, price, stock }) => {
    const db = getFirestore();

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src={imageId} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>Precio: ${price}</p>
                <p className='Info'>Stock disponible: {stock}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className='boton'>
                    Ver detalle
                </Link>
            </footer>
        </article>
    );
};

export default Item;