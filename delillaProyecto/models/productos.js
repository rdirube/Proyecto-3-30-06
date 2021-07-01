const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Productos = sequelize.define(
  "productos",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    //es buena practica agregarlo en las tablas
    tableName: "productos",
  }
);

module.exports = Productos;
