const express = require("express");
const router = express.Router();
const {
  getContact,
  getSingleContact,
  createContact,
  editContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/api/contacts").get(getContact).post(createContact);

router
  .route("/api/contacts/:id")
  .get(getSingleContact)
  .put(editContact)
  .delete(deleteContact);

module.exports = router;
