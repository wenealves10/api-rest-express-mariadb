import multer from 'multer';
import { resolve } from 'path';
import crypto from 'crypto';

export default {
  desk: resolve(__dirname, '..', '..', 'uploads'),
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        const filename = `${hash.toString('hex')}_${file.originalname}`;
        cb(null, filename);
      });
    },
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
  }),
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedImages = [
      'image/jpeg',
      'image/png',
      'image/pjpeg',
    ];
    if (allowedImages.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('invalid file type'));
    }
  },
};
