// @desc  Get all Contacts
// @route  GET /api/contacts
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts", status: "200" });
};

// @desc  Create a Contact
// @route  POST /api/contacts
// @access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Created Contact", status: "201" });
};

// @desc  Get single Contact
// @route  GET /api/contacts/:id
// @access public
const getSingleContact = (req, res) => {
  res.status(202).json({ message: "Get one contact details", status: "202" });
};

// @desc  Edit a Contact
// @route  PUT /api/contacts/:id
// @access public
const editContact = (req, res) => {
  res.status(202).json({ message: "Contact Updated", status: "202" });
};
// @desc  Delete a Contact
// @route  DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(202).json({ message: "Contact deleted", status: "202" });
};

module.exports = {
  getContact,
  getSingleContact,
  createContact,
  editContact,
  deleteContact,
};
