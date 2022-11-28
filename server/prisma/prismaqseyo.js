// const { PrismaClient } = require('@prisma/client')
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()
const canchas = [
  { nombre: "5 vs 5", info: 'alguna info', id: 1 },
  { nombre: "7 vs 7", info: 'alguna info', id: 2 },
  { nombre: "11 vs 11", info: 'alguna info', id: 3 },
];
const horas = [
  { horario: "10", id: 10 },
  { horario: "11", id: 11 },
  { horario: "12", id: 12 },
  { horario: "13", id: 13 },
  { horario: "14", id: 14 },
  { horario: "15", id: 15 },
  { horario: "16", id: 16 },
  { horario: "17", id: 17 },
  { horario: "18", id: 18 },
  { horario: "19", id: 19 },
  { horario: "20", id: 20 },
  { horario: "21", id: 21 },
  { horario: "22", id: 22 },
]
const dias = [
  { dia: "Lunes", id: 1 },
  { dia: "Martes", id: 2 },
  { dia: "Miercoles", id: 3 },
  { dia: "Jueves", id: 4 },
  { dia: "Viernes", id: 5 },
  { dia: "Sabado", id: 6 },
  { dia: "Domingo", id: 7 },
]

async function crearBase() {
  try {
    const canchass = await prisma.Cancha.createMany({
      data: canchas
    })


    const horass = await prisma.Hora.createMany({
      data: horas
    })

    const diass = await prisma.Dia.createMany({
      data: dias
    })

    await prisma.$disconnect()
    console.log('Se creo correctamente')
    // console.log([canchass, horass, diass])
  } catch (err) {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
  }



}




crearBase()