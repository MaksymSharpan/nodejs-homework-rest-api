const Contact = require('../../model/Contact');

const listContacts = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.json(contact);
  } catch (error) {
    console.log(error);
  }
};

module.exports = listContacts;
