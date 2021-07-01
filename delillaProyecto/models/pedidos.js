const { Model, DataTypes } = require("sequelize");
const sequelize = require("./../config/db");
class Pedidos extends Model {}
Pedidos.init(
  {
    precio_total: DataTypes.DOUBLE,
    fecha: DataTypes.DATE,
    estado: DataTypes.ENUM("NUEVO", "PREPARANDO", "CONFIRMADO", "ENVIANDO"),
  },
  {
    sequelize,
    tableName: "pedidos",
    timestamps: false,
  }
);
module.exports = Pedidos;
