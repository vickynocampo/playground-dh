//A vincular
< !DOCTYPE html >
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

{/* DOM SELECTORES */ }
{/*Manipulando elementos con JavaScript
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.
En este ejercicio debemos:
Crear la variable tituloPelicula.
Almacenar en esa variable el elemento h2 del documento HTML.
Deberemos usar el método del objeto document que nos permita seleccionar la etiqueta <h2> del documento.
 */}
window.addEventListener('load', function () {
  // escribí tu código aquí
  let tituloPelicula = document.querySelector('h2')
});

{/* Manipulando elementos con JavaScript II
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.
En este ejercicio debemos:
Crear la variable parrafos.
Almacenar en esa variable todos los párrafos del documento HTML.
Deberemos usar el método del objeto document que nos permita seleccionar todas las etiquetas <p> del documento. */}
window.addEventListener('load', function () {
  // escribí tu código aquí
  let parrafos = document.querySelectorAll('p')
});

{/* Manipulando elementos por id
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.
En este ejercicio debemos:
﻿Crear la variable pulpFiction.
Almacenar en esa variable el elemento <h3> con id "pulp-fiction".
Pero ojo, no queremos que utilices el método querySelector()... */}
window.addEventListener('load', function () {
  // escribí tu código aquí
  let pulpFiction = document.getElementById('pulp-fiction')
});

{/* Manipulando elementos por nombre de clase
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.
En este ejercicio debemos:
﻿Crear la variable barraDeNavegacion.
Almacenar en esa variable el elemento <ul> con clase "nav-bar".
Pero ojo, no queremos que utilices el método querySelector()... */}
window.addEventListener('load', function () {
  // escribí tu código aquí
  let barraDeNavegacion = document.getElementByClassName('nav-bar')
});

{/* Modificando el DOM */ }
{/* Sumando texto a un elemento con contenido
El subtítulo del <h3> nos quedó corto y queremos agregar un pequeño texto al final del mismo usando JavaScript.
Para eso debemos, usando el método innerText, seleccionar la etiqueta <h3> y sumarle el texto "usando código" al final.
No olvidemos agregar el espacio correspondiente para que no queden los textos encimados. Deberemos ver en el navegador el siguiente resultado:
Javascript Front
﻿Agregando contenido usando código */}
window.addEventListener('load', function () {
  // escribí tu código aquí
  document.querySelector("h3").innerText += ' usando código'
});

{/* Agregando etiquetas
¡Agreguemos etiquetas!
Para este ejercicio queremos:
Seleccionar la etiqueta <body> usando querySelector()
Agregar la siguiente etiqueta tal cual está: <mark>Javascript ROCKS</mark>
Pero ojo: el <body> ya tiene las etiquetas <h1> y <h3> definidas y no queremos que se borren. */}
window.addEventListener('load', function () {
  // escribí tu código aquí
  document.querySelector('body').innerHTML += '<mark>Javascript ROCKS</mark>'
});
{/* 
Modificando estilos
Veamos cómo alterar los estilos de un documento HTML usando JavaScript.
Para este ejercicio debemos:
﻿Seleccionar el <body> y asignarle el color 'lightskyblue' para el fondo.
Seleccionar el <h2> y centrarlo con la propiedad text-align.
Seleccionar el <h4> y cambiar el texto a itálica con la propiedad font-style. */}
window.addEventListener('load', function () {

  // escribí tu código aquí
  document.querySelector('body').style.backgroundColor = 'lightskyblue';
  document.querySelector('h2').style.textAlign = 'center';
  document.querySelector('h4').style.fontStyle = 'italic';
});

{/* ¡Modificando estilos a varios elementos a la vez!
Intentemos cambiarle el estilo a muchos elementos a la vez.
Recordemos el querySelectorAll(). Este método nos devolvía algo similar a un array...
Para este ejercicio queremos:
﻿Crear la variable libros.
Almacenar en esa variable todos los <li> usando querySelectorAll()
Dentro del ciclo for of que está definido en el archivo, asignarle a cada libro el color 'orange', usando la propiedad color. */}
window.addEventListener('load', function () {
  // escribí tu código aquí 
  let libros = document.querySelectorAll('li');
  for (let libro of libros) {
    // escribí tu código aquí
    libro.style.color = 'orange'
  }
});

{/* Modificando Clases] */ }
{/* Agregando clases a un elemento
Para este ejercicio contamos con un pequeño sitio y una clase de CSS definida, pero todavía no se le asignó a ningún elemento.
Por eso debemos, usando JavaScript, seleccionar al <div> y asignarle la clase 'container' que ya se encuentra definida en el archivo styles.css. */}
window.addEventListener('load', function () {
  // escribí tu código aquí
  document.querySelector('div').classList.add('container');
});
{/* 
Sacando clases a un elemento
Tenemos un <h1>, pero no nos gusta cómo se ve.
Queremos, usando JavaScript, seleccionar al <h1> y sacarle la clase 'titulo'.
Sugerencia: enviar la respuesta sin resolver, así se puede visualizar la diferencia una vez que se resuelva el ejercicio. */}
window.addEventListener('load', function () {
  // escribí tu código aquí
  document.querySelector('h1').classList.remove('titulo');
});

{/* Alternando clases
A ciegas...
Tenemos un sitio con algunos elementos y clases asignadas, pero no tenemos acceso al HTML, por lo tanto no podemos ver qué clases tiene cada elemento.
En este caso, queremos trabajar con la clase titulo-tuneado. Para eso debemos, usando JavaScript, preguntar si <h1> el tiene esa clase asignada para que, si no la tiene, se la asigne y, si la tiene, se la quite. */}
window.addEventListener('load', function () {
  // escribí tu código aquí
  document.querySelector('h1').classList.toggle('titulo-tuneado')
});

{/* Desafío: ¡ups cometimos un error!
Nos dimos cuenta que dentro del documento HTML, un título quedó con errores de ortografía. Actualmente dice: Vienbenidos a mi zitio Wet.
Nuestra misión será ajustar el texto de este título y corregir este "horror" ortográfico. Tengamos presente que el título tiene el nombre de clase "title" y lo queremos guardar dentro de la variable "horrorOrtografico". Adicionalmente esperamos que las palabras “sitio web” queden en cursiva (<em>).
Completemos el siguiente archivo: */}
window.addEventListener('load', function () {
  // Ingresa aqui tu codigo
  let horrorOrtografico = document.querySelector('.title');
  horrorOrtografico.innerHTML = 'Bienvenidos a mi <em>sitio web</em>'
})

{/* Desafío: Capturando elementos del documento
Tenemos un documento de JavaScript (front.js) vinculado correctamente con un documento HTML. 
La estructura del documento HTML tiene varios elementos de los cuales nos interesan puntualmente los siguientes:
Un <h2> con clase "subtitle", que debemos guardar en una variable llamada "theSubtitle".
Todos los <p> presentes en el documento, que debemos guardar en una variable llamada "paragraphs".
Todas las <a> dentro de la lista con id "main-navbar", que debemos guardar en una variable llamada "navAnchors".
Una imagen con id "main-image", que debemos guardar en una variable llamada "mainImage".
Nuestra misión será entonces completar el archivo front.js que vemos a continuación: */}
window.addEventListener('load', function () {
  // ingresa aquí tu código
  let theSubtitle = document.querySelector('.subtitle');
  let paragraphs = document.querySelectorAll('p');
  let navAnchors = document.querySelectorAll('#main-navbar a');
  let mainImage = document.querySelector('#main-image');
})

{/* Desafío: ¡Cuidado con la clase!
Hasta el momento nuestro trabajo ha sido bastante bueno, solo nos queda una cosa por realizar.
Tenemos un listado de items (<li>) y sabemos que a algunos de ellos se les asignó un nombre de clase que no debería estar ahí. El nombre de clase errado es: alert-danger. Y lo que necesitamos es remover este nombre de clase y asignar el correcto que es: alert-success.
Importante: no todos los <li> tienen este nombre de clase errado, por lo que antes de aplicar el nombre de clase correcto, necesitamos saber si ese <li> tiene o no el nombre de clase alert-danger.
Tengamos presente que estos elementos <li> se encuentran dentro de un <ul> con el ID cont01.
Completemos el siguiente archivo: */}
// ingresa aquí tu código
let listItems = document.querySelectorAll("#cont01 li");
for (let i = 0; i < listItems.length; i++)
  if (listItems[i].classList.contains('alert-danger')) {
    listItems[i].classList.remove('alert-danger');
    listItems[i].classList.add('alert-success');
  }