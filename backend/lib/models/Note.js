export default function(sequelize, DataTypes) {
    const Note = sequelize.define("Notes", {
        text: DataTypes.STRING
    });

    return Note;
};