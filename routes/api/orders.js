const express = require("express");
const router = express.Router();
const validateBody = require("../../utils/validateBody");
const addOrderSchema = require("../../schemas/order");
const ctrl = require("../../controllers/orders");


router.post("/", validateBody(addOrderSchema), ctrl.submitOrder);
router.get("/", ctrl.getAllUserOrder);


module.exports = router;
