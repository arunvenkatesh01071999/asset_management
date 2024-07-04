const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AssetHistory = sequelize.define('asset_histories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  assetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'asset_masters',
      key: 'id'
    }
  },
  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: true, // Allow null for scrap events where no employee is involved
    references: {
      model: 'employees_masters',
      key: 'id'
    }
  },
  action: {
    type: DataTypes.ENUM('issued', 'returned', 'scrapped'),
    allowNull: false
  },
  actionDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = AssetHistory;
