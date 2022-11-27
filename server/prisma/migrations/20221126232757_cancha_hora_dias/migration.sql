/*
  Warnings:

  - Added the required column `dia` to the `Dia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horario` to the `Hora` table without a default value. This is not possible if the table is not empty.
  - Made the column `id_hora` on table `Turno` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_dia` on table `Turno` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Turno" DROP CONSTRAINT "Turno_id_dia_fkey";

-- DropForeignKey
ALTER TABLE "Turno" DROP CONSTRAINT "Turno_id_hora_fkey";

-- AlterTable
ALTER TABLE "Dia" ADD COLUMN     "dia" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Hora" ADD COLUMN     "horario" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Hora_id_seq";

-- AlterTable
ALTER TABLE "Turno" ALTER COLUMN "id_hora" SET NOT NULL,
ALTER COLUMN "id_dia" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_hora_fkey" FOREIGN KEY ("id_hora") REFERENCES "Hora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_dia_fkey" FOREIGN KEY ("id_dia") REFERENCES "Dia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
