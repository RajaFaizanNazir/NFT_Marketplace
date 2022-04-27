const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
/**************************************** */
const taskSchema = new Schema(
  {
    nft: [{ type: mongoose.Types.ObjectId, ref: "NFT" }],
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("SaleOrder", taskSchema);
/**************************************** */
