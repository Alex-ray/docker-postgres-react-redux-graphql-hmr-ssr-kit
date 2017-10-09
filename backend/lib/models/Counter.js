export default function(sequelize, DataTypes) {
    const Counters = sequelize.define("counters", {
        value: DataTypes.INTEGER,
    });

    return Counters;
};
