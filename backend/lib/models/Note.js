export default function(sequelize, DataTypes) {
    const Notes = sequelize.define("notes", {
        text: DataTypes.STRING
    });

    return Notes;
};