// doctorService.js
const db = require('../config/db');

const DoctorService = {
  // 创建医生服务记录
  create: function(doctorService, callback) {
    return db.query('INSERT INTO doctor_services (doctor_id, elderly_id, service_date, price, notes) VALUES (?, ?, ?, ?, ?)',
      [doctorService.doctor_id, doctorService.elderly_id, doctorService.service_date, doctorService.price, doctorService.notes], callback);
  },
  // 根据ID查找医生服务记录
  getById: function(id, callback) {
    return db.query('SELECT * FROM doctor_services WHERE id = ?', [id], callback);
  },
  // 更新医生服务记录信息
  update: function(id, doctorService, callback) {
    return db.query('UPDATE doctor_services SET doctor_id=?, elderly_id=?, service_date=?, price=?, notes=? WHERE id=?',
      [doctorService.doctor_id, doctorService.elderly_id, doctorService.service_date, doctorService.price, doctorService.notes, id], callback);
  },
  // 删除医生服务记录
  delete: function(id, callback) {
    return db.query('DELETE FROM doctor_services WHERE id=?', [id], callback);
  },
  // 获取所有医生服务记录
  getAll: function(callback) {
    return db.query('SELECT * FROM doctor_services', callback);
  }
};

module.exports = DoctorService;
