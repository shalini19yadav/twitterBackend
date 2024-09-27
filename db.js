
const mongoose = require('mongoose');
require('dotenv').config()

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('mongoose connected successfully'))
  .catch(()=>console.log('error in connection'))
}

module.exports=connectToDB;