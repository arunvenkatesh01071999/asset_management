const {
    getAssetsInStock,
    getTotalStockValue,
  } = require('../service/stock_view_service');
  
  // Get all assets in stock
  const getAssetsInStockController = async (req, res) => {
    try {
      const assetsInStock = await getAssetsInStock();
      console.log(assetsInStock,"assetsInStock");
      res.status(200).json(assetsInStock);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Get total value of assets in stock
  const getTotalStockValueController = async (req, res) => {
    try {
      const totalStockValue = await getTotalStockValue();
      res.status(200).json({ totalValue: totalStockValue });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAssetsInStockController,
    getTotalStockValueController,
  };
  