const Controller = require('./../Controller');
const {teachers, cafedras, Sequelize: {Op}} = require('@model/index');
const jwt = require('jsonwebtoken');

class TeachersController extends Controller {
  static async getAllWithPagintaion(req, res, next) {
    try {
      const limit = req.query.pageSize ? Number(req.query.pageSize) : 10;
      const offset = req.query.pageIndex ? Number(req.query.pageIndex) * limit : 0
      const {search} = req.query;
      const where = {
        name: {
          [Op.like]: `%${search ||  ''}%`
        }
      };
      const data = await teachers.findAndCountAll({
        where,
        include: [
          {
            model: cafedras,
            as: 'cafedra'
          }
        ],
        limit,
        offset
      });
      res.send(data)
    } catch(E) {
      next(E);
    }
  }

  static async getAll(req, res, next) {
    try {
      const {search} = req.query;
      const where = {
        name: {
          [Op.like]: `%${search || ''}%`
        }
      };
      const data = await teachers.findAll({
        where,
        include: [
          {
            model: cafedras,
            as: 'cafedra'
          }
        ],
      });
      res.send(data)
    } catch(E) {
      next(E);
    }
  }
  static async getById(req, res, next) {
    try {
      const data = await teachers.findById(req.params.id);
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  static async create(req, res, next) {
    try {
      const token = jwt.sign(req.body, process.env.JWT_SECRET);
      const data = await teachers.create({...req.body, token});
      data.dataValues.cafedra = await data.getCafedra();
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  
  static async delete(req, res, next) {
    try {
      const instance = await teachers.findById(req.params.id);
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
  
  static async bulkDelete(req, res, next) {
    try {
      const instance = await teachers.destroy({
        where: {
          id: req.body.ids
        }
      });
      res.send({success: true});
    } catch(E) {
      next(E);
    }
  }
  
  static async update(req, res, next) {
    try {
      let instance = await teachers.findById(req.params.id);
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

module.exports = TeachersController;
