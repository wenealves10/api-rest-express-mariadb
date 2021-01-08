import Sequelize, { Model } from 'sequelize';

export default class Report extends Model {
  static init(sequelize) {
    super.init({
      matter: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'the surname must be between 4 and 255 characters.',
          },
          isAlpha: {
            msg: 'Only letters',
          },
        },
      },
      note_1: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isNumeric: {
            msg: 'whole numbers only.',
          },
          max: {
            args: 10,
            msg: 'Only grades less than or equal to 10.',
          },
          min: {
            args: 0,
            msg: 'Only grades equal to or greater than 0',
          },
        },
      },
      note_2: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isNumeric: {
            msg: 'whole numbers only.',
          },
          max: {
            args: 10,
            msg: 'Only grades less than or equal to 10.',
          },
          min: {
            args: 0,
            msg: 'Only grades equal to or greater than 0',
          },
        },
      },
      note_3: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isNumeric: {
            msg: 'whole numbers only.',
          },
          max: {
            args: 10,
            msg: 'Only grades less than or equal to 10.',
          },
          min: {
            args: 0,
            msg: 'Only grades equal to or greater than 0',
          },
        },
      },
      note_4: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isNumeric: {
            msg: 'whole numbers only.',
          },
          max: {
            args: 10,
            msg: 'Only grades less than or equal to 10.',
          },
          min: {
            args: 0,
            msg: 'Only grades equal to or greater than 0',
          },
        },
      },
      average: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isNumeric: {
            msg: 'whole numbers only.',
          },
          max: {
            args: 10,
            msg: 'Only grades less than or equal to 10.',
          },
          min: {
            args: 0,
            msg: 'Only grades equal to or greater than 0',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
