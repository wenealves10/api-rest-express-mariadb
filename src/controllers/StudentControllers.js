import validate from 'validator';
import Student from '../models/Student';

// eslint-disable-next-line no-unused-vars
class StudentControllers {
  async create(req, res) {
    try {
      const student = await Student.create(req.body);
      return res.status(200).json({
        student,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const students = await Student.findAll({ attributes: ['id', 'name', 'surname', 'email', 'age', 'height', 'weight'] });
      return res.status(200).json({ students });
    } catch (e) {
      return res.status(400).json({ error: ['error loading data'] });
    }
  }

  async show(req, res) {
    try {
      if (isNaN(req.params.id)) return res.status(400).json({ error: ['ID invalid'] });
      const student = await Student.findByPk(req.params.id, { include: { association: 'reports' } });
      if (!student) return res.status(404).json({ error: ['Student not found'] });
      const {
        id, name, surname, email, age, height, weight, reports,
      } = student;
      return res.status(200).json({
        student: {
          id, name, surname, email, age, height, weight, reports,
        },
      });
    } catch (e) {
      return res.status(501).json({ error: ['error loading data'] });
    }
  }

  async update(req, res) {
    try {
      if (isNaN(req.params.id)) return res.status(400).json({ error: ['ID invalid'] });
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ error: ['Student not found'] });
      await student.update(req.body);
      return res.status(200).json({ status: ['Updated Data'] });
    } catch (e) {
      return res.status(400).json({ error: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      if (isNaN(req.params.id)) return res.status(400).json({ error: ['ID invalid'] });
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ error: ['Student not found'] });
      await student.destroy();
      return res.status(200).json({ status: ['Deleted Data'] });
    } catch (e) {
      return res.status(501).json({ error: ['error loading data'] });
    }
  }
}

export default new StudentControllers();
