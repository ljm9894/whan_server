require('dotenv').config();
const env = process.env;
 
const development = {
  username: env.AZURE_USERNAME,
  
  password: env.AZURE_PASSWORD,
  database: env.AZURE_DATABASE,
  host: env.AZURE_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};
 
const production = {
  username: env.AZURE_USERNAME,
  password: env.AZURE_PASSWORD,
  database: env.AZURE_DATABASE,
  host: env.AZURE_HOST,
  dialect: "mysql",
};

 
const test = {
  username: env.AZURE_USERNAME,
  password: env.AZURE_PASSWORD,
  database: env.AZURE_DATABASE,
  host: env.AZURE_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};
 
module.exports = { development, production, test };