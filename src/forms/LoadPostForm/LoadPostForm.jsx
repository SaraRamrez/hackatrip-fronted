import { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadPostService } from '../../services/tripService.js';
import { AuthContext } from '../../contexts/AuthContext';
import './LoadPostForm.css'

const LoadPostForm = () => {

  const { authToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const [title, setTitulo] = useState('');

  const [descripcion, setDescripcion] = useState('');

  const [photo, setPhoto] = useState('');

  const [value, setValue] = useState('');

  const [imagePreview, setImagePreview] = useState(null);

  const params = useParams();

  const viajeId = params.viajeId;

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();

    // Llama a la función onSubmit pasando los datos del formulario
    const message = await LoadPostService(
      title,
      descripcion,
      photo,
      value,
      viajeId,
      authToken,
  );

  toast.success(message);
   navigate(`/viaje/${viajeId}`);
  } catch(error){
    toast.error(error.message);
  }
};

const handlePhotoChange = (e) => {
  const file = e.target.files[0];
  setPhoto(file); // Actualiza el estado de la foto
  // Lee la imagen y muestra la vista previa
  const reader = new FileReader();
  reader.onload = () => {
    setImagePreview(reader.result);
  };
  reader.readAsDataURL(file);
};


  return (
    <div className='load-post-form-container'>
    <h2 className="load-post-form-title">Sabemos que te encanta viajar, comparte con nosotros tu experiencia</h2>
          <p className="load-post-form-description">Aquí puedes contar tus aventuras, experiencias, y detalles de los viajes que hayas hecho con nosotros, y compartirlas con toda la comunidad, siéntete libre de contar todo lo que quieras y acompáñalo de las mejores fotos y momentos del viaje.</p>
    <form onSubmit={handleSubmit}>
    <div className='create-update-trip-form'>
  <input
    type='file'
    id="photo-upload-button"
    onChange={handlePhotoChange}
    accept='image/png, image/jpeg'
    required
  />
  {/* Muestra la vista previa de la imagen dentro del contenedor si existe */}
  {imagePreview && (
    <div className='imagen-container'>
      <img src={imagePreview} alt="Vista previa de la imagen"/>
    </div>
  )}
      <label htmlFor="tittle">Título:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitulo(e.target.value)} required />

      <label htmlFor="descripcion">Descripción:</label>
      <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />

      <label htmlFor="descripcion">Nota del viaje (1-5):</label>
      <textarea id="descripcion" value={value} onChange={(e) => setValue(e.target.value)} required />

      
  </div>
      <button className='boton-admin' type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default LoadPostForm;
