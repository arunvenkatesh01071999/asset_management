const  AssetReturn  = require('../models/asset_return_model');
const  Asset  = require('../models/asset');
const AssetHistory  = require('../models/asset_history');


const returnAssetService = async ({ assetId, employeeId, reason }) => {
  
  const returnAsset = await AssetReturn.create({ assetId, employeeId, reason });
  console.log(assetId,"assetId service ");//3
  console.log(employeeId,"employeeId service");//3
  console.log(reason,"reason service");//r
  await Asset.update({ status: 'in_stock' }, { where: { id: assetId } });
  await AssetHistory.create({ assetId, employeeId, action: 'returned', details: reason });
  return returnAsset;
};

module.exports = {
  returnAssetService
};
