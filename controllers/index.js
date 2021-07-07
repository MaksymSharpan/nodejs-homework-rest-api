const listContacts = require('../controllers/users/listContacts');
const addContact = require('../controllers/users/addContact');
const getContactById = require('../controllers/users/getContactById');
const removeContact = require('../controllers/users/removeContact');
const updateContact = require('../controllers/users/updateContact');

module.exports = {
  listContacts,
  addContact,
  getContactById,
  removeContact,
  updateContact,
};
