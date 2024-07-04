const express = require('express');
const router = express.Router();
const {
  addAssetCategoryController,
  getAllAssetCategoriesController,
  getAssetCategoryByIdController,
  updateAssetCategoryController,
  deleteAssetCategoryController,
} = require('../controller/asset_category_controller');

router.post('/add', addAssetCategoryController);
router.get('/all', getAllAssetCategoriesController);
router.get('/:id', getAssetCategoryByIdController);
router.put('/:id', updateAssetCategoryController);
router.delete('/:id', deleteAssetCategoryController);

module.exports = router;
