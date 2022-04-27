const express = require("express");
/**************************************** */
const usersController = require("../controllers/users-controllers");
const taskUtils = require("../controllers/task-controllers");
const requestUtils = require("../controllers/request-controllers");
const validator = require("../middleware/validate");
/**************************************** */
const router = express.Router();
/**************************************** */
router.post(
  "/signup",
  validator.credentialsValidator(),
  usersController.signup
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
