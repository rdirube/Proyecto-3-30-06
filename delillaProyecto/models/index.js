const FormasPago = require("./formasPago");
const Pedidos = require("./pedidos");
const PedidosHasProductos = require("./pedidosHasProductos");
const Productos = require("./productos");
const Roles = require("./roles");
const Usuarios = require("./usuarios");

Usuarios.belongsTo(Roles, {
  foreignKey: "rol_id",
});

Usuarios.hasMany(Pedidos, {
  foreignKey: "usuarios_id",
});

Pedidos.belongsTo(Usuarios, {
  foreignKey: "usuarios_id",
});

// el 20% del proyecto

Pedidos.belongsToMany(Productos, {
  through: PedidosHasProductos,
});

Pedidos.belongsTo(FormasPago, {
  foreignKey: "formas_pago_id",
});

module.exports = {
  PedidosHasProductos,
  Pedidos,
  Usuarios,
  Productos,
  Roles,
  FormasPago,
};
