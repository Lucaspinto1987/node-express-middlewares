const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  const mensaje = req.query.mensaje || ""
  res.send(`<h1>Bienvenido</h1><p>Son las ${req.hour} ${mensaje}<a href="/endroute">Entrar</a></p>`)
  
})

module.exports = router