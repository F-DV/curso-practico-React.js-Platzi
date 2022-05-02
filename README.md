## curso-practico-React.js-Platzi

-> Virtual DOM, jsx, Estado, ciclo de vida
- Proyecto en Figma que se realizará 

https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=0%3A2&amp%3Bscaling=scale-down&amp%3Bpage-id=0%3A1&amp%3Bstarting-point-node-id=0%3A719

-https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=5%3A2808&amp%3Bscaling=scale-down&amp%3Bpage-id=0%3A998&amp%3Bstarting-point-node-id=5%3A2808
----------------------------

# Configuracion Inicial para Proyecto con React
- carpeta
- git init
- npm init
- npm install react react-dom
- Carpeta src,public
- Archivos components/App,jsx , src/index.js , public/index.html

---------------------------

# Configuracion Webpack y Babel
-  npm install @babel/core @babel/preset-env @babel/preset-react
-  npm intall webpack webpack-cli webpack-dev-server
-  npm install babel-loader html-loader html-webpack-plugin
- Creamos archivos necesarios: 
- .babelrc : la configuracion para que babel reconozca los presets
- webpack.config.js : Se realiza configuración
- Agregamos los scrips en package.json:
    "start": "webpack serve --open",
    "build": "webpack --mode production"
