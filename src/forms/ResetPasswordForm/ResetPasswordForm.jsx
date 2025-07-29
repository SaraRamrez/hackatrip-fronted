// ResetPasswordForm.js
import { useState } from 'react';
import './ResetPasswordForm.css';
import PropType from 'prop-types';

const ResetPasswordForm = ({ authRecoverPassword }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se puede agregar la lógica para enviar el correo de recuperación de contraseña
    authRecoverPassword(email);
    // Aquí se puede agregar llamadas a API, etc.
  };

  return (
    <div className='password-reset-form-container'>
      <h2>Recuperación de Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Escribe tu correo electrónico:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button className='resetbutton' type='submit'>
          Enviar Correo de Recuperación
        </button>
      </form>
    </div>
  );
};

ResetPasswordForm.propTypes = {
  authRecoverPassword: PropType.func.isRequired,
};
export default ResetPasswordForm;
