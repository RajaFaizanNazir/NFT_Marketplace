const HttpError = require("../util/http-error");
const Nft = require("../models/nft");
const validator = require("../middleware/validate");
/**************************************** */
const getNfts = async (req, res, next) => {
  let users;
  try {
    nft = await Nft.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later." + err,
      500
    );
    return next(error);
  }
  res.json({ NFT: nft });
};
/**************************************** */
const createNft = async (req, res, next) => {
  const errors = validator.validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { title, price, url, owner } = req.body;
  const createdNft = new Nft({ title, price, url, owner });

  try {
    await createdNft.save();
  } catch (err) {
    const error = new HttpError(
      "Signing up failed while saving, please try again later" + err,
      500
    );
    return next(error);
  }

  res.status(201).json({ createdNft });
};
module.exports = {
  createNft,
  getNfts,
};
