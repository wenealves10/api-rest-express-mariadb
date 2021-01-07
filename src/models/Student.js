import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      surname: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.STRING,
      height: Sequelize.STRING,
      weight: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
