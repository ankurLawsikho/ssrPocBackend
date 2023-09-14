const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        default: '123456'
    },
    companySize: {
        type: Number,
        default: 0
    },
    companyName: {
        type: String,
        default: '',
    },
    typeOfUser: {
        type: String,
        default: 'normal',
        enum: ['normal', 'forcourse', 'forservice']
    },
    status: {
        type: Number,
        default: 0,
        enum: [0, 1]
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    }
});
// create the model for Users and expose it to our app
module.exports = mongoose.model('Users', UsersSchema);