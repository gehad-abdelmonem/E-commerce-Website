const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "Users" },
  Price: Number,
  Products: {
    type: [{ _id: false, Quantity: Number, Product: { type: Number, ref: "Product" } }],
  },
  OrderDate: Date,
})

module.exports = mongoose.model("Orders", OrderSchema)
