import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import toast from 'react-hot-toast';

import { activateUserService } from '../../services/userService';

const ValidateUserPage = () => {
  const navigate = useNavigate();

  const { registrationCode } = useParams();

  useEffect(() => {
    const fetchValidateUser = async () => {
      try {
        const message = await activateUserService(registrationCode);

        toast.success(message);

        navigate('/login');
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchValidateUser();
  }, [navigate, registrationCode]);

  return (
    <main>
      <h2>Validación de usuario</h2>

      <p>Estamos validando tu usuario, por favor, espere.</p>
    </main>
  );
};

export default ValidateUserPage;
