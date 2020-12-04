
  
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
      var user = new User();
      user.name = req.body.name;
      user.email = req.body.email;
      user.message = req.body.message;
      user.save((err, doc) => {
            if (!err)
                res.send(doc);
                else {
                  if (err.code == 11000)
                      res.status(422).send(['Duplicate email adrress found.']);
                  else
                      return next(err);
              }
      
          });
      }