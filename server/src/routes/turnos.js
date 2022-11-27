const { Router } = require("express");
const { PrismaClient } = require("@prisma/client");

const route = Router();
const prisma = new PrismaClient();

///////////// Metodos POST /////////////
route.post("/crear", async (req, res) => {
  const { email, nombre, hora, dia, play} = req.body;

  if (!email || !nombre || !hora || !dia || !play) {
    res.send("Faltan datos para crear turnos");
    // console.log(req.body);
  } else {
    try {
      const turno = await prisma.Turno.create({
        data: {
          email,
          nombre,
          dia: { connect: { id: dia } },
          hora: { connect: { id: hora } },
          play: { connect: { id: play } },
        },
      });
      res.send(turno);
      console.log("se agrego correctamente");
      await prisma.$disconnect();
    } catch (err) {
      // console.log(err)
      res.send(err);
      await prisma.$disconnect();
      process.exit(1);
    }
  }
});
///////////////////////////////////////

///////////// Metodos GET /////////////
route.get("/", async (req, res) => {
  try {
    const turnos = await prisma.Turno.findMany({
      include: {
        dia: true,
        hora: true,
        play: true,
      },
    });

    res.send(turnos);
  } catch (err) {
    res.send(err);
    await prisma.$disconnect();
    process.exit(1);
  }
});

///////////////////////////////////////

module.exports = route;

//Parked
