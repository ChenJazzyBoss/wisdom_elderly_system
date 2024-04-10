// models/elderly.js
const db = require('../config/db');

const Elderly = {
  getAll: function(callback) {
    return db.query('SELECT * FROM elderly WHERE is_deleted = false', callback);
  },
  getById: function(id, callback) {
    return db.query('SELECT * FROM elderly WHERE id=? AND is_deleted = false', [id], callback);
  },
  create: function(Elderly, callback) {
    return db.query('INSERT INTO elderly(name, gender, age, health_status, address, contact, emergency_contact_name, emergency_contact_phone) VALUES(?, ?, ?, ?, ?, ?, ?, ?)',
      [Elderly.name, Elderly.gender, Elderly.age, Elderly.health_status, Elderly.address, Elderly.contact, Elderly.emergency_contact_name, Elderly.emergency_contact_phone], callback);
  },
  update: function(id, Elderly, callback) {
    return db.query('UPDATE elderly SET name=?, gender=?, age=?, health_status=?, address=?, contact=?, emergency_contact_name=?, emergency_contact_phone=? WHERE id=? AND is_deleted = false',
      [Elderly.name, Elderly.gender, Elderly.age, Elderly.health_status, Elderly.address, Elderly.contact, Elderly.emergency_contact_name, Elderly.emergency_contact_phone, id], callback);
  },
  delete: function(id, callback) {
    return db.query('UPDATE elderly SET is_deleted = true WHERE id=?', [id], callback);
  }
};

module.exports = Elderly;
