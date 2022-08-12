'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const counter = app.middleware.counter();

  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/yunsong', controller.home.yunsong);
  router.get('/my', counter, controller.yunsong.index);
  router.get('/getgirls', controller.yunsong.getGirls);
  router.get('/getgirl', controller.yunsong.getGirl);
  router.get('/getgirl2/:name/:age', controller.yunsong.getGirl2);
  router.post('/add', controller.yunsong.add);
  router.post('/del', controller.yunsong.del);
  router.post('/edit', controller.yunsong.edit);
  router.post('/show', controller.yunsong.show);

  router.get('/testGetGirl', controller.home.testGetGirl);
  router.get('/newContext', controller.yunsong.newContext);
  router.post('/newContext', controller.yunsong.newContext);
  router.post('/newRequest', controller.yunsong.newRequest);
};
