// eslint-disable-next-line no-unused-vars
import Student from '../models/Student';

class HomeControllers {
  async index(req, res) {
    const student = await Student.create({
      name: 'Wene',
      surname: 'Alves de Oliveira',
      email: 'wene.alves@gmail.com',
      age: 19,
      height: 1.68,
      weight: 88,
    });
    res.status(200).json({
      student,
    });
  }
}

export default new HomeControllers();
