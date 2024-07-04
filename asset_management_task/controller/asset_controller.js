const {
    addAsset,
    getAllAssets,
    getAssetById,
    updateAsset,
    deleteAsset,
  } = require('../service/asset_service');
  
  // Add new asset
  const addAssetController = async (req, res) => {
    try {
      const assetData = req.body;
      const newAsset = await addAsset(assetData);
      res.status(201).json(newAsset);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Get all assets
  const getAllAssetsController = async (req, res) => {
    try {
      const assets = await getAllAssets();
      res.status(200).json(assets);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Get asset by ID
  const getAssetByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const asset = await getAssetById(id);
      res.status(200).json(asset);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Update asset
  const updateAssetController = async (req, res) => {
    try {
      const { id } = req.params;
      const assetData = req.body;
      const updatedAsset = await updateAsset(id, assetData);
      res.status(200).json(updatedAsset);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Delete asset
  const deleteAssetController = async (req, res) => {
    try {
      const { id } = req.params;
      await deleteAsset(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    addAssetController,
    getAllAssetsController,
    getAssetByIdController,
    updateAssetController,
    deleteAssetController,
  };
  