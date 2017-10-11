export default function(sequelize, DataTypes) {
    const Counter = sequelize.define('Counter', {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
        },
        value: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    }, {
      timestamps: true,
    });

    return Counter;
};
