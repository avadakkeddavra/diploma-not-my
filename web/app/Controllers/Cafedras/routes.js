const Router = require('express').Router();
const Controller = require('./CafedrasController');
const validate = require('./../../../utils/validate');
const schema = require('./schema');

Router.get('/', Controller.getAll);
Router.post('/', validate(schema.create), Controller.create);
Router.delete('/:id', Controller.delete);
Router.get('/:id', Controller.getById);
Router.put('/:id', validate(schema.create), Controller.update);

module.exports = Router;
