const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AssetScrap = sequelize.define('asset_scraps', {
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
  scrapDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  reason: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = AssetScrap;
