const Controller = require('./../Controller');
const {lessons, teachers, cafedras, Sequelize: {Op}} = require('@model/index');

class LessonsController extends Controller {
  static async getAllWithPagintaion(req, res, next) {
    try {
      const limit = req.query.pageSize ? Number(req.query.pageSize) : 10;
      const offset = req.query.pageIndex ? Number(req.query.pageIndex) * limit : 0
      const data = await lessons.findAndCountAll({
        include: [
          {
            model: teachers,
            as: 'teacher'
          },
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
      throw E;
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

      const data = await lessons.findAll({
        where,
        include: [
          {
            model: teachers,
            as: 'teacher'
          },
          {
            model: cafedras,
            as: 'cafedra'
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
      const data = await lessons.findById(req.params.id);
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  static async create(req, res, next) {
    try {
      const data = await lessons.create(req.body);
      data.dataValues.cafedra = data.getCafedra();
      data.dataValues.teacher = data.getTeacher();
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
