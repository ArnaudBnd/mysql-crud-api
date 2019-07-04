var express = require('express');
var router = express.Router();
var Contact = require('../models/Contacts');

/*
 * [GET] Get contact by id
 *
 */
router.get('/:id', function(req, res) {
  Contact.getContactById(req.params.id).then((response) => {
    res.json(response);
  })
});

/*
 * [GET] Get all contacts
 *
 */
router.get('/', function(req, res) {
  Contact.getAllContacts().then((response) => {
    res.json(response);
  })
});

/*
 * [POST] Post contact into bdd
 *
 */
router.post('/',function(req, res, next) {
  Contact.addContact(req.body, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

/*
 * [DELETE] DEelete contact by id
 *
 */
router.delete('/:id',function(req, res, next) {
  console.log(req.params.id);
  Contact.deleteContact(req.params.id, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

/*
 * [DELETE] DEelete contact by id
 *
 */
router.put('/:id',function(req, res, next) {
  console.log(req.params.id);
  Contact.updateContact(req.params.id, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;