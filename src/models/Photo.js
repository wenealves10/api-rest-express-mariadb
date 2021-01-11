import Sequelize, { Model } from 'sequelize';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: { type: Sequelize.STRING },
      filename: { type: Sequelize.STRING },
    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'id_student', as: 'profile' });
  }
}
