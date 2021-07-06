const Contact = require('../../model/Contact');
const { updateSchema } = require('../../validateSchemas');

const updateContact = async (req, res) => {
  try {
    const { error } = updateSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: 'error',
        code: 404,
        message: error.message,
      });
      return;
    }

    const { contactId } = req.params;
    const { name, phone, email } = req.body;
    const contact = await Contact.findOneAndUpdate(
      { id: contactId },
      { name, phone, email },
    );

    const updatedContact = await contact.save();

    res.json({ name, phone, email });
  } catch (error) {
    throw error;
  }
};

module.exports = updateContact;
