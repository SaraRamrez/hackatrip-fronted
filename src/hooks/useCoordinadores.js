import { useState, useEffect, useContext } from 'react';

import toast from 'react-hot-toast';

import {
  selectCoordinadoresConRatingservice,
  selectCoordinadoresService,
} from '../services/tripService';

import { AuthContext } from '../contexts/AuthContext';

const useCoordinadores = (viajeId) => {
  const [coordinadores, setCoordinadores] = useState(null);

  const [coordinadoresConRating, setCoordinadoresConRating] = useState(null);

  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchCoordinadores = async () => {
      try {
        const coordinadores = await selectCoordinadoresService(
          viajeId,
          authToken
        );
        setCoordinadores(coordinadores);

        const coordinadoresConRating =
          await selectCoordinadoresConRatingservice(authToken);

        setCoordinadoresConRating(coordinadoresConRating);
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchCoordinadores();
  }, [viajeId, authToken]);

  return { coordinadores, coordinadoresConRating };
};

export default useCoordinadores;
