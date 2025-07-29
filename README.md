# ⚙ Inicialización

- Navegue hasta la carpeta ./client y abra la terminal.

## Paquetes NPM requeridos

- Primero debe instalar los módulos necesarios:

```
npm i
```

## Servidor

-Configure el .env en su carpeta server, tiene un .env.example.
-Para iniciar el servidor:

```
npm run dev
```

## Navegador

-Puede hacer clic en el enlace proporcionado por el terminal para abrir el navegador.
-Alternativamente, abra su navegador favorito e ingrese la dirección que se muestra en la terminal.
-Por ejemplo:

```
http://localhost:8000/
```

## Tech Stack

-Vite: es una herramienta de desarrollo frontend rápida y eficiente que se enfoca en la velocidad. Ofrece tiempos de arranque instantáneos y compila solo lo necesario.

-React: es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y dinámicas en aplicaciones web. Se enfoca en la creación de componentes reutilizables que gestionan su propio estado y se actualizan automáticamente cuando cambian los datos.

-ESLint: es una herramienta de linting para JavaScript que ayuda a identificar y corregir errores, mantener un código consistente y aplicar buenas prácticas de codificación en un proyecto. Utiliza reglas configurables y puede integrarse fácilmente en flujos de trabajo de desarrollo para mejorar la calidad del código.

-Mui: MUI (Material-UI) es una biblioteca de componentes de interfaz de usuario para React que sigue los principios de Material Design de Google. Ofrece componentes personalizables, diseño responsivo y tematización, facilitando la creación de interfaces modernas y accesibles.

-Emotion es una biblioteca de CSS-in-JS para React y JavaScript que permite escribir estilos CSS con JavaScript. Ofrece un rendimiento óptimo y una gran flexibilidad para crear estilos dinámicos y personalizados en las aplicaciones web.


<p align="center">
    <img src="https://skillicons.dev/icons?i=vite,react,eslint" />
</p>

## Rutas

Dentro de nuestra página tenemos las siguientes rutas:

-'/viaje/:viajeId/loadpost': ruta para publicar un post de un viaje ya disfrutado.

-'/changepassword': página para cambiar la contraseña.

-'/register': página para registrarse como usuario.

-'/login': ruta para logearse.

-'/users/validate/:registrationCode': página para validar la cuenta.

-'/recover': ruta por si se te olviada la contraseña.

-'/admin': página de el administrador de la web.

-'/editar-viaje/:viajeId': ruta para editar la información de un viaje.

-'/profile': página del perfil del usuario.

-'/viaje/:viajeId': ruta para consultar todos los viajes.

-'*': página de errores.



