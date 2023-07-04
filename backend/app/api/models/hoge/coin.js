const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const HogeCoinSchema = new Schema({
  walletId: {
    type: String,
  },
  amount: {
    type: Number,
  },
});
HogeCoinSchema.plugin(autoIncrement.plugin, 'HogeCoin');
module.exports = mongoose.model('HogeCoin', HogeCoinSchema)