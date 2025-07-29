import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { promocionarACoordinador } from '../../services/userService';
import './UsersList.css'

const { VITE_API_URL } = import.meta.env;

const UsersList = ({ usuarios, authToken }) => {
    const navigate = useNavigate();

    const handleClick = async (userId) => {
        try {
          const confirm = await promocionarACoordinador(userId, authToken);
          toast.success(confirm);
          navigate('/');
        } catch (err) {
          toast.error(err.message);
        }
    };

    return (
        usuarios?.map((usuario, index) => (
            usuario.role === "normal" ?
            <>
                <div className="user-card">
                    <img className='user-image' src={usuario?.avatar ? `${VITE_API_URL}/${usuario?.avatar}` : '/default-avatar.jpg'} alt={usuario?.username} />
                    <p className="username">{usuario.username}</p>
                    <p className="email">{usuario.email}</p>
                    <button className="promote-button" onClick={() => handleClick(usuario.id)}>Promocionar a coordinador</button>
                </div>
            </>
            :
            <>
                <div className="user-card">
                    <img className='user-image' src={usuario?.avatar ? `${VITE_API_URL}/${usuario?.avatar}` : '/default-avatar.jpg'} alt={usuario?.username} />
                    <p className="username">{usuario.username}</p>
                    <p className="email">{usuario.email}</p>
                    <p className="role-info">Este usuario ya es coordinador o admin</p>
                </div>
            </>
        ))
    );
};

export default UsersList;
