# Postwork React

## Equipo 
1. Andrea Paulina Rivera Aguilar
2. Alejandro Saldana Contreras


## Proyecto
![logo](./public/imagenes/logo-black.png)


## ⚙Desarrollo
El proyecto esta desarrollado en React, utilizando funcionalidades como el uso de componentes, routing, estados, contextos, entre otras cosas. Se trata de una aplicacion de venta de alimentos en linea. 

##### 🧩Components 
En esta carpeta se encuentran los componentes funcionales y reutilizables dentro de la aplicacion, en este caso contamos con el modal para carrito de compras, y el menu de alimentos.

#### 🤷‍♀️Contexts 
La aplicacion tiene dos contextos necesarios para su funcionamiento, el contexto del menu que consume la base de datos remota, y el contexto de estado donde se almacenaron las variales necesarias para la app como el carrito, el estado del modal.

#### 🎣Hooks
Se creo un Hook personalizado para realizar las peticiones Http.

#### 📓Pages
Aqui se encuentran las 4 principales paginas de nuestra aplicacion, estas utilizan los componentes para crear vistas completas. Se trata de Checkout, Meal, Menu y NotFound.

#### 🚪Portals 
Dos componentes que se crearon en el DOM principal y se llaman utilizando portals en ciertos puntos del funcionamiento de la aplicacion.

#### 👾Reducers
Aqui se declara el estado inicial de la aplicacion, y las acciones que se pueden ejecutar dentro de la apliacion.

#### 💇‍♂️Styles
Contiene todos los CSS Modules para estilizar componentes que se crearon para el aspecto visual de la aplicacion.

#### 💻UI
Componentes visuales que se reutilizan en toda la aplicacion.


## ✅Testing
Dentro de la carpeta src del proyecto se encuentra una subcarpeta test sobre la cual se crearon algunas pruebas unitarias para las cuatro paginas que tiene la aplicacion. 

 


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


