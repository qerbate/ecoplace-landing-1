const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({

  name: {
    type:String,
    require: 'Campo nome não pode ficar vazio'
  },
  email: {
    type:String,
    required:'Campo email não pode ficar vazio',
    lowercase:true,
    unique: true
  },
  password: {
    type:String,
    required: true,
    required: 'Campo senha não pode ficar vazio  ',
    minlength : [4,'A senha deve ter pelo menos 4 caracteres ou mais']
    
  },
 

  saltSecret : String

});

// Custom validation for email
userSchema.path('email').validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'Invalid e-mail.');

userSchema.pre('save', function(next){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
           this.password = hash;
           this.saltSecret = salt;
           next();

    });
  });
});

// Methods
userSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
  return jwt.sign({ _id: this._id},
      process.env.JWT_SECRET,
  {
      expiresIn: process.env.JWT_EXP
  });
}
  

mongoose.model('User', userSchema );