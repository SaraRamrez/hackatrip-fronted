import PropType from 'prop-types';

import FilterTrips from "../../components/FilterTrips/FilterTrips";
import Header from "../../components/Header/Header";
import useTrips from "../../hooks/useTrips";

import imgSrc from '/Home.jpg';

const DestinosPage = ({ setTripsFiltrados }) => {

    const { trips, loading } = useTrips(setTripsFiltrados);

    let viajesNoCumplidos = [];

    const today = new Date();

  for (let i = 0; i < trips?.length; i++) {
    let fechaDeInicio = new Date(trips[i].fechaDeInicio);
    if(fechaDeInicio > today)
    viajesNoCumplidos.push(trips[i]);
  }

  return (
    <main>
        <Header imgSrc={imgSrc}/>
        <FilterTrips loading={loading} trips={viajesNoCumplidos}/>
    </main>
  );
};

DestinosPage.propTypes = {
    setTripsFiltrados: PropType.func.isRequired,
  };

export default DestinosPage;
