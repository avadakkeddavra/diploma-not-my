
module.exports = function (sequelize,Sequelize) {

    let UsersSchema = {
        start: {
            type: Sequelize.TIME
        },
        end: {
            type: Sequelize.TIME
        }
    };

    let ModelOptions = {
        timestamps: false,
        freezeTableName: true
    };

    return sequelize.define('lessons_time', UsersSchema, ModelOptions);
};

