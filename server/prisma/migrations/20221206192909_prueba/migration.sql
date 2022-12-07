/*
  Warnings:

  - You are about to drop the column `email` on the `Turno` table. All the data in the column will be lost.
  - You are about to drop the column `id_cancha` on the `Turno` table. All the data in the column will be lost.
  - You are about to drop the column `id_dia` on the `Turno` table. All the data in the column will be lost.
  - You are about to drop the column `id_hora` on the `Turno` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `Turno` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Turno` table. All the data in the column will be lost.
  - You are about to drop the `Dia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hora` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fechaId` to the `Turno` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Turno" DROP CONSTRAINT "Turno_id_cancha_fkey";

-- DropForeignKey
ALTER TABLE "Turno" DROP CONSTRAINT "Turno_id_dia_fkey";

-- DropForeignKey
ALTER TABLE "Turno" DROP CONSTRAINT "Turno_id_hora_fkey";

-- DropForeignKey
ALTER TABLE "Turno" DROP CONSTRAINT "Turno_id_user_fkey";

-- AlterTable
ALTER TABLE "Turno" DROP COLUMN "email",
DROP COLUMN "id_cancha",
DROP COLUMN "id_dia",
DROP COLUMN "id_hora",
DROP COLUMN "id_user",
DROP COLUMN "nombre",
ADD COLUMN     "canchaId" INTEGER,
ADD COLUMN     "fechaId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "Dia";

-- DropTable
DROP TABLE "Hora";

-- CreateTable
CREATE TABLE "Fecha" (
    "id" SERIAL NOT NULL,
    "FechaCompleta" TEXT NOT NULL,

    CONSTRAINT "Fecha_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fecha_FechaCompleta_key" ON "Fecha"("FechaCompleta");

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_canchaId_fkey" FOREIGN KEY ("canchaId") REFERENCES "Cancha"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_fechaId_fkey" FOREIGN KEY ("fechaId") REFERENCES "Fecha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
