import FilterTrips from '../FilterTrips/FilterTrips';
import PropType from 'prop-types';

import './Home.css';

const Home = ({tenTrips, loading}) => {

    return (
        <>
            <div className='saber-mas'>
                <img
                className='img-grande'
                src='/Saber mas.png'
                alt='saber mas'
                />
                <button className='botonSaberMas'>¡Saber más!</button>
            </div>
        
            <div className='comunity'>
                <p>
                Comparte tus vivencias en Hackatrip con nosotros y con el resto de
                viajeros
                </p>
                <div className='botones'>
                <button className='facebook'>
                    Grupo de Facebook
                    <img
                    className='iconFacebook'
                    src='/Facebook.png'
                    alt='Logo de Facebook'
                    />
                </button>
                <button className='comunidad'>Únete a la comundad HAT</button>
                <button className='instagram'>
                    Síguenos en Instagram
                    <img
                    className='iconInstagram'
                    src='/Instagram.png'
                    alt='Logo de Instagram'
                    />
                </button>
                </div>
            </div>
        
            <div className='frases'>
              <div className='como frase-container'>
                <img src='/como.jpg' alt='' className='frase-img' id='como'/>
                <h2 className='tituloFrase'>¿Cómo viajamos?</h2>
                <p className='textoFrase'>Te atreves a ir solo, pero vuelves con amigos tan viajeros como tú</p>
              </div>
              <div className='quien frase-container'>
                <img src='/quien.jpg' alt='' className='frase-img' id='quien'/>
                <h2 className='tituloFrase'>¿Quien lidera nuestras aventuras?</h2>
                <p className='textoFrase'>Un coordinador, de tu edad, y experimentado en viajes por todo el mundo ayudará a que tu experienca sea perfecta</p>
              </div>
              <div className='que frase-container'>
                <img src='/que.jpeg' alt='' className='frase-img' id='que'/>
                <h2 className='tituloFrase'>¿Qué vas a vivir?</h2>
                <p className='textoFrase'>Una aventura que va sacarte de tu zona de confort, hacia el lado bueno. Una historia que contar a todo el mundo, y una experencia irrepetible pero que te hará querer repetir</p>
              </div>
              <div className='sostenible frase-container'>
                <img src='/sostenible.jpg' alt='' className='frase-img' id='sostenible'/>
                <h2 className='tituloFrase'>Turismo sostenible</h2>
                <p className='textoFrase'>Trabajamos solo con empresas locales, que respeten el medio ambiente, el bienestar animal y las costumbres del lugar.</p>
              </div>
            </div>
        
            <h2 className='textoProximos'>Nuestros Proximos viajes:</h2>
            <FilterTrips loading={loading} trips={tenTrips} />
        </>
    );
}

Home.propTypes = {
  tenTrips: PropType.array.isRequired,
  loading: PropType.bool.isRequired,
};

export default Home;