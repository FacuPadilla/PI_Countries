const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Temporada: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
        },
    }, {
        timestamps: false
    });
};