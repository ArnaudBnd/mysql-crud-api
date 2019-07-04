const db = require('../config/db');
 
const Contacts = {

  getAllContacts: function() {
    return new Promise((resolve) => {
      db.query("select * from contacts", function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  getContactById: function(id) {
    console.log('id: ', id)
    return new Promise((resolve) => {
      db.query("select * from contacts where id=?", [id], function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  addContact: function(Contacts, callback) {
    return db.query("Insert into contacts values(?,?,?,?,?)", [Contacts.id, Contacts.nom, Contacts.prenom, Contacts.age, Contacts.numero], callback);
  },
  deleteContact: function(id, callback) {
    console.log(id);
    return db.query("delete from contacts where id=?", [id], callback);
  },
  updateContact: function(id, Contacts, callback) {
    return db.query("update contacts set nom=?, prenom=? where id=?",[Contacts.nom, Contacts.prenom, id], callback);
  }
};

module.exports = Contacts;