import { useState, useEffect, useContext } from 'react';

import toast from 'react-hot-toast';

import { selectUsersService } from '../services/userService';

import { AuthContext } from '../contexts/AuthContext';

const useUsers = () => {
  const [usuarios, setUsuarios] = useState(null);

  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usuarios = await selectUsersService(authToken);

        setUsuarios(usuarios);
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchUsers();
  }, [authToken]);

  return { usuarios };
};

export default useUsers;
