const Contact = require('../../model/Contact');

const getContactById = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await Contact.find({ id: contactId });
    console.log(contactId);
    res.json({
      message: contact,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = getContactById;
