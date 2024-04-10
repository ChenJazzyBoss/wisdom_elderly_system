// doctorServiceRecordService.js
const DoctorServiceRecord = require('../models/doctorServiceRecord');

const DoctorServiceRecordService = {
  // 创建医生服务记录信息
  create: function(doctorServiceRecordData, callback) {
    DoctorServiceRecord.create(doctorServiceRecordData, callback);
  },
  // 根据ID查找医生服务记录信息
  getById: function(id, callback) {
    DoctorServiceRecord.getById(id, callback);
  },
  // 更新医生服务记录信息
  update: function(id, doctorServiceRecordData, callback) {
    DoctorServiceRecord.update(id, doctorServiceRecordData, callback);
  },
  // 删除医生服务记录信息
  delete: function(id, callback) {
    DoctorServiceRecord.delete(id, callback);
  },
  // 获取所有医生服务记录信息
  getAll: function(callback) {
    DoctorServiceRecord.getAll(callback);
  }
};

module.exports = DoctorServiceRecordService;
