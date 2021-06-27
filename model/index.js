const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { contactSchema } = require('../validateSchemas');

// const contacts = require('./contacts.json');
const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async (req, res) => {
  try {
    const contacts = await fs.readFile(contactsPath);
    const data = JSON.parse(contacts);
    return res.json({
      status: 'success',
      code: 200,
      data: {
        result: data,
      },
    });
  } catch (error) {
    throw error;
  }
};

const getContactById = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contacts = await fs.readFile(contactsPath);
    const data = JSON.parse(contacts);

    const contact = data.find(item => item.id === Number(contactId));
    return res.json({
      status: 'success',
      code: 200,
      data: {
        result: contact,
      },
    });
  } catch (error) {
    throw error;
  }
};

const removeContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contacts = await fs.readFile(contactsPath);
    const data = JSON.parse(contacts);
    const index = data.findIndex(item => item.id === Number(contactId));
    const delContact = data[index];
    data.splice(index, 1);
    const contactsToString = JSON.stringify(data);
    console.log(contactsToString);
    fs.writeFile(contactsPath, contactsToString);

    res.json({
      status: 'success',
      code: 200,
      data: {
        result: delContact,
      },
    });
  } catch (error) {
    throw error;
  }
};

const addContact = async (req, res) => {
  try {
    const contacts = await fs.readFile(contactsPath);
    const data = JSON.parse(contacts);
    const { error } = contactSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: 'error',
        code: 404,
        message: 'missing required name field',
      });
      return;
    }
    const newContact = { id: uuidv4(), ...req.body };
    const newContactsList = [...data, newContact];
    const contactsToString = JSON.stringify(newContactsList);
    // console.log(contactsToString);
    fs.writeFile(contactsPath, contactsToString);

    return res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result: newContact,
      },
    });
  } catch (error) {
    throw error;
  }
};

const updateContact = async (req, res) => {
  try {
    const contacts = await fs.readFile(contactsPath);
    const data = JSON.parse(contacts);
    const { error } = contactSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: 'error',
        code: 404,
        message: error.message,
      });
      return;
    }
    const { contactId } = req.params;
    const index = data.findIndex(item => item.id === Number(contactId));
    if (index === -1) {
      return res.status(400).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
    }
    data[index] = { ...req.body, contactId };
    const contactsToString = JSON.stringify(data);
    fs.writeFile(contactsPath, contactsToString);
    return res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result: data[index],
      },
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
