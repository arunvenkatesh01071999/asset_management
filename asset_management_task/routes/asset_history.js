const express = require('express');
const router = express.Router();
const {getAssetHistoryController } = require('../controller/asset_history_controller');

router.get('/asset/:assetId', getAssetHistoryController);

module.exports = router;
