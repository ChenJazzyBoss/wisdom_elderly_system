// models/doctor.js
const db = require('../config/db');

const Doctor = {
  getAll: function(callback) {
    return db.query('SELECT * FROM doctor', callback);
  },
  getById: function(id, callback) {
    return db.query('SELECT * FROM doctor WHERE id=?', [id], callback);
  },
  create: function(Doctor, callback) {
    return db.query('INSERT INTO doctor(name, gender, specialty, contact_info, schedule, room) VALUES(?, ?, ?, ?, ?, ?)',
      [Doctor.name, Doctor.gender, Doctor.specialty, Doctor.contact_info, Doctor.schedule, Doctor.room], callback);
  },
  update: function(id, Doctor, callback) {
    return db.query('UPDATE doctor SET name=?, gender=?, specialty=?, contact_info=?, schedule=?, room=? WHERE id=?',
      [Doctor.name, Doctor.gender, Doctor.specialty, Doctor.contact_info, Doctor.schedule, Doctor.room, id], callback);
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM doctor WHERE id=?', [id], callback);
  }
};

module.exports = Doctor;
