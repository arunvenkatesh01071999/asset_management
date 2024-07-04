const express = require('express');
const {
  addAssetController,
  getAllAssetsController,
  getAssetByIdController,
  updateAssetController,
  deleteAssetController,
} = require('../controller/asset_controller');

const router = express.Router();

// Add new asset
router.post('/add', addAssetController);

// Get all assets
router.get('/all', getAllAssetsController);

// Get asset by ID
router.get('/:id', getAssetByIdController);

// Update asset
router.put('/:id', updateAssetController);

// Delete asset
router.delete('/:id', deleteAssetController);

module.exports = router;
