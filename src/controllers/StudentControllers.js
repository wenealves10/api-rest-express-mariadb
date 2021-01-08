import Student from '../models/Student';

// eslint-disable-next-line no-unused-vars
class StudentControllers {
  async create(req, res) {
    try {
      const student = await Student.create(req.body);
      res.status(200).json({
        student,
      });
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new StudentControllers();
