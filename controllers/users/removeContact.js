const Contact = require('../../model/Contact');

const removeContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await Contact.findOneAndDelete({ id: contactId });
    res.json({
      message: 'Удаленный контакт' + contact,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = removeContact;
