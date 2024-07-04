const Asset = require('../models/asset');

// Get all assets in stock
const getAssetsInStock = async () => {
  try {
    const assets = await Asset.findAll({
      where: {
        status: 'in_stock', // Adjust based on your asset status criteria
      },
    });
    return assets;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Calculate total value of assets in stock
const getTotalStockValue = async () => {
  try {
    const totalValue = await Asset.sum('value', {
      where: {
        status: 'in_stock', // Adjust based on your asset status criteria
      },
    });
    return totalValue;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAssetsInStock,
  getTotalStockValue,
};
