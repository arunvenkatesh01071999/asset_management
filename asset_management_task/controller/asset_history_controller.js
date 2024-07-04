const {assetHistoryService} = require('../service/asset_history_service');

const getAssetHistoryController = async (req, res) => {
  const { assetId } = req.params;
  try {
    const history = await assetHistoryService(assetId);
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports={getAssetHistoryController}