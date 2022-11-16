/*
  Warnings:

  - Added the required column `id_cancha` to the `Turnos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Turnos" ADD COLUMN     "id_cancha" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Cancha" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "Cancha_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Turnos" ADD CONSTRAINT "Turnos_id_cancha_fkey" FOREIGN KEY ("id_cancha") REFERENCES "Cancha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
