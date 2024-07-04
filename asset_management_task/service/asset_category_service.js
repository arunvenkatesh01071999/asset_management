const AssetCategory = require('../models/asset_category');

// Add new asset category
const addAssetCategory = async (assetCategoryData) => {
  try {
    const newAssetCategory = await AssetCategory.create(assetCategoryData);
    return newAssetCategory;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all asset categories
const getAllAssetCategories = async () => {
  try {
    const assetCategories = await AssetCategory.findAll();
    return assetCategories;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get asset category by ID
const getAssetCategoryById = async (id) => {
  try {
    const assetCategory = await AssetCategory.findByPk(id);
    if (!assetCategory) {
      throw new Error('Asset Category not found');
    }
    return assetCategory;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update asset category
const updateAssetCategory = async (id, assetCategoryData) => {
  try {
    const assetCategory = await AssetCategory.findByPk(id);
    if (!assetCategory) {
      throw new Error('Asset Category not found');
    }
    Object.assign(assetCategory, assetCategoryData);
    await assetCategory.save();
    return assetCategory;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete asset category
const deleteAssetCategory = async (id) => {
  try {
    const assetCategory = await AssetCategory.findByPk(id);
    if (!assetCategory) {
      throw new Error('Asset Category not found');
    }
    await assetCategory.destroy();
    return;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  addAssetCategory,
  getAllAssetCategories,
  getAssetCategoryById,
  updateAssetCategory,
  deleteAssetCategory,
};
