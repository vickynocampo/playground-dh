//A vincular
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>JS Front</title>
	<script src="script.js"></script>
</head>

<body>
	<p>Podés abrir la consola del navegador para chequear los resultados</p>
</body>

</html>


{/* DOM SELECTORES */}
{/*Manipulando elementos con JavaScript
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.
En este ejercicio debemos:
Crear la variable tituloPelicula.
Almacenar en esa variable el elemento h2 del documento HTML.
Deberemos usar el método del objeto document que nos permita seleccionar la etiqueta <h2> del documento.
 */}
window.addEventListener('load', function() {
  // escribí tu código aquí
  let tituloPelicula = document.querySelector('h2')
});


{/* Manipulando elementos con JavaScript II
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.
En este ejercicio debemos:
Crear la variable parrafos.
Almacenar en esa variable todos los párrafos del documento HTML.
Deberemos usar el método del objeto document que nos permita seleccionar todas las etiquetas <p> del documento. */}
window.addEventListener('load', function() {
  // escribí tu código aquí
let parrafos = document.querySelectorAll('p')
});


{/* Manipulando elementos por id
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

En este ejercicio debemos:

﻿Crear la variable pulpFiction.
Almacenar en esa variable el elemento <h3> con id "pulp-fiction".
Pero ojo, no queremos que utilices el método querySelector()... */}
window.addEventListener('load', function() {
  // escribí tu código aquí
  let pulpFiction = document.getElementById('pulp-fiction')
});

{/* Manipulando elementos por nombre de clase
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

En este ejercicio debemos:

﻿Crear la variable barraDeNavegacion.
Almacenar en esa variable el elemento <ul> con clase "nav-bar".
Pero ojo, no queremos que utilices el método querySelector()... */}
window.addEventListener('load', function() {
  // escribí tu código aquí
  let barraDeNavegacion = document.getElementByClassName('nav-bar')
});
