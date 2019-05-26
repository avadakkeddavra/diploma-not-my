
module.exports = function (sequelize,Sequelize) {

    let ClassesSchema = {
        name: {
            type: Sequelize.STRING(64)
        },
    };

    let ModelOptions = {
        timestamps: false
    };

    return sequelize.define('classes', ClassesSchema, ModelOptions);
};

