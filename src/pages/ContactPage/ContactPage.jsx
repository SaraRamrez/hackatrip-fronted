import './ContactPage.css'

import Header from '../../components/Header/Header';

import imgSrc from '/Home.jpg'

const ContactPage = () => {

    return (
        <>
        <Header imgSrc={imgSrc}/>
            <main>
                <div className="container">
                <div className="email">
                    <img src="https://s3-alpha-sig.figma.com/img/58a5/0a12/2c11de5e77c611579486086199e5bec0?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZTPLadyW2WyLg69zlxu3hEhsrhnD90-jRnZRnoiVGkmaoIOo91bE00w46zoMCW8SRMu7w~qZndq7ljzR3CJVbLnvdtN2CcgCQ0dI7HZwnfxjRr9H5lO7H~wyyBpZffyUeeYrJbpG83ZwJYGh5uiNpWP52XXQU4ALd3yKZMRs2DxJRZrYsPFPVMu-O~VYWQ2GUGryocDNIRZRKybMD53s48ksoG~QM10mtOvgek9WOQYtRZ57kTvuXGi7C1lLmzmnA4GT48xts1nDGxwbOLE-f8QjQstZTSzASFWMO853ree46bOAJfqWOg4XRyKIrpCMSwrRT~ClxQHqrkkqaX7pdA__" alt="imagen de un sobre representando un email" />
                    <h2>EMAIL</h2>
                    <p>¿Necesitas ayuda con algún viaje?</p>
                    <a href="hola@hackatrip.com">hola@hackatrip.com</a>
                    <p>¿Colaboramos? Mándanos tus ideas</p>
                    <a href="marketing@hackatrip.com">marketing@hackatrip.com</a>
                </div>
                <div className="whatsapp">
                    <img src="https://s3-alpha-sig.figma.com/img/abd7/d5c5/9e8e62e07fa72e771337011be5938e5c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gxObkuFuOuHDq-ArrgH4N8Xl5NMTdswOoq-p421Im1igWC7PocYX6WXnsutGgFYYGZ3whZV8es5vqZkcBoLlf8VsceZSY8D166cMZiC0FSW2Z7qH-cK3Mj~CoqomSvdXdp~kWvvcXRhDnq5yCBrRlOxvf8eMx8LjRk-JZdIwq1Z9PxDMla7f4BPIm1ixAQGFKQhAPCr7-fxfa7AmXnh7yWblNjdZP1zeA3XJtk5UzUHVGOyR0QW6TYnkpsWkJerNOT2t6kRPHMlrV2N0GGLsRBlA8sUneH35wgs-p1JQ~ietzp3R~MWJwNhQ5FYNFlAW979X~7a1KoP6~SAYdKMLVA__" alt="imagen de logo de whatsapp" />
                    <h2>WHATSAPP</h2>
                    <p>Escríbenos y te respondemos</p>
                    <p>(de 10:00 a 20:00)</p>
                    <a href="https://wa.me/34654321012">+34 65321012</a>
                </div>
                <div className="telefono">
                    <img src="https://s3-alpha-sig.figma.com/img/5969/14c1/4df84fabff44f7d271f3d720b8e7040e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MaHM8PDIE4C56HCvg81H3AFDhDl0kuz5WYdLraioGO28ODX~wBQhBMfTm2ktovM4t355gw5xpcDlKMvnp3Lm9acQgS0HRZLMiG0vQ1clnY0AiXgmMgZmKszkCS60qCWpjtpIJbMdBKyJXqG2StLEx3fi72Q5ad1Zbk42XdJi~4xGzQeoq6gOBie-8Xf5Yyt78DH2fwIqHSq0ncAgrR9KmBp8lHHsQh3waOgabeWODsuIRdPdnZ2wOlLNzmq8U8B0ZWuh6nqSwSEDGzd33wH8ILYr5~qJwxw0AYfp5n793N9-5Dq3tpOPm3l9xuCywSzXptaOGg9yJ-5tWDAwC3MZlQ__" alt="logo de un teléfono" />
                    <h2>TELEFONO</h2>
                    <p>Si lo prefieres, llámanos, de lunes a viernes</p>
                    <p>(de 10:00 a 20:00)</p>
                    <a href="tel:+3465321012">+34 65321012</a>
                </div>
                </div>
            </main>
        </>
    );

};

export default ContactPage;