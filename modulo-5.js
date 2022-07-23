//Primer controller//
let carritoController = {
   
    sacarItem: function(){},
    consultarItem: function(){},
    agregarItem: function(req, res){res.send("Item Agregado")}
    
 };
 
 module.exports = carritoController

 //Ruteando controladores 
 let express = require('express')
let router = express.Router();
let carritoController = require('../controllers/carritoController')

router.get('/:item',carritoController.agregarItem)

module.exports = router

//Buscando series
const express = require('express');
const app = express();

app.get("/series",(req, res)=>{res.send(series)});


//Buscar una serie
const express = require('express');
const app = express();

app.get("/serie/:id",function (req, res) {
    let serieBuscada = req.params.id;
    for (let i = 0; i < series.length; i++)
    {
        if(series[i].id == serieBuscada)
        {
        res.send(series[i])
        }
    }
})

//Modularizar rutas
const express = require("express");
const router = express.Router();

//Exportar rutas
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
});
router.get('/:genero', (req,res) => {
});
router.get('/crear', (req,res) => {
});

module.exports = router

//Usando rutas
const express = require('express');
const app = express();
const rutasSeries = require("./routes/series")

app.use("/series", rutasSeries)

//Renderizando el login
let userController = {
    loginUser: function (req,res){
        res.render('login');
    }
}

//Parámetros compartidos
let productos = ['Helado 1/4 kg', 'Franui Chocolate Negro', 'Surtido Chocolate 1/2kg'];
       let carritoController = {
         checkout: function (req,res){
             res.render("checkout", {items: productos});
         }
     }

//Creando nuestra primera ruta con Express

const express = require("express");
const router = express.Router();

router.get("/peliculas", (req, res) =>{res.send("Listado de películas")})

//Usando query string para filtrar

const express = require('express');
const router = express.Router();

router.get("/productos", function (req, res) {
let listado = req.query
res.send(listado)
})

//Filtrando por precio
const express = require('express');
const router = express.Router();

const celulares = [
    {
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

router.get("/celulares", function (req, res){
    let max = 20000;
    let celularesResultantes = []; 
    {for (let i = 0; i < celulares.length; i++){
    if(celulares[i].precio < max){
            celularesResultantes.push[celulares[i]]
        }   
        }
    res.send(celularesResultantes)
    }
}
)


//Preparando la constante para trabajar con POST
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Recuperando información de POST

const express = require('express');
const router = express.Router();

router.post("/ver-body",(req, res)=>{res.send(req.body)})

const express = require('express');
const router = express.Router();

//Seteando un objeto con Data de POST
router.post("/crear/producto", function (req, res){
    let producto = {
    nombre: req.body.nombre,
    precio: req.body.precio
    }      
    res.send(producto)
})

//Vamos a tratar de crear una ruta JSON style
let peliculas = [
    {
        id: 1,
        titulo: 'Spider-Man: Lejos de casa',
        duracion: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracion: 100,
        genero: 'Animación'
    },
    {
        id: 3,
        titulo: 'X-Men: Fénix Oscura',
        duracion: 113,
        genero: 'Acción'
    }
];

const express = require('express');
const router = express.Router();

router.put("/pelicula/:id",(req, res)=>{ 
   let idUrl = req.params.id;
   for (let i = 0; i < peliculas.length; i++){
       if(peliculas[i].id == idUrl){
           peliculas[i].titulo = req.body.titulo,
           peliculas[i].duracion = req.body.duracion,
           peliculas[i].genero = req.body.genero
           }
        } 
    }  
);

//Eliminando datos de un ARRAY
let celulares = [
    {
        id: 1,
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        id: 2,
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        id: 3,
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        id: 4,
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

const express = require('express');
const router = express.Router();

router.delete("/celular/:id",(req,res)=>{
     celulares = celulares.filter((celular)=>{
      return celular.id != req.params.id;
    })
    res.send(celulares);
})

//Multer
const express = require('express');
const path = require("path");
const multer = require("multer");
const router = express.Router();

var storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb (null, path.join(__dirname, "./ruta"))
    },
    fileName : (req, file, cb)=>{
        cb(null, file.fileName  + Date.now() + path.extname(file.originalName))
        }
});

let upload = multer({storage: storage});

router.post('/register', upload.any() , usersController.save);

//Agregando el middleware express.json()
const express = require('express');
const app = express();

const middlewareJSON =express.json()

//Agrear el middleware aquí

app.use(middlewareJSON);

const router = express.Router();
router.post('/crear-usuario', (req, res) => {
	console.log(req.body);

	res.send('El usuario se creó con éxito');
});

app.use(router);

app.listen(3000);

// Sitio en mantenimiento
const express = require('express');
const app = express();
let enMantenimiento = false;

app.use((req, res, next)=>{
    if(enMantenimiento === true ){
       res.render('en-mantenimiento')
    }else{next()}
    })

//Agregando la propiedad usuaro
const express = _require('express');
const app = express();
const usuario = {
    nombre: 'Máximo',
    apellido: 'Cozzetti'
};

app.use((req, res, next)=>{
req.usuario = usuario;
   next()
})

//Agregando middleware en la ruta "subir-archivo"
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
 
const upload = multer({ storage: storage });

router.post('/subir-archivo', upload.any() ,fileController.upload); //Agregar el middleware de multer

//Multer Validacion
var upload = multer({ storage: storage })

app.post('/register', upload.single('avatar'), (req, res, next) => {
  const file = req.file;
  if(!file){
   const error = new Error("Por favor seleccione un archivo")
   error.httpStatusCode = 400;
   return next(error)
  }
  res.send(file)
})

//Contando visitas
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const estadisticasController = require('../controllers/estadisticasController');

//Creá tu función visitasMiddleware
function visitasMiddleware(req, res, next){
estadisticasController.contarVisita(req),
next()
} 

router.get('/home', visitasMiddleware,  homeController.index); //Agregá la función visitasMiddleware como segundo parámetro de tu ruta

//Redirigiendo a la HOME
const express = require('express');
const router = express.Router();
const OldController = require('../controllers/OldController');

//Creá tu función redirigir
function redirigir(req, res, next){
res.redirect("/")
}
//let redirigir = (req, res, next)=> {res.redirect("/")}
router.get('/ruta-en-desuso', redirigir  , OldController.index); //Agregá la función redirigir como segundo parámetro de tu ruta

//Introducción a Express Validator
const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const {check, validationResult, body} = require("express-validator");

let validation  = [
    check("email").isEmail(),
    check("password").isLength ({min:6})
]

router.post('/registro', validation,  UsuarioController.registro);

//Express Validator avanzado
const express = require('express');
const router = express.Router();
const { validationResult, body } = require('express-validator');

const userController = {
  login: (req, res) => {
    const errores = validationResult(req);

    //Chequear los errores acá, redirigir si hay errores
    if(!errores.isEmpty()){
       res.render('login', {errores: errores.array()})
    }

    if (req.body.name == 'admin' && req.body.pass == 123) {
    	res.redirect('/dashboard');
    }
  }  
}

//Configurando session
const express = require('express');
const app = express();

const session = require("express-session");

app.use(session({secret : "frase secreta que identifica el sitio"}));


//Cambiando idioma
const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));

const cambiarIdioma = (req, res) => {
	req.session.idioma = req.query.idioma
	res.redirect('/');
}


//if session falta

//Setear Cookie
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	//Escribí tu código acá
res.cookie("ultimoAcceso", new Date());
	//Código del controlador
}

//Preferencias de usuario
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	let estilo;
	if (req.cookies.estilo !== undefined) {
		let estilo = req.cookies.estilo;
		 res.render('/', {estilo: estilo});
	} else {
		let estilo = "default";
		 res.render('/', {estilo: estilo});
	}
}

//Recomendados:
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const listadoProductos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	remeras: [
		'remera alforzas',
		'remera bordada',
		'musculosa',
	]
}

const recomendados = (req, res) => {
	let preferencias = req.cookies.preferencias;
	const productos =listadoProductos[preferencias];
	res.render('/recomendados', {productos: productos})
}


//**** Hashing ****//
//Probando hash
const password = '123456';
const bcrypt = require("bcrypt");

const hash = bcrypt.hashSync(password,10);

console.log(hash);

//Validando información hasheada
const bcrypt = require('bcrypt');
const hash1 = bcrypt.hashSync('123456', 10);

// Escribir tu código aquí
const hash2 = bcrypt.hashSync('123456', 10);

if(hash1 == hash2){
console.log('los hash son iguales')
};

//Utilizando el método compareSync
const bcrypt = require('bcrypt');
const password = '123456';
const passwordEncriptada = bcrypt.hashSync(password, 10);

// Escribir tu código aquí
if(bcrypt.compareSync(password, passwordEncriptada)){
console.log('El password es correcto');
}

