//Promesas//

//Utilizando promesas//
buscarProducto(1)
    .then(producto => console.log(producto));

//¿Y si la promesa falla?
buscarProducto(1)
    .then(producto => { console.log(producto) })
    .catch(error => console.log(error));

//Sequelize y configuración
npm install sequelize @5.21
npm install sequelize - cli - g
npm install sequelize
npm install mysql2

//Modelos
//Creando un Modelo
const Sequelize = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define("usuarios",
    cols = {
        nombre: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
    }
);

module.exports = Usuario;

//Evitando errores a la hora de crear un modelo
const Sequelize = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('usuarios', {
    nombre: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
}, {
    timestamps: false
}
);

module.exports = Usuario;

//FindAll
const db = require("../database/models");

let usuarios = [];

db.Usuario.findAll()
    .then((resultados) => { usuarios = resultados });

//findByPk
const db = require('../database/models');

let controller = {
    profile: (req, res) => {
        db.Usuario.findByPk(req.params.id).then((resultado) => {
            console.log(resultado)
        })
    }
}

//findOne
const db = require('../database/models');

db.Usuario.findOne({
where:{nombre:"John"}
}).then((resultado) => {
    console.log(resultado)
});

//Where y Operadores
//Trayendo todas las películas
const Peliculas = require('model/peliculas.js');

Peliculas.findAll().then(peliculas => {console.log(peliculas)});

//Trayendo pelis por ID
const Peliculas = require('model/peliculas.js');

Peliculas.findByPk(1).then(pelicula => {console.log(pelicula)});

//Order y Limit
//Trayendo productos ordenados
const Producto = require('model/productos.js');

Producto.findAll({
order : [["precio", "ASC"],],
}).then(productos => {
	console.log(productos)
});

//Paginando resultados
const Producto = require('model/productos.js');

Producto.findAll({
limit : 5
}).then(productos => {
	console.log(productos)
});

//Desafio final
'use strict';

module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('Product',
    cols = {
        id: DataTypes.INTEGER,
        nombre: DataTypes.STRING(200), 
        descripcion: DataTypes.TEXT,
        precio: DataTypes.DECIMAL
     }, 
     {
        tableName: "productos",
        timestamps: false,
     });
 	return product;
};

//Parte2
const db = require('../database/models'); 
 
const controller = {
  index: (req, res) => {
     return res.send('Listado de productos');
  }
}
 
module.exports = controller;

//Parte3
const db = require('../database/models');
 
const controller = {
  index: (req, res) => {
     db.Product.findAll().then(productos => res.send(productos))
   .catch(error => console.log(error));
  }
}
 
module.exports = controller;

//Parte4
const db = require('../database/models');
 
const controller = {
  index: (req, res) => {
     db.Product
        .findAll()
        .then(products => {
           return res.send(products);
        })
        .catch(err => {
           return res.send(err)
        })
  },
  porId: (req, res) => {
   db.Product.findByPk(req.params.id)
   .then(resultado => {res.send(resultado)})
   .catch(err => {return res.send(err)})
  }
}

//Parte5
const db = require('../database/models');
const Op = db.Sequelize.Op;
 
const controller = {
  index: (req, res) => {
     db.Product
        .findAll()
        .then(productos => {
           res.send(productos);
        })
        .catch(err => {
           res.send(err)
        })
  },
 
  porId: (req, res) => {
     db.Product
        .findByPk(req.params.id)
        .then(producto => {
           res.send(producto);
        })
        .catch(err => {
           res.send(err)
        })
  },
  porPrecio: (req, res) => {
         db.Product
        .findAll({
         where: {precio: {[db.Sequelize.Op.gte]: 50000 }},
         order : [["nombre", "ASC"],],
         limit: 10,
        })
        .then(producto => {
           res.send(producto);
        })
        .catch(err => {
           res.send(err)
        })
  },
}
 
module.exports = controller;