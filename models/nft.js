const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
/**************************************** */
const taskSchema = new Schema(
  {
    title: { type: String, default: "Newly Minted NFT" },
    price: { type: Number },
    url: { type: String },
    owner: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("NFT", taskSchema);
/**************************************** */
