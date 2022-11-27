const express = require("express");

const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const cors = require("cors");
var bodyParser = require("body-parser");
const prisma = new PrismaClient();

const app = express();
app.use(express.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get("/hola", async (req, res) => {
console.log(req)
  const post = await prisma.cancha.findMany();
  res.status(200).json(post);
});

const PORT = 3006;

app.listen(PORT, () => {
  console.log(`Corriendo en el puerto ${PORT}`);
});

module.exports = router;
