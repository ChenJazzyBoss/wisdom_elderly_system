// teamService.js
const Team = require('../models/team');

const TeamService = {
  // 创建护工团队信息
  create: function(teamData, callback) {
    Team.create(teamData, callback);
  },
  // 根据ID查找护工团队信息
  getById: function(id, callback) {
    Team.getById(id, callback);
  },
  // 更新护工团队信息
  update: function(id, teamData, callback) {
    Team.update(id, teamData, callback);
  },
  // 删除护工团队信息
  delete: function(id, callback) {
    Team.delete(id, callback);
  },
  // 获取所有护工团队信息
  getAll: function(callback) {
    Team.getAll(callback);
  }
};

module.exports = TeamService;
