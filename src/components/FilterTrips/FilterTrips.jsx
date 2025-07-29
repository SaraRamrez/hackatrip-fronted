import PropType from 'prop-types';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import "./FilterTrips.css"

import { Link } from 'react-router-dom';

const { VITE_API_URL } = import.meta.env;

const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const dateDifferenceInDays = (dateInitial, dateFinal) =>
    (dateFinal - dateInitial) / 86_400_000;

  const today = new Date();

const FilterTrips = ({trips, loading}) => {

    return (
        <Grid container flexDirection="column">
            {(loading ? Array.from(new Array(5)) : trips).map((trip, index) => (
                new Date(trip?.fechaDeInicio) > new Date(today) ?
                <Box className="box" key={index}>
                {trip ? (
                   <>
                   <div className='viaje'>
                       <p>{formatDate(trip.fechaDeInicio)}</p>
                       <img
                           style={{ width: 100, height: 100, border: '2px solid white', borderRadius: '20px' }}
                           alt={trip.destino}
                           src={`${VITE_API_URL}/${trip.imagen}`}
                       />
                       <p>{trip.titulo}</p>
                       <p>{formatDate(trip.fechaDeInicio)} - {formatDate(trip.fechaDeFin)}</p>
                       <p>{Math.floor(dateDifferenceInDays(new Date(trip.fechaDeInicio), new Date(trip.fechaDeFin)))} días</p>
                       {trip.numeroReservas === trip.plazasMaximas ? <p>😩 Agotado</p> : trip.numeroReservas > 10 ? <p>🔥 Ultimas plazas</p> : <p>🎉 Plazas disponibles</p> }
                       <p className='grupoedad'>{trip.grupoDeEdad} años</p>
                       <p>{trip.precio}€</p>
                       <Link to={`/viaje/${trip.id}`} >
                           <button>Ver Viaje</button>
                       </Link>
                   </div>
               </>
                ) : (
                    console.log()
                )}
                </Box> : console.log()
            ))}
        </Grid>
    );
};

FilterTrips.propTypes = {
    trips: PropType.array.isRequired,
    loading: PropType.bool.isRequired,
};


export default FilterTrips;
