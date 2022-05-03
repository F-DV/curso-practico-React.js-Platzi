## curso-practico-React.js-Platzi

# Imagenes y Alias en Webpack
- Creamos carpetas de assets
- subdividimos la carpeta en iconos y logos
- Realizamos la configuracion de los rules en webpack.config.js para reconocer este tipo de archivos.
- Configuramos los alias de los styles en webpack.config.js en la parte de resolve.
- importamos en el archivo que lo vayamos a usar de esta manera: import '@styles/Header.scss';
-importamos para el assets que queremos usar:
import menu from '@icons/icon_menu.svg';
- A la hora de llamarlo, lo llamamos con el nombre de la constante entre llaves src={logo}
- En webpack 5 no necesitamos un loader para cargar este tipo de archivos