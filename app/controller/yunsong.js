'use strict';

const Controller = require('egg').Controller;

class YunsongController extends Controller {
  async index() {
    const { ctx, app } = this;
    const username = ctx.session.username;
    const pwd = ctx.session.pwd;
    const counter = ctx.session.counter || 0;
    // ctx.body = '<h1>自己写的controller</h1>';
    await ctx.render('yunsong.html', {
      id: 200,
      age: 18,
      name: '小红',
      username,
      pwd,
      counter,
      nowTime: app.currentTime(),
      skills: [
        'backend',
        'frontend',
        'development',
      ],
    })
    ;
  }

  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(
        () => {
          resolve(ctx.body = '<h1>小红正在向你走来</h1>');
        }, 5000
      );
    });
  }

  async getGirl() {
    const { ctx } = this;
    const res = await ctx.service.yunsong.getGirl(1234);
    ctx.body = res;
    // ctx.body = ctx.query;
  }

  async getGirl2() {
    const { ctx } = this;
    const name = ctx.params.name;
    const age = ctx.params.age;
    ctx.body = '大哥你好，我是' + name + ',今年' + age + '岁.欢迎光临!';
  }

  // async add() {
  //   const { ctx } = this;
  //   ctx.body = {
  //     status: 200,
  //     data: ctx.request.body,
  //   };
  // }

  async add() {
    const ctx = this.ctx;
    ctx.cookies.set('user', 'yunsong', {
      maxAge: 20 * 1000,
      httpOnly: true,
    });

    ctx.session.username = 'jspang';
    ctx.session.pwd = 'jspang111';

    ctx.body = {
      status: 200,
      data: 'Cookie添加成功',
    };
  }

  async del() {
    const ctx = this.ctx;
    ctx.cookies.set('user', null);
    ctx.session.username = null;
    ctx.session.pwd = null;
    ctx.body = {
      status: 200,
      data: 'Cookie删除成功',
    };
  }

  async edit() {
    const ctx = this.ctx;
    ctx.cookies.set('user', 'newName');
    ctx.body = {
      status: 200,
      data: 'Cookie修改成功',
    };
  }

  async show() {
    const ctx = this.ctx;
    const user = ctx.cookies.get('user');
    ctx.body = {
      status: 200,
      user,
      data: 'Cookie查看成功',
    };
  }

  async newContext() {
    const { ctx } = this;
    const params = ctx.params();
    ctx.body = params;
  }
}

module.exports = YunsongController;
