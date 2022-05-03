## curso-practico-React.js-Platzi

# UseEffect y Consumo de APIs
- Vamos a utilizar una API para traer los productos:

- Docs de la API: https://api.escuelajs.co/docs/
- API de Desarrollo: https://api.escuelajs.co/api/v1/products

---------

- useEffect es una manera de que nuestro componente de React, puede recibir nueva info, re-renderizar o cambiar su contenido, cuando una función se haya completado. Es decir, podemos controlar el momento en el cual nuestro componente tome un cierto comportamiento. Por ejemplo, en situaciones como funciones asíncronas ⇒ setTimeout o asyn y await, fetch requests o manipulaciones del DOM

1) Pre-configuración
Instalar axios para realizar peticiones get, también instalar el plugin de babel para manejar el asincronismo:

npm install axios
npm install @babel/plugin-transform-runtime  :sirve para trabajar con async y await

2) Editemos rápidamente .babelrc
"plugins": [
		"@babel/plugin-transform-runtime"
]

