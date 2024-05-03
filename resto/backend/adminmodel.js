const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://aravindsabu760:aravind@cluster0.6lla1jd.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.error(err));

const Schema = mongoose.Schema;


const adminSchema = new Schema({
    username: String,
    email: String,
    password: String,
  });
  
  const Admin = mongoose.model('Admin', adminSchema);
  module.exports = Admin;
