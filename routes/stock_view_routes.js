const express = require('express');
const router = express.Router();
const {
  getAssetsInStockController,
  getTotalStockValueController,
} = require('../controller/stock_view_controller');

router.get('/assets', getAssetsInStockController);
router.get('/total-value', getTotalStockValueController);

module.exports = router;
