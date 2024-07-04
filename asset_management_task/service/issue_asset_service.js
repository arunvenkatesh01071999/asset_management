const Asset = require('../models/asset');


const issueAsset = async (assetId, employeeId) => {
  try {
    const asset = await Asset.findByPk(assetId);
    if (!asset) {
      throw new Error('Asset not found');
    }
    asset.status = 'issued';
    asset.employeeId = employeeId;
    await asset.save();
    return asset;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  issueAsset,
};
