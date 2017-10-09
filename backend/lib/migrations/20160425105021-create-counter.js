module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('counters', {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
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
            value: Sequelize.INTEGER
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('counters');
    }
}
