const express = require('express');
const router = express.Router();
const {scrapAssetController} = require('../controller/scrap_controller');

router.post('/asset', scrapAssetController);

module.exports = router;
