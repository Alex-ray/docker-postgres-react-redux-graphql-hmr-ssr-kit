export default function(sequelize, DataTypes) {
    const counters = sequelize.define("counters", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        value: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    }, {
      timestamps: true,
    });

    return counters;
};
