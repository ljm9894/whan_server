const Sequelize = require("sequelize");

<<<<<<< HEAD
module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            email : {
                type : Sequelize.STRING,
                allowNull : true,
                unique: true,
            },
            name : {
                type : Sequelize.STRING,
                allowNull : false,
            },
            password : {
                type : Sequelize.STRING,
                allowNull : true,
            },
            
        }, {
            sequelize,
            timestamps : true,
            underscored :false,
            modelName : 'User',
            tableName : 'user',
            paranoid : true,
            charset : 'utf8',
            collate : 'utf8_general_ci',
        });
    }
    static associate(db) {
        this.belongsTo(db.Profile, {foreignKey : 'profileId'});
        
=======
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "user",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
>>>>>>> jinsoo1004
      }
    );
  }
  static associate(models) {
    this.hasOne(models.Profile, {
      foreignKey: "userId",
      as: "profile",
    });
  }
};
