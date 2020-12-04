const mongoose = require('mongoose');


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
  message: {
    type:String,
    required: true,
    required: 'Campo mensagem não pode ficar vazio  ',
    minlength : [15,'O campo deve ter pelo menos 15 caracteres ']
    
  },
});

// Custom validation for email
userSchema.path('email').validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'Invalid e-mail.');


userSchema.pre('save', function (next) {
  
          next();
      });
 

mongoose.model('User', userSchema );