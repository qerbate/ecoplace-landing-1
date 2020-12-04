var express = require('express');
var router = express.Router();
var Contact = require('../models/Contact');

/* GET ALL CONTACT */
router.get('/', function(req, res, next) {
    Contact.find(function (err, contact) {
        if (err) return next(err);
        res.json(contact);
    });
});
  
/* GET SINGLE CONTACT BY ID */
router.get('/:id', function(req, res, next) {
    Contact.findById(req.params.id, function (err, contact) {
        if (err) return next(err);
        res.json(contact);
    });
});
  
/* POST CONTACT */
router.post('/', function(req, res, next) {
    Contact.create(req.body, function (err, contact) {
        if (err) return next(err);
        res.json(contact);
    });
});
  
/* UPDATE USER */
router.put('/:id', function(req, res, next) {
    Contact.findByIdAndUpdate(req.params.id, req.body, function (err, contact) {
        if (err) return next(err);
        res.json(contact);
    });
});
  
/* DELETE USER */
router.delete('/:id', function(req, res, next) {
    Contact.findByIdAndRemove(req.params.id, req.body, function (err, contact) {
        if (err) return next(err);
        res.json(contact);
    });
});

router.get('/daily/:status',  function(req, res, next) {
    Contact.aggregate([
        {
            $match: { status: req.params.status }
        },
        {
            $group: { 
                _id: {
                    date: {
                        $dateToString: {
                            format: "%Y-%m-%d", 
                            date: "$updated"
                        }
                    }
                }, 
                count: {
                    $sum: 1
                }
            }
        },
        { $sort: {_id: 1} }
    ], function (err, contact) {
        if (err) return next(err);
        res.json(contact);
    });
});

module.exports = router;