const Controller = require('./../Controller');
const {lessons} = require('@model/index');

class LessonsController extends Controller {
  static async getAll(req, res, next) {
    try {
      const data = await lessons.findAll();
      res.send(data)
    } catch(E) {
      next(E);
    }
  }
  static async getById(req, res, next) {
    try {
      const data = await lessons.findById(req.params.id);
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  static async create(req, res, next) {
    try {
      const data = await lessons.create(req.body);
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  
  static async delete(req, res, next) {
    try {
      const instance = await lessons.findById(req.params.id);
      if(instance) {
        await instance.destroy();
        res.send({success: true});
      } else {
        res.status(404).send({ success: false, message: 'Instance not found' })
      }
    } catch(E) {
      next(E);
    }
  }
  
  static async update(req, res, next) {
    try {
      let instance = await lessons.findById(req.params.id);
      if(instance) {
        instance = await instance.update(req.body);
        res.send(instance);
      } else {
        res.status(404).send({ success: false, message: 'Instance not found' })
      }
    } catch(E) {
      next(E);
    }
  }
}

module.exports = LessonsController;
