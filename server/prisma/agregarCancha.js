const { PrismaClient } = require("@prisma/client");
const fulvo = [
  { nombre: "futbol 5", id: 1 },
  { nombre: "futbol 7", id: 2 },
  { nombre: "futbol 11", id: 3 },
];

const prisma = new PrismaClient();
const main = async () => {
  try {
    await prisma.Cancha.createMany({
      data: fulvo,
    });
  } catch (error) {
    console.log(error);
  }
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
