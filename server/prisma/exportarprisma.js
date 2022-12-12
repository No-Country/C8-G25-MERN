// const { PrismaClient } = require('@prisma/client')
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const canchas = [{ nombre: "5 vs 5", info: "alguna info", id: 1 }];
const horas = [
  { horario: 10, alquilado: false, id: 10 },
  { horario: 11, alquilado: false, id: 11 },
  { horario: 12, alquilado: false, id: 12 },
  { horario: 13, alquilado: false, id: 13 },
  { horario: 14, alquilado: false, id: 14 },
  { horario: 15, alquilado: false, id: 15 },
  { horario: 16, alquilado: false, id: 16 },
  { horario: 17, alquilado: false, id: 17 },
  { horario: 18, alquilado: false, id: 18 },
  { horario: 19, alquilado: false, id: 19 },
  { horario: 20, alquilado: false, id: 20 },
  { horario: 21, alquilado: false, id: 21 },
  { horario: 22, alquilado: false, id: 22 },
  { horario: 23, alquilado: false, id: 23 },
  { horario: 24, alquilado: false, id: 24 },
];

async function crearBase() {
  try {
    const canchass = await prisma.Cancha.createMany({
      data: canchas,
    });

    await prisma.$disconnect();
    console.log("Se creo correctamente");
    // console.log([canchass, horass, diass])
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  }
}

crearBase();
