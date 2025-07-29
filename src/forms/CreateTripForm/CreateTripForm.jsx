import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './CreateTripForm.css';

const CreateUpdateTripForm = ({ createTripService, authToken }) => {

  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [destino, setDestino] = useState('');
  const [fechaDeInicio, setFechaDeInicio] = useState('');
  const [fechaDeFin, setFechaDeFin] = useState('');
  const [plazasMinimas, setPlazasMinimas] = useState(0);
  const [plazasMaximas, setPlazasMaximas] = useState(0);
  const [itinerario, setItinerario] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [precio, setPrecio] = useState('');
  const [grupoDeEdad, setGrupoDeEdad] = useState('');
  const [activo, setActivo] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();

    // Llama a la función onSubmit pasando los datos del formulario
    const message = await createTripService({
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
      activo,
      photo,
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

      <label htmlFor="grupoDeEdad">Grupo de edad (25-35/36-45):</label>
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

CreateUpdateTripForm.propTypes = {
  createTripService: PropTypes.func.isRequired,
  authToken: PropTypes.string.isRequired,
};

export default CreateUpdateTripForm;