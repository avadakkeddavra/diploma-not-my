
module.exports = function (sequelize,Sequelize) {

    let UsersSchema = {
        name: {
            type: Sequelize.STRING(64)
        },
        cafedra_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'cafedras',
                key: 'id'
            }
        }
    };

    let ModelOptions = {
        timestamps: false,
        freezeTableName: true
    };

    return sequelize.define('student_groups', UsersSchema, ModelOptions);
};

