module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Notes', {
            text: Sequelize.STRING
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Notes');
    }
}