module.exports = (db) => {
  db.teachers.hasMany(db.lessons, {foreignKey: 'teacher_id', as: 'lessons'});
  db.teachers.belongsTo(db.cafedras, {foreignKey: 'cafedra_id', as: 'cafedra'});
  db.lessons.belongsTo(db.teachers, {foreignKey: 'cafedra_id', as: 'teacher'});
};
