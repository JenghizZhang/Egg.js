'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async yunsong() {
    const { ctx } = this;
    ctx.body = '<h1>lesson 2页面</h1>';
  }

  async testGetGirl() {
    const { ctx } = this;
    const id = ctx.query.id;
    const res = await ctx.service.yunsong.getGirl(id);
    ctx.body = res;
  }
}

module.exports = HomeController;
