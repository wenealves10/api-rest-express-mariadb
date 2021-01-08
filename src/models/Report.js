import Sequelize, { Model } from 'sequelize';

export default class Report extends Model {
  static init(sequelize) {
    super.init({
      matter: Sequelize.STRING,
      note_1: Sequelize.FLOAT,
      note_2: Sequelize.FLOAT,
      note_3: Sequelize.FLOAT,
      note_4: Sequelize.FLOAT,
      average: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
