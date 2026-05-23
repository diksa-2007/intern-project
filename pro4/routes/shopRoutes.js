const express = require("express");

const router = express.Router();

const {
  createShop,
  getShops,
  updateShop,
  deleteShop,
} = require("../controllers/shopController");


// CREATE
router.post("/", createShop);


// READ
router.get("/", getShops);


// UPDATE
router.put("/:id", updateShop);


// DELETE
router.delete("/:id", deleteShop);


module.exports = router;