'use strict';

const { app } = require('egg-mock/bootstrap');

describe('app/controller/yunsong.js', () => {
  it('yunsong index page', () => {
    return app.httpRequest()
      .get('/yunsongController')
      .expect('<h1>自己写的controller</h1>')
      .expect(200);
  });

  it('yunsong getGirls page', async () => {
    return app.httpRequest()
      .get('/getgirls')
      .expect('<h1>小红正在向你走来</h1>')
      .expect(200);
  });
});
