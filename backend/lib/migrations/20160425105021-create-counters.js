module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('counters', {
           id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE
            },
            value: {
              type: Sequelize.INTEGER,
              allowNull: false,
            }
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('counters');
    }
}
