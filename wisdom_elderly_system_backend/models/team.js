// team.js
const db = require('../config/db');

const Team = {
  // 创建护工团队
  create: function(team, callback) {
    return db.query('INSERT INTO team (name, team_type, address) VALUES (?, ?, ?)',
      [team.name, team.team_type, team.address], callback);
  },
  // 根据ID查找护工团队
  getById: function(id, callback) {
    return db.query('SELECT * FROM team WHERE id = ?', [id], callback);
  },
  // 更新护工团队信息
  update: function(id, team, callback) {
    return db.query('UPDATE team SET name=?, team_type=?, address=? WHERE id=?',
      [team.name, team.team_type, team.address, id], callback);
  },
  // 删除护工团队
  delete: function(id, callback) {
    return db.query('DELETE FROM team WHERE id=?', [id], callback);
  },
  // 获取所有护工团队
  getAll: function(callback) {
    return db.query('SELECT * FROM team', callback);
  }
};

module.exports = Team;
