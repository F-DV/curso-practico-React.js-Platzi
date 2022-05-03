## curso-practico-React.js-Platzi

# ReactContext
# useContext
Context es una herramienta para pasar propiedades en un arbol de componentes de arriba hacia abjo sin tener que pasar por componentes intermedios.

Par usar context debemos importar dos cosas:
createContext -> Permite crear el contexto
useContext -> Este hook nos va permitir uusar contextos dentro de los componentes

1) Creamos Carpeta para el Context
2) Creamos AppContext que utiliza React.createContext
3) Envolvemos todos los Componentes en App que queremos que utilizen los value.
4) Creamos un Custom Hook para crear un estado inicial y la funcion de agregar al carrito.
5) Proporcionamos el initialState al provider
6) En el ProductItem le damos a funcionalidad al agregar al carrito.

-----------
# Completnado el carrito de compras
7) Creamos la constante para el contexto
8) Configuramos el Header para mostrar los items que hay en el carrito

