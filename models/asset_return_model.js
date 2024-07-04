const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AssetReturn = sequelize.define('asset_returns', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  assetId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },
  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },
  reason: {
    type: DataTypes.ENUM('upgrade', 'repair', 'resignation'),
    allowNull: false
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});

module.exports = AssetReturn;
