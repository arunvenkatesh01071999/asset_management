const {
    addAssetCategory,
    getAllAssetCategories,
    getAssetCategoryById,
    updateAssetCategory,
    deleteAssetCategory,
  } = require('../service/asset_category_service');
  
  // Add new asset category
  const addAssetCategoryController = async (req, res) => {
    try {
      const assetCategoryData = req.body;
      const newAssetCategory = await addAssetCategory(assetCategoryData);
      res.status(201).json(newAssetCategory);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Get all asset categories
  const getAllAssetCategoriesController = async (req, res) => {
    try {
      const assetCategories = await getAllAssetCategories();
      res.status(200).json(assetCategories);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Get asset category by ID
  const getAssetCategoryByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const assetCategory = await getAssetCategoryById(id);
      res.status(200).json(assetCategory);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Update asset category
  const updateAssetCategoryController = async (req, res) => {
    try {
      const { id } = req.params;
      const assetCategoryData = req.body;
      const updatedAssetCategory = await updateAssetCategory(id, assetCategoryData);
      res.status(200).json(updatedAssetCategory);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Delete asset category
  const deleteAssetCategoryController = async (req, res) => {
    try {
      const { id } = req.params;
      await deleteAssetCategory(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    addAssetCategoryController,
    getAllAssetCategoriesController,
    getAssetCategoryByIdController,
    updateAssetCategoryController,
    deleteAssetCategoryController,
  };
  