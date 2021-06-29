#marvelproject



<h2>Proyecto de buscador utilizando React-app con un API </h2> 

<h1> Objetivos: </h1>

- Las peticiones se tienen que realizar a la siguiente URL: http://gateway.marvel.com/v1/  ☑️
- El buscador tiene que tener la posibilidad de buscar los nombres de los Personajes de Marvel en el input pero también por URL.  ☑️

- Cuando se entra la primera vez en la app web sin ningún personaje en la URL tiene que mostrar un personaje aleatorio y así por cada vez que vuelva a recargar la página.

- La búsqueda tiene que contemplar buscar por similitudes de texto y parecidos de nombre, es decir, con solo buscar “spider” debería de renderizar todas las posibilidades y matches que abarcan.  ☑️

- La búsqueda tiene que tener la posibilidad de buscar por comic directamente también y si es un link que viene directamente de la página de marveltiene que visualizar un preview del cómic.
La manera que se mostrarán las búsquedas serán en forma de cards y modales para el detalle del personaje con sus comics.  ☑️
- Al clickear un card debería ir al detalle del personaje y mostrar un listado de sus cómics ordenados por fecha.
- El buscador de marvel tiene que contemplar que por la búsqueda de la URL se pueda hacer búsqueda de los personajes mediante query strings en la url del sitio,y debe renderizar el card que al clickearse solo debe de aparecer el comic que fue buscado(este feature debe de soportar más de un cómic por URL, así como más de un personaje)
- La búsqueda tiene que poder guardarse en un listado de favoritos y que persista en el browser para que pueda ser usada en un futuro solo dandole click a la lista de búsquedas favoritas el cual tiene la estrella en la esquina superior derecha del input de búsqueda.

<h2>Log de commits realizados </h2>

- commit 0ae10bc66a18be0494b731993ab907861d0d193d - Sun Jun 27 2021

feat:search bar and css effects

- commit e5b596cf925167ba16212cc9891dad9751fb1053 - Wed Jun 16 2021

fix: reduccion resultados fetch

- commit 866db72cae52a330719d59daecf614c8bc3e4a21 -  Mon Jun 14 2021

feat:imagenes cargadas junto con el nombre

- commit 6f7d0da8ae905eb134f430098142f1bfa941118b -  Mon Jun 14 2021

fix:API with characters

- commit 9f976316036489e9e5ebbe02f3e235a81a965ccc -  Tue Jun 8 2021

Feat: feat:barra navegadora

- commit: 02f2f9f48cee4435e3b121c92da932e3da1cb6fd - Sat Jun 5 2021

- commit: 2420dc38a3f3b7fbbc87e50ba412b43f4b03542b

Feat:setup project




