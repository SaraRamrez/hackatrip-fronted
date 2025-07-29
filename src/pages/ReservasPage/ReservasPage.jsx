import Header from '../../components/Header/Header';

import ReservedTrips from '../../components/ReservedTrips/ReservedTrips';
import useTrips from '../../hooks/useTrips';

const CoordinadoresPage = ({ setTripsFiltrados }) => {

    const { trips, loading } = useTrips(setTripsFiltrados);

  return (
    <>
      <Header imgSrc={'/Home.jpg' } />
      <main className='reservas'>
        <h1>Viajes que has disfrutado</h1>

        <ReservedTrips loading={loading} trips={trips} />

      </main>
    </>
  );
};

export default CoordinadoresPage;
