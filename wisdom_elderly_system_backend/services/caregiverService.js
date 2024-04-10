// services/caregiverService.js
const Caregiver = require('../models/caregiver');

const CaregiverService = {
  getAll: function(callback) {
    Caregiver.getAll(callback);
  },
  getById: function(id, callback) {
    Caregiver.getById(id, callback);
  },
  create: function(caregiverData, callback) {
    Caregiver.create(caregiverData, callback);
  },
  update: function(id, caregiverData, callback) {
    Caregiver.update(id, caregiverData, callback);
  },
  delete: function(id, callback) {
    Caregiver.delete(id, callback);
  }
};

module.exports = CaregiverService;
