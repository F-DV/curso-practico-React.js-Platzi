## curso-practico-React.js-Platzi

# useRef y Formularios
# Características y diferencias entre useRef y useState
- Es una forma mucho mas amigable de trabajar la entrada en los inputs. Es una alternativa al onChange 

- useRef es un hook utilizado para obtener una referencia a los datos de un objeto con información mutable. Es decir, es como una manera de siempre poder obtener los datos mas recientes mediante referencia de algún objeto de html. En este caso referenciamos a los valores recientes de un formulario. Dos características importantes de useRef es que los datos son persistentes en caso de que se re-renderice el componente. Así como también, actualizar los datos de esta referencia no causan el re-render. Cabe recalcar la diferencia con useState, que la actualización de datos es síncrona, ya además como hemos mencionado, no se re-renderiza.

- importamos y creamos constante form
- Esta constante la ponemos a escuchar la referencia del <form>
- cremos objeto FormData que es una funcion de javascript para tratar datos de forma segura y le pasamos como parametro los valores de form
- creamos objeto para extraer los datos.
- los inputs deben detener un nombre con name

-Lectura FromData: https://developer.mozilla.org/en-US/docs/Web/API/FormData