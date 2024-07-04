const express = require('express');
const { returnAssetController } = require('../controller/asset_return_controller');

const router = express.Router();

router.post('/asset', returnAssetController);

module.exports = router;
