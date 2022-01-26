const mogoose = require("mongoose");

const CartSchema = new mogoose.Schema(
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
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Cart", CartSchema);