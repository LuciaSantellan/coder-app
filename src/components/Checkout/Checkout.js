import { useState, useContext } from 'react';
import 'firebase/firestore';
import { Timestamp, collection, writeBatch, addDoc, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseconfig';
import { CartContext } from '../../context/CartContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const [orderId, setOrderId] = useState('');
  const { cart, getTotal, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, lastname, phone, email }) => {
    try {
      const orderTotal= getTotal();
      const objOrder = {
        buyer: {
          name,
          lastname,
          phone,
          email,
        },
        items: cart,
        total: orderTotal,
        fecha: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, 'Productos');

      const productsAddedFromFirestore = await getDocs(query(productsRef, where('id', 'in', ids)));

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');
        const ordersQuery = query(
          orderRef,
          where('fecha', '==', objOrder.fecha),
          where('nombre', '==', objOrder.buyer.name)
        );
        const ordersSnapshot = await getDocs(ordersQuery);

        if (ordersSnapshot.empty) {
          const orderAdded = await addDoc(orderRef, objOrder);
          setOrderId(orderAdded.id);
          clearCart();
        } else {
          const existingOrder = ordersSnapshot.docs[0];
          setOrderId(existingOrder.id);
          clearCart();
        }
      } else {
        console.error('Hay productos que están fuera de stock');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
            
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm createOrder={createOrder} />
    </div>
  );
};

export default Checkout;