const { DataTypes } = require("sequelize");
const sequelize = require("./../config/db"); // el '/index/' al ser "index" es opcional

const FormasPago = sequelize.define(
  "formas_pago",
  {
    nombre: {
      type: DataTypes.STRING,
      notNull: true, // allowNull: false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      notNull: false, // allowNull: false
    },
  },
  {
    timestamps: false,
    tableName: "formas_pago",
  }
);
module.exports = FormasPago;
