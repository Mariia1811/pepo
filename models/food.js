const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const foodSchema = new Schema(
  {
    store: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    img: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);
foodSchema.post("save", handleMongooseError);

const Food = model("food", foodSchema);

module.exports = Food;
