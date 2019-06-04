module.exports = (db) => {
  db.cafedras.hasMany(db.student_groups, {foreignKey: 'cafedra_id', as: 'groups'})
  db.cafedras.hasMany(db.lessons, {foreignKey: 'cafedra_id', as: 'lessons'})
  db.cafedras.hasMany(db.teachers, {foreignKey: 'cafedra_id', as: 'teachers'})
  db.lessons.belongsTo(db.cafedras, {foreignKey: 'cafedra_id', as: 'cafedra'})
  db.student_groups.belongsTo(db.cafedras, {foreignKey: 'cafedra_id', as: 'cafedra'})
};
