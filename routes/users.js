const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb+srv://nehakthakor:kbILWnRIyuDbFuN4@cluster0.xvvcmlj.mongodb.net/?retryWrites=true&w=majority");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String
  },

  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],

  dp: {
    type: String,   
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  fullname: {
     type: String,
     required: true,
  },
  boards: {
    type: Array,
    default: []
  },
});


userSchema.plugin(plm);
module.exports = mongoose.model('User', userSchema);
