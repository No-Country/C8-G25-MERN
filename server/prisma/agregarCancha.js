const { PrismaClient } = require("@prisma/client");
const fulvo = [
  { nombreCancha: "futbol 5", idCancha: 1 },
  { nombreCancha: "futbol 7", idCancha: 2 },
  { nombreCancha: "futbol 11", idCancha: 3 },
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
