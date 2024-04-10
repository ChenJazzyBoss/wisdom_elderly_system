// models/caregiver.js
const db = require('../config/db');

const Caregiver = {
  getAll: function(callback) {
    return db.query('SELECT * FROM caregiver', callback);
  },
  getById: function(id, callback) {
    return db.query('SELECT * FROM caregiver WHERE id=?', [id], callback);
  },
  create: function(Caregiver, callback) {
    return db.query('INSERT INTO caregiver(name, gender, identity, team_id, contact_info) VALUES(?, ?, ?, ?, ?)',
      [Caregiver.name, Caregiver.gender, Caregiver.identity, Caregiver.team_id, Caregiver.contact_info], callback);
  },
  update: function(id, Caregiver, callback) {
    return db.query('UPDATE caregiver SET name=?, gender=?, identity=?, team_id=?, contact_info=? WHERE id=?',
      [Caregiver.name, Caregiver.gender, Caregiver.identity, Caregiver.team_id, Caregiver.contact_info, id], callback);
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM caregiver WHERE id=?', [id], callback);
  }
};

module.exports = Caregiver;
