const { Sequelize } = require("sequelize");

const { DB_SERVER, DB_USER, DB_NAME, DB_PORT, DB_PWD } = process.env;

const conString = `mysql://${DB_USER}${
  DB_PWD && `:${DB_PWD}`
}@${DB_SERVER}:${DB_PORT}/${DB_NAME}`;

const seq = new Sequelize(conString);

seq
  .authenticate()
  .then(() => {
    console.log("conexion exitosa");
  })
  .catch((err) => {
    console.log(err.message);
  });

module.exports = seq;
