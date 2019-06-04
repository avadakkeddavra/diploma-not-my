const Controller = require('./../Controller');
const {
  lessons,
  teachers,
  schedule,
  student_groups,
  lessons_time,
  days,
  Sequelize: {Op},
  classes} = require('@model/index');

const service = require('./service');

class ScheduleController extends Controller {
  static async getAll(req, res, next) {
    try {
      const where = service.buildQuery(req.query);
      let day = Number(req.query.day);
      day = day === 0 ? 7 : day;
      let data = await days.findAll({
        include: [
          {
            model: schedule,
            include: [
              {
                model: teachers,
                attributes: ['name'],
                as: 'teacher',
                where: where.teacher
              },
              {
                model: lessons,
                as: 'lesson',
                where: where.lesson
              },
              {
                model: student_groups,
                as: 'group',
                where: where.group
              },
              {
                model: lessons_time,
                as: 'lesson_time'
              },
              {
                model: days,
                as: 'day'
              },
              {
                model: classes,
                as: 'class'
              }
            ]
          }
        ],
        order: [['id', 'ASC']]
      });
      const startValues = [];
      const endValues = [];
      data.forEach((item) => {
        if(item.id >= day) {
          startValues.push(item)
        } else {
          endValues.push(item);
        }
      });

      data = startValues.concat(endValues)
      
      res.send(data);
    } catch(E) {
      throw E;
      next(E);
    }
  }
  static async getAllWithPagination(req, res, next) {
    try {
      const limit = req.query.pageSize ? Number(req.query.pageSize) : 10;
      const offset = req.query.pageIndex ? Number(req.query.pageIndex) * limit : 0;
      
      const where = {};
      if(req.auth.type === 'teacher') {
        where.teacher_id = req.auth.id;
      }
      
      const data = await schedule.findAndCountAll({
        where,
        include: [
          {
            model: teachers,
            as: 'teacher'
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
      const data = await schedule.findById(req.params.id);
      res.send(data);
    } catch(E) {
      next(E);
    }
  }
  static async create(req, res, next) {
    try {
      const data = await schedule.create(req.body);
      data.dataValues = {
        ...data.dataValues,
        lesson: await data.getLesson(),
        day: await data.getDay(),
        teacher: await data.getTeacher(),
        group: await data.getGroup(),
        class: await data.getClass()
      }
      res.send(data);
    } catch(E) {
      throw E;
      next(E);
    }
  }
  
  static async delete(req, res, next) {
    try {
      const instance = await schedule.findById(req.params.id);
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
      let instance = await schedule.findById(req.params.id);
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

module.exports = ScheduleController;
