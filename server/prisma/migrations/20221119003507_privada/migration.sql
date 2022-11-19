/*
  Warnings:

  - You are about to drop the `cancha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cancha" DROP CONSTRAINT "cancha_userId_fkey";

-- DropTable
DROP TABLE "cancha";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "Persona" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "celular" INTEGER NOT NULL,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turnos" (
    "id" INTEGER NOT NULL,
    "turnosId" INTEGER NOT NULL,
    "cancha" INTEGER NOT NULL,

    CONSTRAINT "Turnos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dia" (
    "id" INTEGER NOT NULL,
    "idTurno" INTEGER NOT NULL,
    "dia" INTEGER NOT NULL,
    "diaId" INTEGER NOT NULL,
    "turnosId" INTEGER NOT NULL,

    CONSTRAINT "Dia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horario" (
    "id" INTEGER NOT NULL,
    "hora" INTEGER NOT NULL,
    "horarioId" INTEGER NOT NULL,
    "turnosId" INTEGER NOT NULL,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Turnos" ADD CONSTRAINT "Turnos_turnosId_fkey" FOREIGN KEY ("turnosId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dia" ADD CONSTRAINT "Dia_turnosId_fkey" FOREIGN KEY ("turnosId") REFERENCES "Turnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horario" ADD CONSTRAINT "Horario_turnosId_fkey" FOREIGN KEY ("turnosId") REFERENCES "Turnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
