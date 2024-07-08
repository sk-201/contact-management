const express = require("express");
const router = express.Router();
router.route("/api/contacts").get((req, res) => {
  res.status(200).json({ message: "Get all contacts", status: "200" });
});
router.route("/api/contacts").post((req, res) => {
  res.status(201).json({ message: "Created Contact", status: "201" });
});
router.route("/api/contacts/:id").get((req, res) => {
  res.status(202).json({ message: "Get one contact details", status: "202" });
});
router.route("/api/contacts/:id").put((req, res) => {
  res.status(202).json({ message: "Contact Updated", status: "202" });
  router.route("/api/contacts/:id").delete((req, res) => {
    res.status(202).json({ message: "Contact deleted", status: "202" });
  });
});

module.exports = router;
