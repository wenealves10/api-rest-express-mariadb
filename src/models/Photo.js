import 'dotenv/config';
import Sequelize, { Model } from 'sequelize';
import fs from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: { type: Sequelize.STRING },
      filename: { type: Sequelize.STRING },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${process.env.URL_PHOTOGRAPH}/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'photos',
    });
    this.addHook('beforeDestroy', async (photo) => promisify(fs.unlink)(resolve(__dirname, '..', '..', 'uploads', photo.filename)));
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'id_student', as: 'profile' });
  }
}
