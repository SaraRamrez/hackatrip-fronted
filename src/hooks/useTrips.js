import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import toast from 'react-hot-toast';

import { selectAllTripsService } from '../services/tripService';

import { AuthContext } from '../contexts/AuthContext';

const useTrips = (setTripsFiltrados) => {
  const [trips, setTrips] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);

  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);

        const trips = await selectAllTripsService(searchParams, authToken);

        if (
          searchParams.get('destino') ||
          searchParams.get('grupoDeEdad') ||
          searchParams.get('fecha')
        ) {
          setTripsFiltrados(true);
        } else {
          setTripsFiltrados(false);
        }

        setTrips(trips);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, [searchParams, setTripsFiltrados, authToken]);

  return {
    trips,
    setSearchParams,
    loading,
  };
};

export default useTrips;
