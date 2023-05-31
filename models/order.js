const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for order"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Set phone for order"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    order: [{}],
    total: Number,
    map: { type: Map, default: null },
  },

  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);
module.exports = Order;
