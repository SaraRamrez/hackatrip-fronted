import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import CreateTripForm from '../../forms/CreateTripForm/CreateTripForm';

import { createTripService } from '../../services/tripService.js';

const AdminPage = () => {

  const navigate = useNavigate();

  const { authUser, authToken } = useContext(AuthContext);

  return (
    <main className='admin'>
      <h1>Panel de Administración</h1>

      {authUser && (
        authUser.role === "admin" ? ( <CreateTripForm createTripService={createTripService} authToken={authToken} /> ) : ( navigate('/') ) 
      )}
    </main>
  );
};

export default AdminPage;
