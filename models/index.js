const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const User = require("./user");
const Profile = require("./profile");

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.Profile = Profile;

User.init(sequelize);
Profile.init(sequelize);

User.belongsTo(db.Profile, { foreignKey: 'profile_id'});
Profile.belongsTo(db.User, { foreignKey: 'user_id'});

module.exports = db;
