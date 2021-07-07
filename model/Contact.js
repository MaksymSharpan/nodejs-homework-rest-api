const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: { type: String },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
});

module.exports = model('Contact', schema);
