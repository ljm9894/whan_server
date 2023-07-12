const Sequelize = require('sequelize');
module.exports= class Profile extends Sequelize.Model {
    static init(sequelize){
        return super.init({
           
            img : {
                type : Sequelize.STRING,
                allowNull:true,
            },
            
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            modelName :'Profile',
            tableName : 'profile',
            paranoid : false,
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci',
        });
    }
    static associate(db){
        this.belongsTo(db.User, {foreignKey : 'userId'});
    }
};