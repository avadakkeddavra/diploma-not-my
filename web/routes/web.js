const express = require('express');
const Router = express.Router();
const AuthController = require('@auth/AuthController');
const AuthMiddleware = require('@middleware/AuthMiddleware');
const {days, lessons_time} = require('@model/index');
const Cafedras = require('./../app/Controllers/Cafedras/routes');
const Groups = require('./../app/Controllers/Groups/routes');
const Lessons = require('./../app/Controllers/Lessons/routes');
const Teachers = require('./../app/Controllers/Teachers/routes');
const Classes = require('./../app/Controllers/Classes/routes');
const Schedule = require('./../app/Controllers/Schedule/routes');

Router.post('/login', AuthController.login.bind(AuthController))
Router.post('/register', AuthController.register.bind(AuthController))
Router.post('/resetlink', AuthController.requestForResetPassword.bind(AuthController));
Router.get('/check_resetlink/:hash', AuthController.checkResetPasswordLink.bind(AuthController));
Router.post('/reset_password/:hash', AuthController.resetPassword.bind(AuthController))

Router.get('/days', async (req, res, next) => {
  try {
    const data = await days.findAll();
    res.send(data);
  } catch(E) {
    next(E);
  }
})
Router.get('/lesson_times', async (req, res, next) => {
  try {
    const data = await lessons_time.findAll();
    res.send(data);
  } catch(E) {
    next(E);
  }
})

Router.get('/', AuthMiddleware.auth, function(Request, Response) {
  Response.send(Request.auth)
});

Router.use('/cafedras', Cafedras);
Router.use('/lessons', Lessons);
Router.use('/groups', Groups);
Router.use('/teachers', Teachers);
Router.use('/classes', Classes);
Router.use('/schedule', Schedule);
module.exports = Router;
