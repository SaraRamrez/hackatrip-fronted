import toast from 'react-hot-toast';
import { confirmarCoordinador } from '../../services/tripService';
import { useNavigate } from 'react-router-dom';
import './CoordinadoresList.css';

const { VITE_API_URL } = import.meta.env;

const CoordinadoresList = ({ coordinadores, coordinadoresConRating, viajeId, authToken }) => {

  const navigate = useNavigate();

  for (let i = 0; i < coordinadores?.coordinadores.length; i++) {
    for (let j = 0; j < coordinadoresConRating?.coordinadores.length; j++) {
      if (coordinadores.coordinadores[i].username === coordinadoresConRating.coordinadores[j]?.username) {
        coordinadores.coordinadores[i].media = coordinadoresConRating.coordinadores[j].media;
      }
    }
  }

  const handleClick = async (userId) => {
    try {
      const confirm = await confirmarCoordinador(userId, viajeId, authToken);
      toast.success(confirm);
      navigate(`/viaje/${viajeId}`);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    coordinadores?.coordinadores.map((coordinador, index) => (
      <>
        <div className="coordinator-card">
          <img className='coordinator-image' src={coordinador?.avatar ? `${VITE_API_URL}/${coordinador?.avatar}` : '/default-avatar.jpg'} alt={coordinador?.username} />
          <p className="coordinator-username">{coordinador.username}</p>
          <p className="coordinator-media">{coordinador.media ? coordinador.media : "Sin votos"}</p>
          <button className="accept-button" onClick={() => handleClick(coordinador.id)}>
            Aceptar coordinador
          </button>
        </div>
      </>
    ))
  );
};

export default CoordinadoresList;
