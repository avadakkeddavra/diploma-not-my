module.exports = (db) => {
  db.schedule.belongsTo(db.lessons, {foreignKey: 'lesson_id', as: 'lesson'});
  db.lessons.hasMany(db.schedule, {foreignKey: 'lesson_id'});
  
  db.schedule.belongsTo(db.classes, {foreignKey: 'class_id', as: 'class'});
  db.classes.hasMany(db.schedule, {foreignKey: 'class_id'});
  
  
  db.schedule.belongsTo(db.days, {foreignKey: 'day_id', as: 'day'});
  db.days.hasMany(db.schedule, {foreignKey: 'day_id'});
  
  db.schedule.belongsTo(db.teachers, {foreignKey: 'teacher_id', as: 'teacher'});
  db.teachers.hasMany(db.schedule, {foreignKey: 'teacher_id'});
  
  db.schedule.belongsTo(db.lessons_time, {foreignKey: 'lesson_time_id', as: 'lesson_time'});
  db.lessons_time.hasMany(db.schedule, {foreignKey: 'lesson_time_id'});
  
  db.schedule.belongsTo(db.student_groups, {foreignKey: 'group_id', as: 'group'});
  db.student_groups.hasMany(db.schedule, {foreignKey: 'group_id'});
};
