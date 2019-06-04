const Router = require('express').Router();
const Controller = require('./ScheduleController');
const validate = require('./../../../utils/validate');
const auth = require('./../../../app/Middlewares/AuthMiddleware');
const schema = require('./schema');

Router.get('/', auth.getUser, Controller.getAll);
Router.get('/all', auth.getUser, Controller.getAllWithPagination);
Router.post('/', auth.auth, validate(schema.create), Controller.create);
Router.delete('/:id', auth.auth, Controller.delete);
Router.get('/:id', Controller.getById);
Router.put('/:id', auth.auth, validate(schema.update), Controller.update);

module.exports = Router;
