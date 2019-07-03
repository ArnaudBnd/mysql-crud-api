var express = require('express');
var router = express.Router();
var Contact = require('../models/Contacts');

router.get('/:id',function(req, res, next) {
  console.log('req.params.id : ', req.params.id);

  Contact.getContactById(req.params.id, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });

});

module.exports = router;