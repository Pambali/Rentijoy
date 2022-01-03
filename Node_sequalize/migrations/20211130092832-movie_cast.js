'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('movieCast', {
            MovieId: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false
            },
            Actors: DataTypes.STRING,
            Producers: DataTypes.STRING,
            Director: DataTypes.STRING,
            Writer: DataTypes.STRING
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('movieCast');


    }
};