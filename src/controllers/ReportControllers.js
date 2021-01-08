import Report from '../models/Report';

class ReportControllers {
  async create(req, res) {
    try {
      const report = await Report.create(req.body);
      res.status(200).json({ report });
    } catch (e) {
      res.status(400).json({ error: e.errors.map((err) => err.message) });
    }
  }
}

export default new ReportControllers();
