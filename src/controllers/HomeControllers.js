// eslint-disable-next-line no-unused-vars
class HomeControllers {
  async index(req, res) {
    res.status(200).json({
      status: 'ok',
    });
  }
}

export default new HomeControllers();
