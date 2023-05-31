require("dotenv").config();
const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/foods");
const isValidId = require("../../middlewares/isValidId");

router.get("/", ctrl.getAll);
router.get("/:id", isValidId, ctrl.getById);

module.exports = router;
