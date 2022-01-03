const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define("payment", {
      paymentId: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false
      },
      userId: {
          type: DataTypes.UUID,
          allowNull:false
      },
      MovieId: {
          type: DataTypes.UUID,
          allowNull:false
      },
      paymentStatus: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      },
      movieRentType: DataTypes.STRING,
      PaymentDate: {
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false
      }
  })

  return payment;
}