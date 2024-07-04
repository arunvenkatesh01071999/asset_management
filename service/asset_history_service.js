const  AssetHistory = require('../models/asset_history');

const assetHistoryService = async (assetId) => {
  try {
    const history = await AssetHistory.findAll({ where: { assetId } });
    return history;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports={assetHistoryService}