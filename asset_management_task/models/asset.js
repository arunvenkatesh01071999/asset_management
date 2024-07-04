const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AssetReturn = require('./asset_return_model');
const AssetScrap = require('./asset_scraps');
const AssetHistory = require('./asset_history');

const Asset = sequelize.define('asset_masters', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  make: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  status: {
    type: DataTypes.ENUM('in_stock', 'issued', 'obsolete'),
    allowNull: false,
    defaultValue: 'in_stock',
  },
  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Asset.hasMany(AssetReturn, { foreignKey: 'assetId' });
Asset.hasMany(AssetScrap, { foreignKey: 'assetId' });
Asset.hasMany(AssetHistory, { foreignKey: 'assetId' });

module.exports = Asset;
