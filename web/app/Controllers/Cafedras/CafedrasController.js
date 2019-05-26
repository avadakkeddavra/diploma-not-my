const Controller = require('./../Controller');
const {cafedras, teachers, student_groups} = require('@model/index');

class CafedrasController extends Controller {
  static async getAll(req, res, next) {
    try {
      const data = await cafedras.findAll({
        include: [
          {
            model: teachers,
            as: 'teachers'
          },
          {
            model: student_groups,
            as: 'groups'
          }
        ]
      });
      res.send(data)
    } catch(E) {
      next(E);
    }
  }
  static async getById(req, res, next) {
    try {
      const data = await cafedras.findById(req.params.id);
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  static async create(req, res, next) {
    try {
      const data = await cafedras.create(req.body);
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  static async delete(req, res, next) {
    try {
      const instance = await cafedras.findById(req.params.id);
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
      let instance = await cafedras.findById(req.params.id);
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

module.exports = CafedrasController;
