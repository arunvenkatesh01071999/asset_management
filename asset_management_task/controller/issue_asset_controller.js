const { issueAsset } = require('../service/issue_asset_service');

// Issue asset to an employee
const issueAssetController = async (req, res) => {
  try {
    const { assetId, employeeId } = req.body;
    console.log(assetId,"assetId");
    console.log(employeeId,"employeeId");

    const issuedAsset = await issueAsset(assetId, employeeId);
    res.status(200).json(issuedAsset);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  issueAssetController,
};
