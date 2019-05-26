const Controller = require('./../Controller');
const {student_groups, cafedras} = require('@model/index');

class GroupsController extends Controller {
  static async getAll(req, res, next) {
    try {
      const limit = req.query.pageSize ? Number(req.query.pageSize) : 10;
      const offset = req.query.pageIndex ? Number(req.query.pageIndex) * limit : 0;
      const data = await student_groups.findAndCountAll({
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
  static async getById(req, res, next) {
    try {
      const data = await student_groups.findById(req.params.id);
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  static async create(req, res, next) {
    try {
      const data = await student_groups.create(req.body);
      data.dataValues.cafedra = await data.getCafedra();
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  
  static async delete(req, res, next) {
    try {
      const instance = await student_groups.findById(req.params.id);
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
      const instance = await student_groups.destroy({
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
      let instance = await student_groups.findById(req.params.id);
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

module.exports = GroupsController;
