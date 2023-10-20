const mongoose = require("mongoose");
const connectDB = async (mongo_uri) => {
  await mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to the DB");
};
module.exports = { connectDB };
