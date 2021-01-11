/* eslint-disable camelcase */
import fs from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';
import Photo from '../models/Photo';
import Student from '../models/Student';

function deletedPhoto(filename) {
  return promisify(fs.unlink)(resolve(__dirname, '..', '..', 'uploads', filename));
}
class PhotoControllers {
  async store(req, res) {
    const { originalname, filename } = req.file;
    try {
      if (isNaN(req.params.id)) {
        deletedPhoto(filename);
        return res.status(400).json({ error: ['ID invalid'] });
      }
      const student = await Student.findByPk(req.params.id);
      if (!student) {
        deletedPhoto(filename);
        return res.status(404).json({ error: ['Student not found'] });
      }
      const id_student = req.params.id;
      const photo = await Photo.create({ originalname, filename, id_student });
      return res.status(200).json({ status: req.file });
    } catch (e) {
      deletedPhoto(filename);
      return res.status(400).json({ error: ['Error upload Photograph'] });
    }
  }

  async update(req, res) {
    const { originalname, filename } = req.file;
    try {
      if (isNaN(req.params.id)) {
        deletedPhoto(filename);
        return res.status(400).json({ error: ['ID invalid'] });
      }
      const student = await Student.findByPk(req.params.id);
      if (!student) {
        deletedPhoto(filename);
        return res.status(404).json({ error: ['Student not found'] });
      }
      const id_student = req.params.id;
      const photoStudent = await Photo.findOne({ where: { id_student } });
      if (!photoStudent) {
        deletedPhoto(filename);
        return res.status(404).json({ error: ['Photograph not found'] });
      }
      deletedPhoto(photoStudent.filename);
      await photoStudent.update({ originalname, filename });
      return res.status(200).json({ status: ['Updated Photograph profile'] });
    } catch (e) {
      deletedPhoto(filename);
      return res.status(400).json({ error: ['Error upload Photograph'] });
    }
  }

  async delete(req, res) {
    try {
      if (isNaN(req.params.id)) return res.status(400).json({ error: ['ID invalid'] });
      const student = await Student.findByPk(req.params.id);
      if (!student) return res.status(404).json({ error: ['Student not found'] });
      const photoStudent = await Photo.findOne({ where: { id_student: req.params.id } });
      if (!photoStudent) return res.status(404).json({ error: ['Photograph not found'] });
      await photoStudent.destroy();
      return res.status(200).json({ status: ['Deleted Photograph'] });
    } catch (e) {
      return res.status(400).json({ error: ['Error at deleted photograph'] });
    }
  }
}

export default new PhotoControllers();
