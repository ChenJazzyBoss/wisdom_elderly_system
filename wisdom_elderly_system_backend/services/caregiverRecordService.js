// caregiverRecordService.js
const CaregiverRecord = require('../models/caregiverRecord');

const CaregiverRecordService = {
  // 创建护工护理记录信息
  create: function(caregiverRecordData, callback) {
    CaregiverRecord.create(caregiverRecordData, callback);
  },
  // 根据ID查找护工护理记录信息
  getById: function(id, callback) {
    CaregiverRecord.getById(id, callback);
  },
  // 更新护工护理记录信息
  update: function(id, caregiverRecordData, callback) {
    CaregiverRecord.update(id, caregiverRecordData, callback);
  },
  // 删除护工护理记录信息
  delete: function(id, callback) {
    CaregiverRecord.delete(id, callback);
  },
  // 获取所有护工护理记录信息
  getAll: function(callback) {
    CaregiverRecord.getAll(callback);
  }
};

module.exports = CaregiverRecordService;
