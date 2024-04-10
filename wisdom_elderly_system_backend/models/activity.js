// activity.js
const db = require('../config/db');

const Activity = {
  // 创建活动
  create: function(activity, callback) {
    return db.query('INSERT INTO activity (name, description, schedule, location, elderly_id, team_id) VALUES (?, ?, ?, ?, ?, ?)',
      [activity.name, activity.description, activity.schedule, activity.location, activity.elderly_id, activity.team_id], callback);
  },
  // 根据ID查找活动
  getById: function(id, callback) {
    return db.query('SELECT * FROM activity WHERE id = ?', [id], callback);
  },
  // 更新活动信息
  update: function(id, activity, callback) {
    return db.query('UPDATE activity SET name=?, description=?, schedule=?, location=?, elderly_id=?, team_id=? WHERE id=?',
      [activity.name, activity.description, activity.schedule, activity.location, activity.elderly_id, activity.team_id, id], callback);
  },
  // 删除活动
  delete: function(id, callback) {
    return db.query('DELETE FROM activity WHERE id=?', [id], callback);
  },
  // 获取所有活动
  getAll: function(callback) {
    return db.query('SELECT * FROM activity', callback);
  }
};

module.exports = Activity;
