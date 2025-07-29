import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import ResetPasswordForm from '../../forms/ResetPasswordForm/ResetPasswordForm';

const ResetPasswordPage = () => {
  const { authRecoverPassword } = useContext(AuthContext);
  return (
    <main className='recover'>
      <ResetPasswordForm authRecoverPassword={authRecoverPassword} />
    </main>
  );
};

export default ResetPasswordPage;
