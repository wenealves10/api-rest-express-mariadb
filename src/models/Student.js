import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 16],
            msg: 'the name must be between 4 and 16 characters.',
          },
        },
      },
      surname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'the surname must be between 4 and 255 characters.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already registered.',
        },
        validate: {
          isEmail: {
            msg: 'Invalid email.',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isNumeric: {
            msg: 'whole numbers only.',
          },
          isInt: {
            msg: 'whole numbers only.',
          },
          max: {
            args: 101,
            msg: 'Only numbers less than 100',
          },
          min: {
            args: 10,
            msg: 'Only numbers greater than 10.',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isNumeric: {
            msg: 'whole numbers only.',
          },
          max: {
            args: 2.0,
            msg: 'Maximum height is 2 meters.',
          },
          min: {
            args: 0.80,
            msg: 'The minimum height is 80 cm meters',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isNumeric: {
            msg: 'whole numbers only.',
          },
          max: {
            args: 300,
            msg: 'Maximum weight is 300 kilos.',
          },
          min: {
            args: 25,
            msg: 'The minimum weight is 25 kilos',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Report, { foreignKey: 'student_id', as: 'reports' });
  }
}
