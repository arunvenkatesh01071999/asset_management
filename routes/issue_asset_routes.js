const express = require('express');
const router = express.Router();
const { issueAssetController } = require('../controller/issue_asset_controller');

router.post('/create', issueAssetController);

module.exports = router;
