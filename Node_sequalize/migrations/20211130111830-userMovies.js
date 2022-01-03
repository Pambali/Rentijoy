'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('userMovies', {
            id:{
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            userId: {
                type: DataTypes.UUID,
                allowNull: false
            },
            MovieId: {
                type: DataTypes.UUID,
                allowNull: false
            },
            RentStatus: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            RentDate: {
                type: 'TIMESTAMP',
                defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            RentExpireDate: DataTypes.DATE,
            BuyedStatus: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('userMovies');
    }
};