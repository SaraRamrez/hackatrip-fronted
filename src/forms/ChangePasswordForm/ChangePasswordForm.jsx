import { useState } from 'react';
import PropType from 'prop-types';

import './ChangePasswordForm.css';

const ChangePasswordForm = ({ authChangePassword }) => {
  const [email, setEmail] = useState('');
  const [recoverPassCode, setRecoverPassCode] = useState('');
  const [newPass, setNewPass] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    authChangePassword(email, newPass, recoverPassCode);
  };

  return (
    <div className='change-container'>
      <form onSubmit={handleSubmit}>
        <div className='change-form'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
            required
          />

          <label htmlFor='pass'>Nueva contraseña:</label>
          <input
            type='password'
            id='pass'
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            autoComplete='new-password'
            required
          />

          <label htmlFor='code'>Código de recuperación:</label>
          <input
            type='text'
            id='code'
            value={recoverPassCode}
            onChange={(e) => setRecoverPassCode(e.target.value)}
            autoComplete='recover-code'
            required
          />
        </div>

        <button className='boton'>Cambiar Contraseña</button>
      </form>
    </div>
  );
};

ChangePasswordForm.propTypes = {
    authChangePassword: PropType.func.isRequired,
};
export default ChangePasswordForm;
