const ctrlWrapper = require("../utils/ctrlWrapper");
const Order = require("../models/order");

const submitOrder = async (req, res) => {
  const newOrder = await Order.create({
    ...req.body,
  });

  res.status(201).json({
    subscription: newOrder,
  });
};

const getAllUserOrder = async (req, res) => {
  const { phone, email, _id } = req.body;
  const resultPhone = await Order.findOne({ phone });
  const resultEmail = await Order.findOne({ email });
  const resultId = await Order.findOne({ _id });
  const result = resultPhone || resultEmail || resultId;
  res.json(result);
};

module.exports = {
  submitOrder: ctrlWrapper(submitOrder),
  getAllUserOrder: ctrlWrapper(getAllUserOrder),
};
