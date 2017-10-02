"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var Notes = sequelize.define("notes", {
        text: DataTypes.STRING
    });

    return Notes;
};

;