const env = require("dotenv");

env.config();

module.exports = {
  mongoURI: `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.jsyoc.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
};
