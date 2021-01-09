import User from '../models/User';

class UserControllers {
  // Create
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(200).json({ user });
    } catch (e) {
      return res.status(400).json({ error: e.errors.map((err) => err.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.status(200).json({ users });
    } catch (e) {
      return res.status(501).json({ error: ['error loading data'] });
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.idUser);
      if (!user) {
        return res.status(404).json({ error: ['User not found'] });
      }
      const { id, name, email } = user;
      return res.status(200).json({ user: { id, name, email } });
    } catch (e) {
      return res.status(501).json({ error: ['Error loading data'] });
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.idUser);
      if (!user) {
        return res.status(404).json({ error: ['User not found'] });
      }
      const userUpdate = await user.update(req.body);
      return res.status(200).json({ status: ['updated user'] });
    } catch (e) {
      return res.status(400).json({ error: e.errors.map((err) => err.message) });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.idUser);
      if (!user) {
        return res.status(404).json({ error: ['User not found'] });
      }
      const userDeleted = await user.destroy();
      return res.status(200).json({ status: ['deleted user'] });
    } catch (e) {
      return res.status(500).json({ error: ['Error loading data'] });
    }
  }
}

export default new UserControllers();
