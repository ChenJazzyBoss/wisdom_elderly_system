// services/elderlyService.js
const Elderly = require('../models/elderly');

const ElderlyService = {
  getAll: function(callback) {
    Elderly.getAll(callback);
  },
  getById: function(id, callback) {
    Elderly.getById(id, callback);
  },
  create: function(elderlyData, callback) {
    Elderly.create(elderlyData, callback);
  },
  update: function(id, elderlyData, callback) {
    Elderly.update(id, elderlyData, callback);
  },
  softDelete: function(id, callback) {
    Elderly.softDelete(id, callback);
  }
};

module.exports = ElderlyService;
