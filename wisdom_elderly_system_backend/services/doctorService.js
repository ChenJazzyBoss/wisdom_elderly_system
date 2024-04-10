// services/doctorService.js
const Doctor = require('../models/doctor');

const DoctorService = {
  getAll: function(callback) {
    Doctor.getAll(callback);
  },
  getById: function(id, callback) {
    Doctor.getById(id, callback);
  },
  create: function(doctorData, callback) {
    Doctor.create(doctorData, callback);
  },
  update: function(id, doctorData, callback) {
    Doctor.update(id, doctorData, callback);
  },
  delete: function(id, callback) {
    Doctor.delete(id, callback);
  }
};

module.exports = DoctorService;
