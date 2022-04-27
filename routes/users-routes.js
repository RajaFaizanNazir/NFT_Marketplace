const express = require("express");
/**************************************** */
const usersController = require("../controllers/users-controllers");
const walletController = require("../controllers/wallet-controller");
const nftController = require("../controllers/nft-controller");
const validator = require("../middleware/validate");
/**************************************** */
const router = express.Router();
/**************************************** */
router.post(
  "/signup",
  [validator.credentialsValidator(), validator.nameValidator()],
  usersController.signup
);
/**************************************** */
router.get("/createWallet", walletController.createWallet);
/**************************************** */
router.get("/createWallet", walletController.createWallet);
/**************************************** */
router.post(
  "/signupAsAdmin",
  [validator.credentialsValidator()],
  usersController.signupAsAdmin
);
/**************************************** */
router.post("/login", validator.credentialsValidator(), usersController.login);
/**************************************** */
router.post(
  "/updatePassword",
  validator.credentialsValidator(),
  usersController.updatePassword
);
/**************************************** */
router.get("/viewNFT");
/**************************************** */
router.get("/viewPayouts");
/**************************************** */
router.post("/approvePayout");
/**************************************** */
router.post("/SaleOrder");
/**************************************** */
router.post("/requestForApproval");
/**************************************** */
router.post("/viewPendingPayouts");
/**************************************** */
router.post("/viewUserHistory");
/**************************************** */
router.post("/acceptRequest");
/**************************************** */
router.post("/rejectRequest");
/**************************************** */
module.exports = router;
/**************************************** */
