import { useState, useEffect, useContext } from 'react';

import toast from 'react-hot-toast';

import { selectTripByIdService } from '../services/tripService';

import { AuthContext } from '../contexts/AuthContext';

const useTrip = (viajeId) => {
  const [trip, setTrip] = useState(null);

  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const trip = await selectTripByIdService(viajeId, authToken);

        setTrip(trip);
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchTrip();
  }, [viajeId, authToken]);

  const addTripVote = (votesAvg) => {
    setTrip({
      ...trip,
      avgValue: {
        media: votesAvg,
        votedByMe: 1,
      },
    });
  };

  return { trip, addTripVote };
};

export default useTrip;
