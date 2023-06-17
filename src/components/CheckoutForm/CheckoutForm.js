import { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ createOrder }) => { 
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    // Validación del correo electrónico
    if (!validateEmail(email)) {
      alert('Por favor ingrese una dirección de correo electrónico válida.');
      return;
    }

    // Validación de coincidencia de correos electrónicos
    if (email !== confirmEmail) {
      alert('Los correos electrónicos no coinciden. Por favor, inténtelo de nuevo.');
      return;
    }

    const userData = {
      name: name.trim(),
      lastname: lastname.trim(),
      phone: phone.trim(),
      email: email.trim(),
    };

    if (userData.name && userData.lastname && userData.phone && userData.email) {
      createOrder(userData);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  // Validación del correo electrónico
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className='container'>
      <form onSubmit={handleConfirm} className='Form'>
        <label className='Label'>
          Nombre
          <input
            className='Input'
            type='text'
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>

        <label className='Label'>
          Apellido
          <input
            className='Input'
            type='text'
            value={lastname}
            onChange={({ target }) => setLastName(target.value)}
          />
        </label>

        <label className='Label'>
          Teléfono
          <input
            className='Input'
            type='text'
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>

        <label className='Label'>
          <div>Email</div>
          <input
            className='Input'
            type='email'
            placeholder='Ingrese su correo electrónico'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>

        <label className='Label'>
          <div>Confirmar Email</div>
          <input
            className='Input'
            type='email'
            placeholder='Confirme su correo electrónico'
            value={confirmEmail}
            onChange={({ target }) => setConfirmEmail(target.value)}
          />
        </label>

        <button type='submit' className='btn btn-light'>
          Crear orden
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;