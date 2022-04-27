const HttpError = require("../util/http-error");
const Wallet = require("../models/wallet");
const validator = require("../middleware/validate");
/**************************************** */
const getWallets = async (req, res, next) => {
  let users;
  try {
    wallets = await Wallet.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later." + err,
      500
    );
    return next(error);
  }
  res.json({ Wallets: wallets });
};
/**************************************** */
const createWallet = async (req, res, next) => {
  const errors = validator.validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const createdWallet = new Wallet({});

  try {
    await createdWallet.save();
  } catch (err) {
    const error = new HttpError(
      "Signing up failed while saving, please try again later" + err,
      500
    );
    return next(error);
  }

  res.status(201).json({ createdWallet });
};
module.exports = {
  createWallet,
  getWallets,
};
