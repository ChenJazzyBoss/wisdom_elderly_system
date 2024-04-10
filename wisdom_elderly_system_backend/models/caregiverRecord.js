// caregiverRecord.js
const db = require('../db');

const CaregiverRecord = {
  // 创建护工护理记录
  create: function(caregiverRecord, callback) {
    return db.query('INSERT INTO caregiver_records (caregiver_id, elderly_id, care_date, price, notes) VALUES (?, ?, ?, ?, ?)',
      [caregiverRecord.caregiver_id, caregiverRecord.elderly_id, caregiverRecord.care_date, caregiverRecord.price, caregiverRecord.notes], callback);
  },
  // 根据ID查找护工护理记录
  getById: function(id, callback) {
    return db.query('SELECT * FROM caregiver_records WHERE id = ?', [id], callback);
  },
  // 更新护工护理记录信息
  update: function(id, caregiverRecord, callback) {
    return db.query('UPDATE caregiver_records SET caregiver_id=?, elderly_id=?, care_date=?, price=?, notes=? WHERE id=?',
      [caregiverRecord.caregiver_id, caregiverRecord.elderly_id, caregiverRecord.care_date, caregiverRecord.price, caregiverRecord.notes, id], callback);
  },
  // 删除护工护理记录
  delete: function(id, callback) {
    return db.query('DELETE FROM caregiver_records WHERE id=?', [id], callback);
  },
  // 获取所有护工护理记录
  getAll: function(callback) {
    return db.query('SELECT * FROM caregiver_records', callback);
  }
};

module.exports = CaregiverRecord;
