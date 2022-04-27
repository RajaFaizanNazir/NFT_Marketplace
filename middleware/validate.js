const { body, validationResult } = require("express-validator");
/**************************************** */
const credentialsValidator = () => {
  return [
    body("email").exists().isEmail(),
    body("password").exists().isLength({ min: 5 }),
  ];
};
/**************************************** */
const emailValidator = () => {
  return [body("email").exists().isEmail()];
};
const nameValidator = () => {
  return [body("name").exists()];
};
const walletValidator = () => {
  return [body("walletAddr").exists()];
};
/**************************************** */
const idValidator = () => {
  return [body("id").exists()];
};
/**************************************** */
module.exports = {
  credentialsValidator,
  emailValidator,
  idValidator,
  nameValidator,
  walletValidator,
  validationResult,
};
/**************************************** */
