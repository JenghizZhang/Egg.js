'use strict';

const Service = require('egg').Service;

class YunsongService extends Service {
  async getGirl(id) {
    return {
      id,
      name: '小红',
      age: 18,
    };
  }
}

module.exports = YunsongService;

