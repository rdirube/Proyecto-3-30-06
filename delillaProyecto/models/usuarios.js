const { Model, DataTypes } = require("sequelize");
const sequelize = require("./../config/db");
class Usuarios extends Model {}
Usuarios.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        notNull: { msg: "Por favor ingrese usuario" },
        len: [5, 10],
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "por favor ingresar nombre" },
      },
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: { msg: "por favor ingresar correo" },
      },
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        notNull: { msg: "por favor ingresar teléfono" },
      },
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "por favor ingresar dirección " },
      },
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "por favor ingresar contraseña" },
        len: [5, 10],
      },
    },
  },
  {
    sequelize,
    tableName: "usuarios",
    timestamps: false,
  }
);
module.exports = Usuarios;
