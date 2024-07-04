const Asset = require('../models/asset');

// Add new asset
const addAsset = async (assetData) => {
  try {
    const newAsset = await Asset.create(assetData);
    return newAsset;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all assets
const getAllAssets = async () => {
  try {
    const assets = await Asset.findAll();
    return assets;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get asset by ID
const getAssetById = async (id) => {
  try {
    const asset = await Asset.findByPk(id);
    if (!asset) {
      throw new Error('Asset not found');
    }
    return asset;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update asset
const updateAsset = async (id, assetData) => {
  try {
    const asset = await Asset.findByPk(id);
    if (!asset) {
      throw new Error('Asset not found');
    }
    Object.assign(asset, assetData);
    await asset.save();
    return asset;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete asset
const deleteAsset = async (id) => {
  try {
    const asset = await Asset.findByPk(id);
    if (!asset) {
      throw new Error('Asset not found');
    }
    await asset.destroy();
    return;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  addAsset,
  getAllAssets,
  getAssetById,
  updateAsset,
  deleteAsset,
};
