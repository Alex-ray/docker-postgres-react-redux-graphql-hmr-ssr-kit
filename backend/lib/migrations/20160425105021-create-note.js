module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('notes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            text: Sequelize.STRING
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('notes');
    }
}