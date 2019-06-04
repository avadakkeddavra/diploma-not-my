class ScheduleService {
  static async buildReferencesAfterCreate(instance) {
    return {
      ...instance,

    }
  }
  static buildQuery(query) {
    const where = {
      teacher: {},
      group: {},
      lesson: {}
    }
    if(query.group && query.group !== 'null') {
      where.group = {id: Number(query.group)}
    }
    if(query.lesson && query.lesson !== 'null') {
      where.lesson = {id: Number(query.lesson)}
    }
    if(query.teacher && query.teacher !== 'null') {
      where.teacher = {id: Number(query.teacher)}
    }
    console.log(typeof query.teacher);
    return where;
  }
}
module.exports = ScheduleService;
