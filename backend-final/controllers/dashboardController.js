const User = require("../models/User");
const Shop = require("../models/Shop");

const getDashboardStats = async (req, res) => {

  try {

    const totalOwners = await User.countDocuments();

    const totalShops = await Shop.countDocuments();

    res.json({
      totalOwners,
      totalShops,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  getDashboardStats,
};