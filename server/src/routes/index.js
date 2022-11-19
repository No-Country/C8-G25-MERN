const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const { User } = new PrismaClient();

router.post("/turno", async (req, res) => {
  try {
     await User.create({
      data: {
        email: "abcd",
        celular: 2121,
      },
    });
    res.send("se agrego correctamente");
    await prisma.$disconnect();
  } catch (err) {
    console.log(err);
    res.send(err);
    await prisma.$disconnect();
    process.exit(1);
  }
});

router.get("/traer", async (req, res) => {
  const users = await User.findMany();

  res.send(users);
});

module.exports = router;
