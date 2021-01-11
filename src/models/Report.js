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
            args: -1,
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
            args: -1,
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
            args: -1,
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
            args: -1,
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
            args: -1,
            msg: 'Only grades equal to or greater than 0',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (report) => {
      if (report.note_1 || report.note_2 || report.note_3 || report.note_4) {
        const {
          note_1: note1, note_2: note2, note_3: note3, note_4: note4,
        } = report;
        report.average = (note1 + note2 + note3 + note4) / 4;
      }
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
  }
}
