'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('movies', {
            MovieId: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            MovieName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Language:{
                type: DataTypes.STRING
            },
            Year:{
                type: DataTypes.INTEGER
            },
            Poster: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Rating:{
                type:DataTypes.FLOAT
            },
            Released: {
                type: DataTypes.STRING
            },
            Duration: {
                type: DataTypes.STRING
            },
            Genre: {
                type: DataTypes.STRING
            },
            RentAmt: DataTypes.INTEGER,
            BuyAmt: DataTypes.INTEGER,
            Description: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        });

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('movies');

    }
};