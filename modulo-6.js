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

//Clase 32 - Manipulación de datos
//Creando un usuario
const Usuario = require('model/usuario.js');

Usuario.create({
     nombre: "Nombre",
     email: "email",
     password: "password"
});

//Creando usuarios
const Pelicula = require('model/pelicula.js');

Pelicula.bulkCreate([
    {
        titulo: "titulo1",
        genero: "genero1"
    },
    {
        titulo: "titulo2",
        genero: "genero2"
    },
]);


//Productos web
const Producto = require('model/producto.js');

const productoController = {
  create: (req, res) => {
    Producto.create({
      nombre: req.body.nombre,
      precio: req.body.precio
    })
  }
}

//Update
//Actualizando el precio
const Producto = require('model/producto.js');

Producto.update(
    {precio: 1234},
    {where:{id:1}}
);

//Actualizando Serie
const Serie = require('model/serie.js');

Serie.update( 
    {genero: "sitcom"},
    {where: {genero: "comedia"}}
)

//Actualizando Usuario
const Usuario = require('model/usuario.js');

Usuario.upsert({
email: "email",
edad: "edad"
});

//Delete
//Eliminar una película
const Pelicula = require('model/pelicula.js');

Pelicula.destroy({where: {id:3}})

//Eliminar un usuario
const Usuario = require('model/usuario.js');

Usuario.destroy({where: {email:"kenny@south-park.com"}});

//Eliminar varios usuarios
const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;

Usuario.destroy({where:{email:{[Op.like]: "%aol.com"}}})

//Desafío Sequelize
//Parte1
const db = require('../database/models');

const controller = {
  almacenarEnDB: (req, res) => {
    db.Product.create({
      nombre: req.body.nombreProducto,
      precio: req.body.precioProducto,
      descripcion: req.body.descripcionProducto
    }
    )
    res.redirect("/productos")
  }
}

module.exports = controller;


//Parte2

//Parte3
const db = require('../database/models');

const controller = {
   almacenarEnDB: (req, res) => {
      db.Product
         .create({
            nombre: req.body.nombreProducto,
            precio: req.body.precioProducto,
            descripcion: req.body.descripcionProducto
         })
         .then(producto => {
            res.redirect('/productos');
         })
   },
   editarRegistro: (req, res) => {
      db.Product
         .update(
            {
               nombre: req.body.nombreEditado,
               precio: req.body.precioEditado,
               descripcion: req.body.descripcionEditada
            },
            { where: { id: req.params.id } }
         )
         res.redirect("/productos")
   },
}

module.exports = controller;

//Parte4
const db = require('../database/models');
 
const controller = {
  almacenarEnDB: (req, res) => {
     db.Product
        .create({
           nombre: req.body.nombreProducto,
           precio: req.body.precioProducto,
           descripcion: req.body.descripcionProducto
        })
        .then(producto => {
           res.redirect('/productos');
        })
  },
  editarRegistro: (req, res) => {
     db.Product
        .update(
		 {
              nombre: req.body.nombreEditado,
              precio: req.body.precioEditado,
              descripcion: req.body.descripcionEditada
            },
           {
              where: { id: req.params.id }
           }
        )
        .then(() => {
           res.redirect('/productos');
        })
  },
  borrarRegistro: (req, res) => {
     db.Product
      .destroy({where:{id:req.params.id}})
      .then(()=> res.redirect('/productos'))
  },
}
 
module.exports = controller;

//Parte5 
const express = require('express');
const router = express.Router();
 
const productsController = require('../controllers/productsController');
 
router.get('/', productsController.index);
router.post('/', productsController.almacenarEnDB);
router.put('/:id', productsController.editarRegistro );
router.delete('/:id', productsController.borrarRegistro );
 
module.exports = router;

//Clase 33 - Relaciones y CRUD completo
//Relaciones 1:N belongTo
const Sequelize = require('sequelize');
const sequelize = require('../database');
const Genero = require('model/genero.js');

const Pelicula = sequelize.define('peliculas', {
    titulo: Sequelize.STRING,
    genero_id: Sequelize.INTEGER,
});

Pelicula.belongsTo(Genero, {foreignKey: "genero_id", as: "genero"})

module.exports = Pelicula;

//Relaciones 1:N hasMany
const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Pelicula = require('model/pelicula.js');

const Genero = sequelize.define('generos',{
    nombre: Sequelize.STRING,
});

Genero.hasMany(Pelicula,{foreignKey: "genero_id", as: "genero"})

module.exports = Genero;

//
const Pelicula = require('model/pelicula.js');

Pelicula.findByPk(1, {include:["genero"]})
.then((pelicula => console.log(pelicula.genero.nombre)))

//
const Sequelize = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('usuarios', {
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
});

const Producto = sequelize.define('productos', {
    nombre: Sequelize.STRING,
    usuario_id: Sequelize.INTEGER,
});

const Creador = Producto.belongsTo(Usuario, { as: 'creador' });

Producto.create(
    { nombre: 'Falcon 9', creador: { nombre: 'Elon', apellido: 'Musk' } },
    { include: [Creador] }
);

//Relaciones N:M
//Películas de actor
const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const PeliculaActor = sequelize.define('pelicula_actor',{
    pelicula_id: {
    	type: Sequelize.INTEGER,
    	references: {model:"Pelicula", key:"id"}
    },
    actor_id: {
    	type: Sequelize.INTEGER,
    	references: {model:"Actor", key:"id"}
    }
});

module.exports = PeliculaActor;

//Relaciones Pivot
const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Actor = require('model/actor.js');
const Pelicula = require('model/pelicula.js');

const PeliculaActor = sequelize.define('pelicula_actor',{
    pelicula_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Pelicula',
    		key: 'id'
    	}
    },
    actor_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Actor',
    		key: 'id'
    	}
    }
});

PeliculaActor.belongsTo(Pelicula, {foreignKey: "pelicula_id"})

PeliculaActor.belongsTo(Actor, {foreignKey: "actor_id"})

module.exports = PeliculaActor;

//Películas actor, toma 3
const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Actor = require('model/actor.js');

const Pelicula = sequelize.define('peliculas',{
  titulo: Sequelize.STRING,
  genero_id: Sequelize.INTEGER,
});

Pelicula.belongsToMany(Actor,{
    as: "actores",
    through: "PeliculaActor",
    foreignKey: "pelicula_id",
})

module.exports = Pelicula;

//Buscando actores
const Pelicula = require('model/pelicula.js');

Pelicula.findByPk(1, {include: ["actores"]})
        .then(pelicula=>console.log(pelicula.actores));

// Agregando actores
const Pelicula = require('model/pelicula.js');

Pelicula.findByPk(1).then(pelicula=>{pelicula.setActores([3, 5, 8])});

//Desafio
//1
'use strict';
 
module.exports = (sequelize, DataTypes) => {
const product = sequelize.define('Product', {
     nombre: DataTypes.STRING(200),
     descripcion: DataTypes.TEXT,
     precio: DataTypes.DECIMAL,
 	}, {
          timestamps: false,
          tableName: 'productos',
 	});
 
	product.associate = models => {
  	product.belongsTo(models.Brand, {
            as: "brand",
            through: "marcas",
            foreignKey: "marca_id",
            otherKey: "id",
            timestamps: false
    })
}
 
 	return product;
};

//2
'use strict';
 
module.exports = (sequelize, DataTypes) => {
  	const brand = sequelize.define('Brand', {
     	nombre: DataTypes.STRING(),
  	}, {
          timestamps: false,
          tableName: 'marcas',
 	});
 
   	brand.associate = models => {
 	brand.hasMany(models.Product, {
            as: "products",
            foreignKey: "brand_id"
        })
  	}
   	return brand;
};

//3
'use strict';
 
module.exports = (sequelize, DataTypes) => {
const product = sequelize.define('Product', {
     nombre: DataTypes.STRING(200),
     descripcion: DataTypes.TEXT,
     precio: DataTypes.DECIMAL,
 	}, {
          timestamps: false,
          tableName: 'productos',
 	});
 
product.associate = models => {
  product.belongsTo(models.Brand, {
    as: 'brand',
    foreignKey: 'marca_id'
  });
 
  
product.belongsToMany(models.Color,{
    as: "colors",
    through: "colores_productos",
   
})
}
 
 	return product;
};

//4
const db = require('../database/models');

const controller = {
   index: (req, res) => {
      db.Product
         .findAll({
            include: [ "brand", "colors"], 
                   
         })
         .then(productos => {
            res.send(productos);
         })
         .catch(err => {
            res.send(err)
         })
   }
}

module.exports = controller;