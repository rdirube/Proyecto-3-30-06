const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // el '/index/' al ser "index" es opcional

const Roles = sequelize.define(
  "roles",
  {
    nombre: {
      type: DataTypes.STRING,
      notNull: true, // allowNull: false
    },
  },
  {
    timestamps: false,
    tableName: "roles",
  }
);
module.exports = Roles;
