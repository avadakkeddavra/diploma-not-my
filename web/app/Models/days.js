
module.exports = function (sequelize,Sequelize) {

    let DaysSchema = {
        name: {
            type: Sequelize.STRING(64)
        },
    };

    let ModelOptions = {
        timestamps: false
    };

    return sequelize.define('days', DaysSchema, ModelOptions);
};

