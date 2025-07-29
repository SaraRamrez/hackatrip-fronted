import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import UserProfileForm from '../../forms/UserProfileForm/UserProfileForm';

const { VITE_API_URL } = import.meta.env;

import Header from '../../components/Header/Header';

import imgSrc from '/Home.jpg'

const UserProfilePage = () => {
    const { authUser, authEditUser, authEditUserAvatar, authLoading } =
        useContext(AuthContext);

    return (
        <>
            <Header imgSrc={imgSrc}/>
            <main>
                {authUser && (
                    <>
                        <h2 className='h2'>Perfil</h2>

                        <div className='avatar'>
                            <img
                            src={
                                authUser.avatar
                                    ? `${VITE_API_URL}/${authUser.avatar}`
                                    : '/default-avatar.jpg'
                                }
                            alt={`Avatar de ${authUser.username}`}
                            />
                        </div>

                        <UserProfileForm
                        authUser={authUser}
                        authEditUser={authEditUser}
                        authEditUserAvatar={authEditUserAvatar}
                        authLoading={authLoading}
                        />
                    </>
                )}
            </main>
        </>
    );
};

export default UserProfilePage;
