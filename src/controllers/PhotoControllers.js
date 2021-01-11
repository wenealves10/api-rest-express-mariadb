/* eslint-disable camelcase */
import Student from '../models/Student';
import Photo from '../models/Photo';

class PhotoControllers {
  async store(req, res) {
    try {
      if (isNaN(req.params.id)) return res.status(400).json({ error: ['ID invalid'] });
      const { originalname, filename } = req.file;
      if (!(originalname && filename)) return res.status(400).json({ error: ['Error with the image'] });
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ error: ['Student not found'] });
      const id_student = req.params.id;
      const photo = await Photo.create({ originalname, filename, id_student });
      return res.status(200).json({ status: req.file });
    } catch (e) {
      return res.status(400).json({ error: ['Error upload Photograph'] });
    }
  }
}

export default new PhotoControllers();
