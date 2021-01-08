import User from '../models/User';

class UserControllers {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json({ user });
    } catch (e) {
      res.status(400).json({ error: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserControllers();
