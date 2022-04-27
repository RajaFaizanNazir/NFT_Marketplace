const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
/**************************************** */
const taskSchema = new Schema(
  {
    orders: [{ type: mongoose.Types.ObjectId, ref: "Payout" }],
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("Payouts", taskSchema);
/**************************************** */
