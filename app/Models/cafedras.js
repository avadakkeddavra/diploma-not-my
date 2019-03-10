
module.exports = function (sequelize,Sequelize) {
    
    let CafedrasSchema = {
        name: {
            type: Sequelize.STRING
        }
    };
    
    let ModelOptions = {
        timestamps: false
    };
    
    return sequelize.define('cafedras', CafedrasSchema, ModelOptions);
};

