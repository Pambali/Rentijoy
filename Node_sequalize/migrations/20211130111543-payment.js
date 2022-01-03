'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('payment', {
            paymentId: {
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
            paymentStatus: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            movieRentType: DataTypes.STRING,
            PaymentDate: {
                type: 'TIMESTAMP',
                defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('payment');
    }
};