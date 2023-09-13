const mongoose = require('mongoose');
/**
  * Defining the db name, hosts, user and password for setting up mongo db connection
*/
module.exports = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ssrpoc', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });
    mongoose.set('useFindAndModify', false);
    console.log('Yes, Mongo DB connected successfully, have fun!');
  } catch (error) {
    console.error('I am in mongo db connection error block :: ', error);
  }
}