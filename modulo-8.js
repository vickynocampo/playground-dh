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

{/* Clase 38   */}
{/* Método load 
Queremos empezar a escribir código JavaScript, pero es importante asegurarnos que primero se cargue todo el documento HTML para poder manipular los elementos.
Por eso debemos, usando addEventListener(), agregarle el evento "load" al objeto window. */}
window.addEventListener('load', () => {})

{/* Evento click
Inspeccionemos un poco el código...
Estamos maquetando un sitio y queremos agregarle un evento al link "Contacto" de la barra de navegación. 
En el archivo script.js ya atrapamos ese elemento en la variable linkContacto.
Debemos, usando addEventListener(), agregarle el evento "click" al elemento que atrapamos. Y, para asegurarnos de que estemos haciendo bien las cosas, tenemos que realizar un paso más: dentro del callback, debemos hacer un console.log() del elemento sobre el cual se va a ejecutar el evento. */}
window.addEventListener('load', function() {
let linkContacto = document.querySelector('.contacto');
linkContacto.addEventListener('click', console.log(linkContacto))
});
{/* 
Prevent default
Antes de empezar a validar...
Debemos crear la variable formulario y almacenar en ella el formulario del HTML. Una vez capturado, deberemos asignarle el evento "submit" y prevenir el comportamiento por defecto del formulario.
Para este ejercicio, teenmos que pasarle al callback del evento la variable con nombre evento.
Para este ejercicio, tenemos que pasarle al callback del evento la variable con nombre evento. */}
window.addEventListener('load', function () {
// escribí tu código aquí
let formulario = document.querySelector('form')
formulario.addEventListener("submit", (evento) => evento.preventDefault())
});
{/* 
Mouseover
Tenemos un sitio en desarrollo... por ahora solo hay un título.
En este ejercicio queremos:
﻿Capturar el <h1> y guardarlo en la variable titulo.
Cuando el usuario pase el mouse por encima de ese <h1>, se le debe agregar la clase "titulo", definida en el CSS. */}
window.addEventListener('load', function() {
  //  escribí tu código aquí
  let titulo = document.querySelector('h1');
  titulo.addEventListener('mouseover', ()=>{
    titulo.classList.add("titulo")})
});
{/* 
Mouseout
Tenemos una página en construcción y queremos agregarle un poco de estilo a los links de la barra de navegación para darle un poco de dinamismo hasta que esté terminada.
Por eso, debemos:
﻿Capturar todas las etiquetas <a> y almacenarlas en la variable links.
﻿Usando addEventListener(), le asignes a cada link el evento "mouseout".
¿Y qué queremos que pase cada vez que el mouse se aleja del link? Si el link no tiene la clase "dark-mode", asignársela y si la tiene, quitársela... ¿Qué método de classlist nos sirve para resolver eso? */}
window.addEventListener('load', () => {
  let links = document.querySelectorAll('a');
  for(let link of links) {
    link.addEventListener('mouseout', ()=>{
    this.classList.toggle("dark-mode")})
  }});

// Onkeydown
// Estamos haciendo las validaciones de un formulario y en el nombre de usuario está fundamentalmente prohibido el uso de #hashtags para rellenarlo. Para asegurarnos de eso, debemos:
// Capturar el input del usuario que tiene como id userName.
// Haciendo uso del evento “keydown”, queremos que, en el caso de que el valor de la tecla presionada sea “#”, se dispare un alert con el siguiente mensaje: 
// Está prohibido el uso de #hashtags!
window.addEventListener('load', function () {
  // escribí tu codigo acá
  let userName = document.querySelector('#userName')
  userName.addEventListener('keydown', function (event) {
      if (event.key == '#') {
          alert('Está prohibido el uso de #hashtags!')
      }
  })
});

// onkeypress
// A veces los programadores somos medio chusmas y bueno… nos gusta saber qué tecla aprieta el usuario, por ejemplo, cuando está rellenando los campos de un formulario. 
// Queremos saber cuál es la tecla que se presiona dentro del input con ID ‘address’, guardarlo dentro de una variable con nombre "direccion" y que su valor se muestre en un alert.
// Para eso, debemos:
// Capturar el input y guardarlo dentro de la variable.
// Ponerlo en escucha del evento.
// Crear un alert con el valor del evento.
window.addEventListener('load', function () {
  //escribí tu código acá
  let direccion = document.querySelector('#address')
  direccion.addEventListener('keypress', function (event) {
    alert("Se presionó la tecla: " + event.key)
  })
})

// Hacia la clase en vivo
// No nos gusta la letra "x"
// Tenemos un documento HTML dentro del cual no queremos permitir que una persona presione la tecla "x". Y, si esto sucediera, nos gustaría que el <body> cambie el color de fondo de blanco a naranja.
// Completemos el siguiente archivo:
// completa el código
window.addEventListener("keypress", function(e) {
  let key = e.key;
  let body = document.querySelector("body"); 
  if (key == 'x') {
     document.body.style.backgroundColor = "orange";
  } 
})


// ¡Evitemos que esto se desenlace!
// Tenemos un enlace <a> dentro del HTML que en su atributo href tiene una URL a la que no queremos acceder. Por lo tanto, queremos que al dar clic sobre ese enlace evitemos ir a dicha URL y que, además, se cambie el color del texto de negro a rojo. Ah, y también queremos que el texto del enlace diga: "este enlace no te llevará a ningún lado".
// Completemos el siguiente archivo:
window.addEventListener('load', function(){
  const specialAnchor = document.querySelector("a");    
  specialAnchor.addEventListener('click', (event) => {
      event.preventDefault();
      this.style.color = "red";
      this.innerText = "este enlace no te llevará a ningún lado"   
  })
})

// onfocus
// Estamos buscando darle un poco más de dinamismo a nuestro sitio web y por eso queremos, ahora que tenemos a disposición las herramientas de JavaScript en el front-end, que empiecen a pasar cosas cuando el usuario navega por nuestra página. Por ejemplo, que el fondo del input de un formulario se vuelva rosa al hacer clic en el mismo.
// Para ello debemos completar las siguentes tareas:
// Capturar el input con id "nombre" y guardarlo dentro de la variable "elNombre".
// Asignarle el evento "focus" a la variable que almacena ese input.
// Cuando el input esta en foco, que el fondo cambie a color rosa.
// Completemos el siguiente código.
window.addEventListener('load', function () {
  // Escribi tu codigo aca :)
  let elNombre = document.querySelector('#nombre');
  elNombre.addEventListener('focus', function () {
      elNombre.style.backgroundColor = "pink";
  })
})

// onblur
// Tenemos un usuario que está tratando de iniciar sesión en nuestro sitio y queremos mejorar su experiencia como usuario
// Para ello, haremos lo siguiente:
// Almacenar dentro de una variable con nombre "elUsuario", el input que tiene como id "user".
// Asignar a esa variable el evento blur para detectar cuando el usuario haga clic fuera del input.
// Cambiar el color del input a "plum" cuando el usuario ejecute el evento blur.
// Completemos el siguiente código.
window.addEventListener('load', function(){
  let elUsuario = document.querySelector('#user');
  elUsuario.addEventListener('blur', function(){
     elUsuario.style.backgroundColor = "plum"
  })
})

// onchange
// Ahora que conocemos más sobre eventos del formulario, queremos que, cuando una persona haga algún cambio dentro de un input, el color del <body> cambie a rojo.
// Para eso necesitamos capturar el input con id "miInput" dentro de la variable "miInput", asignarle el evento change y cambiarle el color cuando se realice el cambio.
window.addEventListener('load', function () {
  // Escribe tu codigo aquí
  let miInput = document.querySelector('#miInput');
  miInput.addEventListener('change', function () {
      document.body.style.backgroundColor = "red";
  })
})

// onsubmit
// Tenemos un documento HTML dentro del cual tenemos un formulario y un mensaje oculto para el usuario. Queremos que cuando el usuario pulse en enviar se oculte el formulario y se muestre el mensaje oculto.
// Para ello, haremos lo siguiente:
// Capturar el formulario con id "miForm" en la variable "miForm".
// Capturar el mensaje dentro de la etiqueta <h1> en la variable "mensajeOculto".
// Asignar a la variable "miForm" el evento "submit" para detectar cuándo se envía el formulario.
// Cambiar el display del formulario a "none".
// Cambiar el display del mensaje a "block".
let miForm = document.querySelector('#miForm');
let mensajeOculto = document.querySelector('h1');
miForm.addEventListener('submit', function (){
    miForm.style.display = "none";
    mensajeOculto.style.display = "block";
})

×

// Prevent default
// Antes de empezar a validar...
// Debemos crear la variable formulario y almacenar en ella el formulario del HTML. Una vez capturado, deberemos asignarle el evento "submit" y prevenir el comportamiento por defecto del formulario.
// Para este ejercicio, teenmos que pasarle al callback del evento la variable con nombre evento.
// Para este ejercicio, tenemos que pasarle al callback del evento la variable con nombre evento.
window.addEventListener('load', function () {
  // escribí tu código aquí
  let formulario = document.querySelector('form');
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
  })
});

// Validando campos
// Validemos que los datos que completa el usuario sean correctos.
// Para eso debemos:
// Capturar el input con id nombre en la variable nombre.
// Si el nombre está vacío, hacer un console.log() con el texto 'Hubo un error en el nombre'.
// Capturar el input con id password en la variable password.
// Si el password tiene menos de 4 caracteres, hacer un console.log() con el texto 'Hubo un error en el password'.
window.addEventListener('load', function () {
  let formulario = document.querySelector('form');
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    // escribí tu código aquí
    let nombre = document.querySelector('#nombre');
    if (nombre.value == "") {
      console.log("Hubo un error en el nombre")
    };
    let password = document.querySelector('#password');
    if (password.value.length < 4) {
      console.log("Hubo un error en el password")
    }
  })
});