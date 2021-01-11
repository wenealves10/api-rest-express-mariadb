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
      return res.status(200).json({ report });
    } catch (e) {
      return res.status(400).json({ error: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      if (isNaN(req.params.id)) return res.status(400).json({ error: ['ID invalid'] });
      const studentReports = await Student.findByPk(req.params.id, {
        include: { association: 'reports', attributes: ['id', 'matter', 'note_1', 'note_2', 'note_3', 'note_4', 'average'] },
        attributes: ['id', 'name', 'surname', 'email', 'age'],
      });
      if (!studentReports) return res.status(404).json({ error: ['Student not found'] });

      return res.status(200).json({ studentReports });
    } catch (e) {
      return res.status(400).json({ error: ['Error loading data'] });
    }
  }

  async update(req, res) {
    try {
      if (isNaN(req.params.id) || isNaN(req.params.idMatter)) return res.status(400).json({ error: ['ID invalid'] });
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ error: ['Student not found'] });
      const report = await Report.findByPk(req.params.idMatter);
      if (!report) return res.status(404).json({ error: ['Matter not found'] });
      await report.update(req.body);
      return res.status(200).json({ status: ['Updated Data'] });
    } catch (e) {
      return res.status(400).json({ error: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      if (isNaN(req.params.id) || isNaN(req.params.idMatter)) return res.status(400).json({ error: ['ID invalid'] });
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ error: ['Student not found'] });
      const report = await Report.findByPk(req.params.idMatter);
      if (!report) return res.status(404).json({ error: ['Matter not found'] });
      await report.destroy();
      return res.status(200).json({ status: ['Deleted Data'] });
    } catch (e) {
      return res.status(400).json({ error: ['Error loading data'] });
    }
  }
}

export default new ReportControllers();
