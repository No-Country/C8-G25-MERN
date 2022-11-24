// const { PrismaClient } = require('@prisma/client')
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()


async function crearCancha() {

  try {

    const cancha1 = await prisma.Cancha.create({
      data: {
        id: 1,
        nombre: 'cancha1',
        info: 'alguna info'
        // email: 'gonzapjl2@gmail.com'
      },
    })
    const cancha2 = await prisma.Cancha.create({
      data: {
        id: 2,
        nombre: 'cancha2',
        info: 'alguna info'
        // email: 'gonzapjl2@gmail.com'
      },
    })
    const cancha3 = await prisma.Cancha.create({
      data: {
        id: 3,
        nombre: 'cancha3',
        info: 'alguna info'
        // email: 'gonzapjl2@gmail.com'
      },
    })
    await prisma.$disconnect()
    console.log('Se creo correctamente')
    console.log(cancha1, cancha2, cancha3)
  } catch (err) {
    console.error(err)
    await prisma.$disconnect()
    console.log(err)
    process.exit(1)
  }



}




crearCancha()