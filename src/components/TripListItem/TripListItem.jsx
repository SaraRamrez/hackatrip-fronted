import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import "./TripListItem.css"

const { VITE_API_URL } = import.meta.env;

const today = new Date();

function TripListItem(sixTrips, {loading}) {

  return (
    <Grid container justifyContent="center">
      {(loading ? Array.from(new Array(6)) : sixTrips.sixTrips.sixTrips).map((trip, index) => (
        new Date(trip?.fechaDeInicio) > new Date(today) ?
        <Box key={index} sx={{ width: 450, marginRight: 5, mt: 5 }}>
          {trip ? (
              <Link to={`/viaje/${trip.id}`} className='trip-item'>
              <img
                style={{ width: 450, height: 350, border: '2px solid white', borderRadius: '20px' }}
                alt={trip.destino}
                src={`${VITE_API_URL}/${trip.imagen}`}
              />
            </Link>
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {trip ? (
            new Date(trip?.fechaDeInicio) > new Date(today) ?
              <Link to={`/viaje/${trip.id}`} className='trip-item'>
                <Box sx={{ pr: 2, marginLeft: 7}}>
                  <Typography gutterBottom fontFamily="Martel Sans" variant="h4" color="ButtonText">
                    {trip.destino}
                  </Typography>
                  <Typography display="block" fontFamily="Martel Sans" variant="h5" color="GrayText">
                    {trip.precio}€
                  </Typography>
                </Box>
              </Link>
              :
              console.log()
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box> : console.log()
      ))}
    </Grid>
  );
}

export default function HackATrip(sixTrips) {

  return (
    <Box>
      <TripListItem loading sixTrips={sixTrips}/>
    </Box>
  );
}
