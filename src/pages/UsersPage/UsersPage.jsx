import { useContext } from 'react';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../contexts/AuthContext';
import useUsers from '../../hooks/useUsers';
import { useNavigate } from 'react-router-dom';
import UsersList from '../../components/UsersList/UsersList'

const UsersPage = () => {

  const { authUser, authToken } = useContext(AuthContext);

  const { usuarios } = useUsers();

  const navigate = useNavigate();

  return (
    <>
      <Header imgSrc='/Home.jpg'/>
      <main className='users'>
        <h1>Lista de Usuarios</h1>

        {authUser && (
          authUser.role === "admin" ? ( <UsersList usuarios={usuarios} authToken={authToken} /> ) : ( navigate('/') ) 
        )}
      </main>
    </>
  );
};

export default UsersPage;
