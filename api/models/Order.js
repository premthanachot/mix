const mogoose = require("mongoose");

const OrderSchema = new mogoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        }
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Order", OrderSchema);