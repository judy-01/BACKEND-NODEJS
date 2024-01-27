const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect("mongodb+srv://judy:1986ldr@cluster0.mdfwajp.mongodb.net/livraria", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect,
};

