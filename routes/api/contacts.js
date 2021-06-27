const express = require('express');
const router = express.Router();

const { contacts: ctrl } = require('../../controllers');
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require('../../model/index');

router.get('/', listContacts);

router.get('/:contactId', getContactById);

router.post('/', addContact);

router.delete('/:contactId', removeContact);

router.put('/:contactId', updateContact);

module.exports = router;
