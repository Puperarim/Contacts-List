const db = require('../db');
const {DataTypes} = require('sequelize');

const Contact = db.define('contact', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    phoneNumber: {type: DataTypes.STRING, allowNull: false, unique: true},
});

module.exports = Contact;