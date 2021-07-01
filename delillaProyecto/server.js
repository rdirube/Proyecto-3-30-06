const express = require("express");
const { Pedidos, Productos, Usuarios, FormasPago, Roles } = require("./models");

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
app.use(express.json());

app.get("/pedidosDashboard", async (req, res) => {
  const pedidos = await Pedidos.findAll({
    include: [
      { model: Productos },
      { model: Usuarios, attributes: ["nombre"] },
    ],
  });

  res.json(pedidos);
});

app.listen(APP_PORT, () => {
  console.log(`escuchando en puerto ${APP_PORT}`);
});
