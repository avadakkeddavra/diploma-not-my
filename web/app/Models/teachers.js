
module.exports = function (sequelize,Sequelize) {
    
    let TeachersSchema = {
        name: {
            type: Sequelize.STRING
        },
        cafedra_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'cafedras',
                key: 'id'
            }
        },
        token: {
          type: Sequelize.STRING
        },
        position: {
            type: Sequelize.STRING
        }
    };
    
    let ModelOptions = {
        timestamps: false
    };
    
    return sequelize.define('teachers', TeachersSchema, ModelOptions);
};

