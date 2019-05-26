
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
        },
        teacher_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'teachers',
                key: 'id'
            }
        }
    };

    let ModelOptions = {
        timestamps: false
    };

    return sequelize.define('lessons', UsersSchema, ModelOptions);
};

