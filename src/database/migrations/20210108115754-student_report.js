module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reports', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      matter: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      note_1: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      note_2: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      note_3: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      note_4: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      average: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('reports');
  },
};
