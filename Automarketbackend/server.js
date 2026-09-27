require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./src/config/db");

const vehiculosRoutes = require("./src/routes/vehiculos.routes");
const usuariosRoutes = require("./src/routes/usuarios.routes");
const consultasRoutes = require("./src/routes/consultas.routes");

const app = express();

app.use(cors());
app.use(express.json());

// ========================================
// FRONTEND - AutoMarket
// ========================================

app.use(express.static(path.join(__dirname, "public")));

// ========================================
// API
// ========================================

app.use("/api/vehiculos", vehiculosRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/consultas", consultasRoutes);

// ========================================
// SERVIDOR
// ========================================

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor AutoMarket escuchando en el puerto ${PORT}`);
  });
});