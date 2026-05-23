const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  
  ownerName: {
    type: String,
    required: true,
  },

  shopName: {
    type: String,
    required: true,
  },

  shopType: {
    type: String,
    required: true,
  },

  floorNumber: {
    type: Number,
    required: true,
  },

  rentStatus: {
    type: String,
    required: true,
  },

  buildingSystem: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("Shop", shopSchema);