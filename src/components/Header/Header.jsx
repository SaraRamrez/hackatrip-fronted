import PropType from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import './Header.css';

const Header = ({ setTripsFiltrados, imgSrc }) => {
  const { authUser, authLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  //const [searchParams, setSearchParams] = useSearchParams();

  const goToHome = () => {
    if (setTripsFiltrados) {
      setTripsFiltrados(false);
    }
    navigate('/');
  };

  return (
    <header className='header'>
      <img className='imgheader' src={imgSrc} alt='Home' />
      <nav className='nav-container'>
        <div htmlFor='show-menu'>
          <img
            onClick={goToHome}
            className='logo1'
            src='/Logo Blanco (sombra interior).png'
            alt='Logotipo'
          />
        </div>

        <ul className='nav-menu'>
          <li>
            <a href='#fechas'>Fechas</a>
          </li>
          <li>
            <a href='/destinos'>Destinos</a>
          </li>
          <li>
            <a href='/community'>Comunidad</a>
          </li>
          <li>
            <a href=''>Grupos de Edad</a>
            <ul>
              <li>
                <a href='/?grupoDeEdad=25-35'>25-35</a>
              </li>
              <li>
                <a href='/?grupoDeEdad=36-45'>36-45</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='/contact'>Contacto</a>
          </li>
        </ul>

        <ul className='nav-links'>
          {!authUser ? (
            <>
              <li>
                <button><NavLink to='/register'>Registro</NavLink></button>
              </li>
              <li>
                <button><NavLink to='/login'>Login</NavLink></button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button>
                  <NavLink to='/profile'>{authUser.username}</NavLink>
                </button>
              </li>
              {authUser?.role != 'admin' ? (
                <>
                  <li>
                    <button>
                      <NavLink to='/reservas'>Viajes disfrutados</NavLink>
                    </button>
                  </li>
                </>
                ) : (
                  console.log()
                )}
              <li>
                <button onClick={authLogout}>Cerrar sesión</button>
              </li>
            </>
          )}
          {authUser?.role === 'admin' ? (
            <>
              <li>
                <button>
                  <NavLink to='/admin'>Crear Viaje</NavLink>
                </button>
              </li>
              <li>
                <button>
                <NavLink to='/users'>Lista de Usuarios</NavLink>
                </button>
              </li>
            </>
          ) : (
            console.log()
          )}
        </ul>
      </nav>

      <div className='contenedorFrasePortada'>
        {/* {searchParams.get('destino') ? (
          <p className='frasePortada'>{searchParams.get('destino')}</p>
        ) : (
          <p className='frasePortada'>
            Viajar es la única cosa que compras y te hace más rico
          </p>
        )} */}
        <p className='frasePortada'>
          Viajar es la única cosa que compras y te hace más rico
        </p>
      </div>
    </header>
  );
};

Header.propTypes = {
  setTripsFiltrados: PropType.func,
};

export default Header;
