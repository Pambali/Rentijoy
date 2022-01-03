'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            userId: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            userEmail: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            userPhone: {
                type: DataTypes.BIGINT,
            },
            userPassword: DataTypes.STRING,
            Logged:{
                type:DataTypes.BOOLEAN,
                defaultValue:false
            }
        });

    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');

    }
};