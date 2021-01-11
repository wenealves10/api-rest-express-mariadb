module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('students', 'photo',
      {
        type: Sequelize.STRING,
        allowNull: false,
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('students', 'photo');
  },
};
