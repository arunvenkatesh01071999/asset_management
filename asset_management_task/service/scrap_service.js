
const  AssetScrap  = require('../models/asset_scraps');
const  Asset  = require('../models/asset');
const AssetHistory  = require('../models/asset_history');

const scrapAssetService = async (assetId, reason) => {
  const scrapAsset = await AssetScrap.create({ assetId, reason });
  await Asset.update({ status: 'obsolete' }, { where: { id: assetId } });
  await AssetHistory.create({ assetId, action: 'scrapped', details: reason });
  return scrapAsset;
};

module.exports = {scrapAssetService}
