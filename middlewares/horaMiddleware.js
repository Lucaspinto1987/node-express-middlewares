module.exports = (req, res, next) => {
    const now = new Date();
    const hour = now.getHours()
    req.hour = hour
    next()
  }