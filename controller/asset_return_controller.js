const { returnAssetService } = require('../service/asset_return_service');

const returnAssetController = async (req, res) => {
  const { assetId, employeeId, reason } = req.body;
  console.log(assetId,"assetId controller ");
  console.log(employeeId,"employeeId controller");
  console.log(reason,"reason controller");
  try {
    const returnAssets = await returnAssetService({ assetId, employeeId, reason });
    res.status(201).json(returnAssets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  returnAssetController
};
