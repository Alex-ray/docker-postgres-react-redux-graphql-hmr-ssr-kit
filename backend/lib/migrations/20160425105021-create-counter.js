module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Counter', {
           id: {
              type: Sequelize.UUID,
              primaryKey: true
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
              allowNull: false
            }
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Counter');
    }
}
