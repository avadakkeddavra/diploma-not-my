const Routes = require('express').Router();
const Controller = require('./LessonsController');
const validate = require('./../../../utils/validate');
const schema = require('./schema');

Routes.get('/all', Controller.getAllWithPagintaion);
Routes.get('/', Controller.getAll);
Routes.post('/', validate(schema.create), Controller.create);
Routes.delete('/:id', Controller.delete);
Routes.get('/:id', Controller.getById);
Routes.put('/:id', validate(schema.update), Controller.update);

module.exports = Routes;
