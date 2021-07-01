const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Pedidos = require("./pedidos");
const Productos = require("./productos");

const PedidosHasProductos = sequelize.define(
  "pedidos_has_productos",
  {
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pedido_id: {
      field: "pedido_id",
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: Pedidos,
        key: "id",
      },
    },
    producto_id: {
      field: "producto_id",
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: Productos,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "pedidos_has_productos",
    underscored: true,
  }
);

module.exports = PedidosHasProductos;
