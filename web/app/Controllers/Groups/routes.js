const Router = require('express').Router();
const Controller = require('./GroupsController');
const validate = require('./../../../utils/validate');
const schema = require('./schema');

Router.get('/all', Controller.getAllWithPagination);
Router.get('/', Controller.getAll);
Router.post('/', validate(schema.create), Controller.create);
Router.delete('/:id', Controller.delete);
Router.post('/delete',validate(schema.delete), Controller.bulkDelete);
Router.get('/:id', Controller.getById);
Router.put('/:id', validate(schema.update), Controller.update);

module.exports = Router;
