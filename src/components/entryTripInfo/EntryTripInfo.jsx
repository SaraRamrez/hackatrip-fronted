import PropTypes from 'prop-types';
import './EntryTripInfo.css';

const { VITE_API_URL, VITE_GOOGLE_MAPS_API_KEY, VITE_MAP_ID } = import.meta.env;

import { bookTripService, applyAsCoordinador } from '../../services/tripService';

import toast from 'react-hot-toast';

import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow, } from "@vis.gl/react-google-maps"
import { useState } from 'react';

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

const TripInfo = ({
  destino,
  titulo,
  descripcion,
  fechaDeInicio,
  fechaDeFin,
  plazasMinimas,
  plazasMaximas,
  itinerario,
  lat,
  lng,
  precio,
  grupoDeEdad,
  photo,
  activo,
  confirmado,
  id,
  authToken,
  authUser,
  viajeId,
  reservedByMe,
}) => {
  const handleClick = async (e) => {
    try {
      e.preventDefault();

      const book = await bookTripService(id, authToken);

      toast.success(book);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleClick2 = async (e) => {
    try {
      e.preventDefault();

      const coordinador = await applyAsCoordinador(viajeId, authUser?.id, authToken);

      toast.success(coordinador);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const position = { lat: lat, lng: lng};

  const [open, setOpen] = useState(false)

  return (
    <form>
      <div className='entry-header'>
        <div className='title-container'>
          <h1 className='title'>{titulo}</h1>
        </div>

        <div className='extra-content'>
          <h2>Apúntate a este viaje </h2>
          <div className='frasesExtraContent'>
            <p className='viviras'>
              Vivirás experiencias únicas con gente de tu edad
            </p>
            <p className='nuevos'>Nuevos amigos para siempre</p>
            <p className='acompañado'>
              Acompañado de un coordinador experimentado en la zona
            </p>
            <p className='recuerdos'>Recuerdos para toda la vida</p>
            <div className='button-container'></div>
            {reservedByMe ?
              <button className='signup-button'>
                ¡Gracias por confiar en nosotros!
              </button>
            :
              <button onClick={handleClick} className='signup-button'>
                Apuntarme
              </button>}
            {authUser?.role === "coordinador" ? 
              <button onClick={handleClick2} className='signup-button'> Apuntarme como coordinador </button> : console.log()}
          </div>
        </div>

        <div className='place-overlay'>
          <strong></strong> {destino}
        </div>

        <div className='dates-overlay'>
          <span className='fecha-in'>{formatDate(fechaDeInicio)}</span>
          <span>-</span>
          <span className='fecha-fin'>{formatDate(fechaDeFin)}</span>
        </div>
      </div>

      <div className='edad'>
        <strong>Grupo de edad:</strong> {grupoDeEdad}
      </div>

      <ul className='entry-details'>
        <li className='descripcion'>
          <strong></strong> {descripcion}
        </li>

        <img
          src={`${VITE_API_URL}/${photo}`}
          alt={`Foto de ${destino}`}
          className='entry-image'
        />
        <li className='itinerary'>
          <h2>Itinerario</h2>
          <div className='route'>
            <strong></strong> {itinerario}
          </div>
        </li>
        <li className='hidden'>
          <strong>Plazas mínimas:</strong> {plazasMinimas}
        </li>
        <li className='hidden'>
          <strong>Plazas máximas:</strong> {plazasMaximas}
        </li>
        
        <APIProvider apiKey={VITE_GOOGLE_MAPS_API_KEY}>
          <div style={{height: "40vh", width: "30vw", marginLeft: "95px", border: "solid", borderRadius: "5px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
            <Map defaultZoom={6} defaultCenter={position} mapId={VITE_MAP_ID}>
              <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                <Pin background={"lightblue"} borderColor={"black"} glyphColor={"black"}/>
              </AdvancedMarker>
              {open && (
                <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                  <p>Hotel</p>
                </InfoWindow>
              )}
            </Map>
          </div>
        </APIProvider>

        <div className='price-overlay'>
          <strong>Precio:</strong> {precio} €
        </div>

        <li className='hidden'>
          <strong></strong> {activo}
        </li>
        <li className='hidden'>
          <strong></strong> {confirmado}
        </li>
      </ul>
    </form>
  );
};

TripInfo.propTypes = {
  destino: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  fechaDeInicio: PropTypes.string.isRequired,
  fechaDeFin: PropTypes.string.isRequired,
  plazasMinimas: PropTypes.number.isRequired,
  plazasMaximas: PropTypes.number.isRequired,
  itinerario: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  grupoDeEdad: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  activo: PropTypes.number.isRequired,
  confirmado: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  authToken: PropTypes.string,
  authUser: PropTypes.object,
  viajeId: PropTypes.string,
};

export default TripInfo;
