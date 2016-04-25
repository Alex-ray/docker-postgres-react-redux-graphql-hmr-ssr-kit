import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import conf from '../conf';

const dbconf = conf.get('database');

export const sequelize = new Sequelize(dbconf.database, dbconf.username, dbconf.password, dbconf);

const models = {};

//load models
fs
.readdirSync(__dirname)
.filter(function(file) {
    return file !== 'index.js';
})
.forEach(function(file) {
    const model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
});

//create associations
Object.keys(models).forEach(function(name) {
    if ('associate' in models[name]) {
        models[name].associate(models);
    }
});

export default models;