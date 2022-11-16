/*
  Warnings:

  - You are about to drop the `Turnos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Dia" DROP CONSTRAINT "Dia_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Turnos" DROP CONSTRAINT "Turnos_id_cancha_fkey";

-- DropTable
DROP TABLE "Turnos";

-- CreateTable
CREATE TABLE "Turno" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_cancha" INTEGER NOT NULL,

    CONSTRAINT "Turno_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Turno_email_key" ON "Turno"("email");

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_cancha_fkey" FOREIGN KEY ("id_cancha") REFERENCES "Cancha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dia" ADD CONSTRAINT "Dia_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Turno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
