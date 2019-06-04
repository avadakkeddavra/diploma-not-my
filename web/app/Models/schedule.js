
module.exports = function (sequelize,Sequelize) {
  
  let TeachersSchema = {
    lesson_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'lessons',
        key: 'id'
      }
    },
    class_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'classes',
        key: 'id'
      }
    },
    lesson_time_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'lessons_time',
        key: 'id'
      }
    },
    day_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'days',
        key: 'id'
      }
    },
    teacher_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'teachers',
        key: 'id'
      }
    },
    semester: {
      type: Sequelize.INTEGER
    },
    denomirator: {
      type: Sequelize.INTEGER
    },
    group_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'groups',
        key: 'id'
      }
    }
  };
  
  let ModelOptions = {
    timestamps: false,
    freezeTableName: true
  };
  
  return sequelize.define('schedule', TeachersSchema, ModelOptions);
};

