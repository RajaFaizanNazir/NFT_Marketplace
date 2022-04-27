const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    balance: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("Wallet", userSchema);
/**************************************** */
