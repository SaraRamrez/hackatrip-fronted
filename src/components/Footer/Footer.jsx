import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo-container'>
        <img
          className='logo2'
          src='/Logo Color (sombra interior).png'
          alt='Logotipo'
        />
      </div>
      <div className='footer__content'>
        <div className='footer__nav'>
          <ul className='footer__nav-list'>
            <li className='footer__nav-item'>
              <a href='/services'>DESTINOS</a>
              <ul className='footer__destinations'>
                <li><a href='/north-america'>América del Norte</a></li>
                <li><a href='/latin-america'>Latinoamérica</a></li>
                <li><a href='/africa'>África</a></li>
                <li><a href='/middle-east'>Oriente Medio</a></li>
                <li><a href='/asia'>Asia</a></li>
                <li><a href='/europe'>Europa</a></li>
                <li><a href='/northern-europe'>Norte de Europa</a></li>
                <li><a href='/spain-portugal'>España y Portugal</a></li>
              </ul>
            </li>
            <li className='footer__nav-item'>
              <a href='/services'>COORDINADORES</a>
              <ul className='footer__destinations'>
                <li><a href='/nuestros-coordinadores'>Nuestros coordinadores</a></li>
                <li><a href='/hazte-coordinador'>Hazte coordinador</a></li>
                <li><a href='/area-privada-coordinadores'>Área privada coordinadores</a></li>
                <li><a href='/bootcamp'>Bootcamp</a></li>
              </ul>
            </li>
            <li className='footer__nav-item'>
              <a href='/comunidad-social'>COMUNIDAD & SOCIAL</a>
              <ul className='footer__destinations'>
                <li><a href='/instagram'>Instagram</a></li>
                <li><a href='/tiktok'>TikTok</a></li>
                <li><a href='/telegram'>Telegram</a></li>
                <li><a href='/youtube'>Youtube</a></li>
                <li><a href='/facebook-group'>Facebook Group</a></li>
                <li><a href='/comunidad-hackatrip'>Comunidad Hackatrip</a></li>
              </ul>
            </li>
            <li className='footer__nav-item'>
              <a href='/informacion'>INFORMACIÓN</a>
              <ul className='footer__destinations'>
                <li><a href='/contacto'>Contacto</a></li>
                <li><a href='/faqs'>FAQs</a></li>
              </ul>
            </li>
            <li className='footer__nav-item'>
              <a href='/legal'>LEGAL</a>
              <ul className='footer__destinations'>
                <li><a href='/terminos-y-condiciones'>Términos y condiciones</a></li>
                <li><a href='/condiciones-generales'>Condiciones generales</a></li>
                <li><a href='/politica-de-cancelacion'>Política de cancelación</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='footer__social'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src='/Facebook.png' alt='Facebook' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src='/gorjeo.png' alt='Twitter' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src='/Instagram.png' alt='Instagram' />
          </a>
        </div>
        <div className='footer__rights'>
          <p>&copy; 2024 HACKATRIP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
