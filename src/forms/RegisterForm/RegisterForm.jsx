import PropType from 'prop-types';
import './RegisterForm.css';
import { useState } from 'react';

const RegisterForm = ({ authRegister, authLoading }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    authRegister(username, email, pass);
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <div className='signup-form'>
          <label htmlFor='username'>Nombre de usuario:</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='username'
            required
          />

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
            required
          />

          <label htmlFor='pass'>Contraseña:</label>
          <input
            type='password'
            id='pass'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            autoComplete='new-password'
            required
          />
        </div>
        <button className='boton-register' disabled={authLoading}>Registrarse</button>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  authRegister: PropType.func.isRequired,
  authLoading: PropType.bool.isRequired,
};

export default RegisterForm;
