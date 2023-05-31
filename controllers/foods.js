const Food = require("../models/food");
const ctrlWrapper = require("../utils/ctrlWrapper");
const HttpError = require("../helpers/HttpError");

const getAll = async (req, res) => {
  const result = await Food.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Food.findById(id);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
