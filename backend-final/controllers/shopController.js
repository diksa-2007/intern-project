const Shop = require("../models/Shop");


// CREATE SHOP
const createShop = async (req, res, next) => {

  try {

    const {
  shopOwnerName,
  ownerEmail,
  shopName,
  shopType,
  floorNumber,
  phoneNumber,
  cctvStatus,
  rentStatus,
  buildingSystem,
} = req.body;

    if (
  !shopOwnerName ||
  !ownerEmail ||
  !shopName ||
  !shopType ||
  !floorNumber ||
  !rentStatus ||
  !buildingSystem
) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const shop = await Shop.create({
  shopOwnerName,
  ownerEmail,
  shopName,
  shopType,
  floorNumber,
  phoneNumber,
  cctvStatus,
  rentStatus,
  buildingSystem,
});

    res.status(201).json(shop);

  } catch (error) {
    next(error);
  }
};


// GET ALL SHOPS
const getShops = async (req, res, next) => {

  try {

    const ownerEmail = req.query.email;

const shops = await Shop.find({
  ownerEmail: ownerEmail,
});

    res.json(shops);

  } catch (error) {
    next(error);
  }
};


// UPDATE SHOP
const updateShop = async (req, res, next) => {

  try {

    const updatedShop = await Shop.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedShop) {
      return res.status(404).json({
        message: "Shop not found",
      });
    }

    res.json(updatedShop);

  } catch (error) {
    next(error);
  }
};


// DELETE SHOP
const deleteShop = async (req, res, next) => {

  try {

    const deletedShop = await Shop.findByIdAndDelete(
      req.params.id
    );

    if (!deletedShop) {
      return res.status(404).json({
        message: "Shop not found",
      });
    }

    res.json({
      message: "Shop deleted successfully",
    });

  } catch (error) {
    next(error);
  }
};


module.exports = {
  createShop,
  getShops,
  updateShop,
  deleteShop,
};
