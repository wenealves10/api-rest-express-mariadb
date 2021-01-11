class HandlingError {
  async error(err, req, res, next) {
    if (err) return res.status(400).json({ error: ['Image format error'] });
    next();
  }
}

export default new HandlingError().error;
