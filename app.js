const express = require("express")
const app = express()
const indexRouter = require("./routes/index")
const endRoute = require("./routes/endroute")
const horaMiddleware = require("./middlewares/horaMiddleware")
const validarHora = require("./middlewares/validarHora")

app.use(horaMiddleware)

app.use("/", indexRouter)
app.use("/endroute", validarHora, endRoute)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`)
});

