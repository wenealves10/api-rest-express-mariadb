const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users',
      [{
        name: 'John Doe',
        email: 'john1@gmail.com',
        password_hash: await bcrypt.hash('123456aa7', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        name: 'John Doe 2',
        email: 'john2@gmail.com',
        password_hash: await bcrypt.hash('12fdsf34567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        name: 'John Doe 3',
        email: 'john3@gmail.com',
        password_hash: await bcrypt.hash('1234sds567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        name: 'John Doe 4',
        email: 'john4@gmail.com',
        password_hash: await bcrypt.hash('123as4567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        name: 'John Doe 5',
        email: 'john5@gmail.com',
        password_hash: await bcrypt.hash('1234ccfs567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        name: 'John Doe 6',
        email: 'john6@gmail.com',
        password_hash: await bcrypt.hash('12345sda67', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        name: 'John Doe 7',
        email: 'john7@gmail.com',
        password_hash: await bcrypt.hash('1234asdwr567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }],
      {

      });
  },

  down: async () => {

  },
};
