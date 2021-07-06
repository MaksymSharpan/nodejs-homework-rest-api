const Contact = require('../../model/Contact');
const { v4: uuidv4 } = require('uuid');
const { contactSchema } = require('../../validateSchemas');

const addContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const { error } = contactSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: 'error',
        code: 404,
        message: error.message,
      });
      return;
    }
    const id = uuidv4();
    const contact = new Contact({
      name,
      email,
      phone,
      id,
    });
    await contact.save();
    res.json(contact);
  } catch (error) {
    throw error;
  }
};

module.exports = addContact;
