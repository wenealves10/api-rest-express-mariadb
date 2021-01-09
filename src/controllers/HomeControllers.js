class HomeControllers {
  async index(req, res) {
    return res.status(200).json({ status: ['OK'] });
  }
}

export default new HomeControllers();
