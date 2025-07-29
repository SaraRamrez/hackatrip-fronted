import { useContext } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import CoordinadoresList from '../../components/CoordinadoresList/CoordinadoresList';

import useCoordinadores from '../../hooks/useCoordinadores.js';

import Header from '../../components/Header/Header';

const CoordinadoresPage = () => {

  const navigate = useNavigate();

  const params = useParams();

  const viajeId = params.viajeId;

  const { authUser, authToken } = useContext(AuthContext);

  const { coordinadores, coordinadoresConRating } = useCoordinadores(viajeId);

  return (
    <>
      <Header imgSrc={'/Home.jpg' } />
      <main className='coordinadores'>
        <h1>Coordinadores disponibles para este viaje</h1>

        {authUser && (
          authUser.role === "admin" ? ( <CoordinadoresList coordinadores={coordinadores} coordinadoresConRating={coordinadoresConRating} viajeId={viajeId} authToken={authToken} /> ) : ( navigate('/') ) 
        )}

      </main>
    </>
  );
};

export default CoordinadoresPage;
