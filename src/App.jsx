// Importaciones de los componentes
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';

// Importaciones de las páginas
import HomePage from './pages/HomePage/HomePage';
import TripPage from './pages/TripPage/TripPage';
import ContactPage from './pages/ContactPage/ContactPage';
import LoadPostPage from './pages/LoadPostPage/LoadPostPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ValidateUserPage from './pages/ValidateUserPage/ValidateUserPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage/ChangePasswordPage';
import AdminPage from './pages/AdminPage/AdminPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ErrorBoundary from './components/ErrorBoundary';
import UpdateTripPage from './pages/UpdateTripPage/UpdateTripPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import DestinosPage from './pages/DestinosPage/DestinosPage';
import CoordinadoresPage from './pages/CoordinadoresPage/CoordinadoresPage';
import UsersPage from './pages/UsersPage/UsersPage';
import ReservasPage from './pages/ReservasPage/ReservasPage';
import CommunityPage from './pages/CommunityPage/CommunityPage';

const App = () => {

  const [tripsFiltrados, setTripsFiltrados] = useState(false);

  return (
    <>
      <ErrorBoundary>

        <Toaster
          position='top-center'
          toastOptions={{
            duration: 3000,
          }}
        />
        <Routes>
          <Route
            path='/'
            element={<HomePage
              setTripsFiltrados={setTripsFiltrados}
              tripsFiltrados={tripsFiltrados}
            />}
          />
            
          <Route path='/contact' element={<ContactPage />}/>

          <Route path='/community' element={<CommunityPage />}/>

          <Route
            path='/reservas'
            element={<ReservasPage
              setTripsFiltrados={setTripsFiltrados}
            />}
          />

          <Route
            path='/viaje/:viajeId/loadpost'
            element={<LoadPostPage />}
          />
          <Route
            path='/editar-viaje/:viajeId'
            element={<UpdateTripPage />}
          />
          <Route path='/changepassword' element={<ChangePasswordPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/users/validate/:registrationCode'
            element={<ValidateUserPage />}
          />
          <Route path='/destinos' element={<DestinosPage
              setTripsFiltrados={setTripsFiltrados}
           />} />
          <Route path='/recover' element={<ResetPasswordPage />} />
          <Route path='/profile' element={<UserProfilePage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/viaje/:viajeId' element={<TripPage />} />
          <Route path='/coordinadores/:viajeId' element={<CoordinadoresPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default App;
