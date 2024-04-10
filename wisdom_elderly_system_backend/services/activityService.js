// activityService.js
const Activity = require('../models/activity');

const ActivityService = {
  // 创建活动信息
  create: function(activityData, callback) {
    Activity.create(activityData, callback);
  },
  // 根据ID查找活动信息
  getById: function(id, callback) {
    Activity.getById(id, callback);
  },
  // 更新活动信息
  update: function(id, activityData, callback) {
    Activity.update(id, activityData, callback);
  },
  // 删除活动信息
  delete: function(id, callback) {
    Activity.delete(id, callback);
  },
  // 获取所有活动信息
  getAll: function(callback) {
    Activity.getAll(callback);
  }
};

module.exports = ActivityService;
