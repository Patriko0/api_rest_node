const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Patrik1',
          email: 'patrikamerico1@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Patrik2',
          email: 'patrikamerico2@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Patrik3',
          email: 'patrikamerico3@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
      ],

      {},
    );
  },

  down() {},
};
