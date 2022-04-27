const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
/**************************************** */
const taskSchema = new Schema(
  {
    price: { type: Number },
    nft: { type: mongoose.Types.ObjectId, ref: "NFT" },
    owner: { type: mongoose.Types.ObjectId, ref: "User" },
    buyer: { type: mongoose.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["PENDING", "COMPLETE"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("Payout", taskSchema);
/**************************************** */
