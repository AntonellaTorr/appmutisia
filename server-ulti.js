//utilizamos Joi para realizar comprobaciones en los datos 
const Joi = require("joi");
//utilizamos express para un manejo mas claro del servidor
const express = require("express");
const app = express();
const cors = require('cors');
const cervezas = require('./db.js')

app.use(express.json());
app.use(cors()); 


const path = require('path');

// Servir la carpeta 'assets' como archivos estáticos
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.get("/api/cervezas", (req, res) => {
    console.log("en el get");
    const cantidadDeseada = req.query.cantidad ? parseInt(req.query.cantidad) : null;
    const inicio = parseInt(req.query.from) || 0;


    if (cantidadDeseada === null) {
        // Si no se especifica cantidad, devolver todas las cervezas
        console.log("no se especifico")
        return res.status(200).json(cervezas);
    }

    if (isNaN(cantidadDeseada) || cantidadDeseada <= 0) {
        return res.status(400).send("La cantidad debe ser un número entero positivo.");
    }

    if (inicio >= cervezas.length) {
        return res.status(404).send("No hay suficientes elementos a partir del índice proporcionado.");
    }

    // Limitar la cantidad de elementos a la cantidad deseada o al máximo disponible
    const cantidadReal = Math.min(cantidadDeseada, cervezas.length - inicio);
    const cervezasLimitadas = cervezas.slice(inicio, inicio + cantidadReal);
    res.status(200).send(cervezasLimitadas);
});

// Método GET para obtener una cerveza por su código
app.get("/api/cervezas/:codigo", (req, res) => {
    const cerveza = cervezas.find((c) => c.codigo === parseInt(req.params.codigo));
    if (!cerveza) {
        return res.status(404).send("La cerveza con el código proporcionado no se encontró");
    }
    res.send(cerveza);
});

// Método POST para agregar una nueva cerveza
app.post("/api/cervezas", (req, res) => {
    console.log("en el post");
    const { error } = validarCerveza(req.body);
    if (error) {
        console.log(error)
        return res.status(400).send(error.details[0].message);
    }

    const cerveza = {
        codigo: cervezas.length + 1,
        nombre: req.body.nombre,
        amargor: req.body.amargor,
        graduacion: req.body.graduacion,
        image: '/assets/cervezaSinFoto.jpeg', // Imagen por defecto
        detalle: req.body.detalle || '' || null, // Detalle opcional
    };
    validarCerveza(cerveza);
    cervezas.push(cerveza);

    res.send(cerveza);
});

// Método PUT para actualizar una cerveza existente
app.put("/api/cervezas/:codigo", (req, res) => {
    // Buscar la cerveza por su código
    const cerveza = cervezas.find((c) => c.codigo === parseInt(req.params.codigo));
    if (!cerveza) {
        return res.status(404).send("La cerveza con el código proporcionado no se encontró");
    }

    // Validar los datos de actualización
    const { error } = validarCerveza(req.body);
    
    if (error) {
      
        return res.status(400).send(error.details[0].message);
    }

    // Actualizar la cerveza
    cerveza.nombre = req.body.nombre;
    cerveza.amargor = req.body.amargor;
    cerveza.graduacion = req.body.graduacion;

    // Enviar la cerveza actualizada como respuesta
    res.send(cerveza);
});

// Validación de cerveza usando Joi
function validarCerveza(cerveza) {

    const schema = Joi.object({
        nombre: Joi.string().min(3).required(),
        amargor: Joi.string().valid('Suave', 'Bajo', 'Medio').required(),
        graduacion: Joi.number().required(), 
        image: Joi.string().optional(), // Ahora opcional
        detalle: Joi.string().optional().allow(null), // Ahora opcional
    });
    return schema.validate(cerveza);
}

const puerto = process.env.PUERTO || 3000;
app.listen(puerto, () => console.log("En el puerto", puerto));