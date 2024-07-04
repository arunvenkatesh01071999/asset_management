// controllers/scrapAssetController.js
const {scrapAssetService} = require('../service/scrap_service');

const scrapAssetController = async (req, res) => {
  const { assetId, reason } = req.body;
  try {
    const scrapAsset = await scrapAssetService(assetId, reason);
    res.status(201).json(scrapAsset);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {scrapAssetController}