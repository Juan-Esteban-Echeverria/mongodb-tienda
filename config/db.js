
// CONEXION A LA BASE DE DATOS
const mongoose = require("mongoose")

mongoose.connect(process.env.URI, {})
    .then(()=> console.log("conexion db lista"))
    .catch(e => console.log("fallo conexion " + e))