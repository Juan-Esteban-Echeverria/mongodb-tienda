const express = require("express")
const {create} = require("express-handlebars")
require("dotenv").config()
require("./config/db")

const app = express()

// CONFIGURAR PARTIALS HANDLEBARS
const hbs = create({
    partialsDir: ["views/partials"], // components
    extname: ".hbs"
})

// MOTOR DE PLANTILLAS EXPRESS
app.engine(".hbs", hbs.engine)
app.set("view engine", ".hbs")
app.set("views", "./views")

// CONEXION CSS
app.use(
    "/css/bootstrap.min.css",
    express.static(
        __dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css"
    )
)

// CONEXION JS
app.use(
    "/js/bootstrap.min.js",
    express.static(
        __dirname + "/node_modules/bootstrap/dist/js/bootstrap.min.js"
    )
)

const Fruta = require("./models/Fruta")

// RUTA RAIZ 
app.get("/", async(req, res) => {

    try {
        const frutas = await Fruta.find().lean()
        
        res.render("dashboard", {
            productos: frutas
        })
        
    } catch (error) {
        console.log(error)
    }
})



// MIDDLEWARE
app.use(express.static(__dirname + "/public"))

app.listen(5000, () => console.log("SERVER ON"))