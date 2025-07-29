import { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTripService } from '../../services/tripService';

import { AuthContext } from '../../contexts/AuthContext';

const UpdateTripForm = (trip) => {

  const navigate = useNavigate();


  const { authToken } = useContext(AuthContext);

  const params = useParams();

  const viajeId = params.viajeId;

  const startDate = new Date(trip.trip.tripData[0].fechaDeInicio).toISOString().split('T')[0];

  const endDate = new Date(trip.trip.tripData[0].fechaDeFin).toISOString().split('T')[0];

  const [titulo, setTitulo] = useState(trip.trip.tripData[0].titulo);
  const [descripcion, setDescripcion] = useState(trip.trip.tripData[0].descripcion);
  const [destino, setDestino] = useState(trip.trip.tripData[0].destino);
  const [fechaDeInicio, setFechaDeInicio] = useState(startDate);
  const [fechaDeFin, setFechaDeFin] = useState(endDate);
  const [plazasMinimas, setPlazasMinimas] = useState(trip.trip.tripData[0].plazasMinimas);
  const [plazasMaximas, setPlazasMaximas] = useState(trip.trip.tripData[0].plazasMaximas);
  const [itinerario, setItinerario] = useState(trip.trip.tripData[0].itinerario);
  const [lat, setLat] = useState(trip.trip.tripData[0].lat);
  const [lng, setLng] = useState(trip.trip.tripData[0].lng);
  const [precio, setPrecio] = useState(trip.trip.tripData[0].precio);
  const [grupoDeEdad, setGrupoDeEdad] = useState(trip.trip.tripData[0].grupoDeEdad);
  const [activo, setActivo] = useState(trip.trip.tripData[0].activo);
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();

    // Llama a la función onSubmit pasando los datos del formulario
    const message = await updateTripService({
        titulo,
        descripcion,
        destino,
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
        viajeId,
        authToken,
  });

  toast.success(message);
  navigate('/');
  } catch(error){
    toast.error(error.message);
  }
};


  return (
    <div className='create-update-trip-form-container'>
    <form onSubmit={handleSubmit}>
    <div className='create-update-trip-form'>
      <label htmlFor="titulo">Título:</label>
      <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />

      <label htmlFor="descripcion">Descripción:</label>
      <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />

      <label htmlFor="destino">Destino:</label>
      <input type="text" id="destino" value={destino} onChange={(e) => setDestino(e.target.value)} required />

      <label htmlFor="fechaDeInicio">Fecha de inicio:</label>
      <input type="date" id="fechaDeInicio" value={fechaDeInicio} onChange={(e) => setFechaDeInicio(e.target.value)} required />

      <label htmlFor="fechaDeFin">Fecha de fin:</label>
      <input type="date" id="fechaDeFin" value={fechaDeFin} onChange={(e) => setFechaDeFin(e.target.value)} required />

      <label htmlFor="plazasMinimas">Plazas mínimas:</label>
      <input type="number" id="plazasMinimas" value={plazasMinimas} onChange={(e) => setPlazasMinimas(parseInt(e.target.value))} required />

      <label htmlFor="plazasMaximas">Plazas máximas:</label>
      <input type="number" id="plazasMaximas" value={plazasMaximas} onChange={(e) => setPlazasMaximas(parseInt(e.target.value))} required />

      <label htmlFor="itinerario">Itinerario:</label>
      <input type="text" id="itinerario" value={itinerario} onChange={(e) => setItinerario(e.target.value)} required />

      <label htmlFor="latitud">Latitud:</label>
      <input type="number" id="latitud" value={lat} onChange={(e) => setLat(parseFloat(e.target.value))} required />

      <label htmlFor="longitud">Longitud:</label>
      <input type="number" id="longitud" value={lng} onChange={(e) => setLng(parseFloat(e.target.value))} required />

      <label htmlFor="precio">Precio:</label>
      <input type="number" id="precio" value={precio} onChange={(e) => setPrecio(parseInt(e.target.value))} required />

      <label htmlFor="grupoDeEdad">Grupo de edad:</label>
      <input type="text" id="grupoDeEdad" value={grupoDeEdad} onChange={(e) => setGrupoDeEdad(e.target.value)} required />

      <label htmlFor="activo">activo:</label>
      <input type="number" id="activo" value={activo} onChange={(e) => setActivo(parseInt(e.target.value))} required />

      <label htmlFor="Imagen">Portada del viaje:</label>
      <input
      type='file'
      onChange={(e) => setPhoto(e.target.files)}
      accept='image/png, image/jpeg'
      required
  />
  </div>
      <button className='boton-admin' type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default UpdateTripForm;