/* eslint-disable max-len */
import Report from '../models/Report';
import Student from '../models/Student';

class ReportControllers {
  async create(req, res) {
    try {
      if (isNaN(req.params.id)) return res.status(400).json({ error: ['ID invalid'] });
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ error: ['Student not found'] });
      req.body.student_id = req.params.id;
      const report = await Report.create(req.body);
      res.status(200).json({ report });
    } catch (e) {
      res.status(400).json({ error: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const reports = await Report.findAll({ include: { association: 'student' } });
      if (!reports.length > 0) return res.status(400).json({ error: ['Not found Report'] });
      const reportsStudent = reports.map((report) => ({
        matter: report.matter,
        average: report.average,
        student: {
          id: report.student.id,
          name: report.student.name,
          surname: report.student.surname,
          email: report.student.email,
          age: report.student.age,
          height: report.student.height,
          weight: report.student.weight,
        },
      }));
      return res.status(200).json({ reportsStudent });
    } catch (e) {
      return res.status(400).json({ error: ['error loading data'] });
    }
  }

  async show(req, res) {
    try {
      if (isNaN(req.params.id)) return res.status(400).json({ error: ['ID invalid'] });
      const studentReport = await Report.findAll({ where: { student_id: req.params.id }, include: { association: 'student' } });
      if (!studentReport.length > 0) return res.status(400).json({ error: ['Not found Report'] });
      const reportsStudent = studentReport.map((report) => ({
        matter: report.matter,
        average: report.average,
        student: {
          id: report.student.id,
          name: report.student.name,
          surname: report.student.surname,
          email: report.student.email,
          age: report.student.age,
          height: report.student.height,
          weight: report.student.weight,
        },
      }));
      return res.status(200).json({ reportsStudent });
    } catch (e) {
      return res.status(400).json({ error: ['error loading data'] });
    }
  }
}

export default new ReportControllers();
