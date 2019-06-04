const Controller = require('./../Controller');
const {classes, Sequelize: {Op}} = require('@model/index');

class ClassesController extends Controller {
  static async getAll(req, res, next) {
    try {
      const {search} = req.query;
      const where = {
        name: {
          [Op.like]: `%${search || ''}%`
        }
      };
      const data = await classes.findAll({where});
      res.send(data)
    } catch(E) {
      next(E);
    }
  }
  static async getById(req, res, next) {
    try {
      const data = await classes.findById(req.params.id);
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  static async create(req, res, next) {
    try {
      const data = await classes.create(req.body);
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  static async delete(req, res, next) {
    try {
      const instance = await classes.findById(req.params.id);
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
      let instance = await classes.findById(req.params.id);
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

module.exports = ClassesController;
