const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  picture: {
    type: String,
  },
});

module.exports = { Products };
