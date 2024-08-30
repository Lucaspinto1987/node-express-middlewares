const horaAtual = 15

module.exports = (req, res, next) => {
  if(horaAtual < req.hour || req.hour >= 24) {
    res.locals.mensaje = `Aún no es la hora, espera hasta las 14:00 para entrar`;
    return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
  }
  next()
};
