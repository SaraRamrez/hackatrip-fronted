import './NotFoundPage.css'

import Header from '../../components/Header/Header';

import imgSrc from '/Home.jpg'

const NotFoundPage = () => {
    return (
      <>
        <Header imgSrc={imgSrc}/>
        <main>
          <div className="not-found-container">
            <h1 className="notFound">404: Página no encontrada</h1>
            <p id="pNotFound">Vaya... Parece que te han dejado en tierra...</p>
            <div className="gif-container">
              <p id="pNotFound">
                <a id="enlaceNotFound" href="https://gifer.com"></a>
              </p>
            </div>
          </div>
        </main>
      </>
    );
  };
  
  export default NotFoundPage;
  