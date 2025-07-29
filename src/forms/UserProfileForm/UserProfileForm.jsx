import PropType from 'prop-types';
import { useState } from 'react';
import './UserProfileForm.css';

const UserProfileForm = ({
    authUser,
    authEditUser,
    authEditUserAvatar,
    authLoading,
}) => {
    const [username, setUsername] = useState(authUser.username);
    const [email, setEmail] = useState(authUser.email);
    const [avatar, setAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [password, setPassword] = useState('');

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
        setAvatarPreview(URL.createObjectURL(file));
    };

    const handleAvatarSubmit = (e) => {
        e.preventDefault();
        authEditUserAvatar(avatar);
    };

    const handleUsernameEmailSubmit = (e) => {
        e.preventDefault();
        authEditUser(username, email, password);
    };

    return (
        <>
            <h2 className='h2'>Cambia tu avatar</h2>
            <form className="form" onSubmit={handleAvatarSubmit}>
                <input
                    type='file'
                    className='file-input'
                    onChange={handleAvatarChange}
                    accept='image/png, image/jpeg'
                    required
                />
                {avatarPreview && <img src={avatarPreview} alt="Avatar Preview" className="avatar-preview" />}
                <button>Editar</button>
            </form>

            <h2 className='h2'>Modifica tus datos</h2>
            <form className='form' onSubmit={handleUsernameEmailSubmit}>
                <label htmlFor='username'>Usuario:</label>
                <input
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete='username'
                />

                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='email'
                />

                <label htmlFor='pass'>Contraseña:</label>
                <input
                    type='password'
                    id='pass'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='password'
                    required
                />

                <button disabled={authLoading}>Editar</button>
            </form>
        </>
    );
};

// Validamos las props.
UserProfileForm.propTypes = {
    authUser: PropType.object.isRequired,
    authEditUser: PropType.func.isRequired,
    authEditUserAvatar: PropType.func.isRequired,
    authLoading: PropType.bool.isRequired,
};

export default UserProfileForm;
