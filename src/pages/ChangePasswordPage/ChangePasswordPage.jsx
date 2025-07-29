import ChangePasswordForm from '../../forms/ChangePasswordForm/ChangePasswordForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const ChangePasswordPage = () => {
  const { authChangePassword } = useContext(AuthContext);
  return (
    <main className='change'>
      <h1>Cambiar Contraseña</h1>

      <ChangePasswordForm authChangePassword={authChangePassword} />
    </main>
  );
};

export default ChangePasswordPage;
