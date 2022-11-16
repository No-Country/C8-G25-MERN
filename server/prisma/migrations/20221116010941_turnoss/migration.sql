/*
  Warnings:

  - You are about to drop the column `authorId` on the `Turnos` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Dia` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Turnos" DROP CONSTRAINT "Turnos_authorId_fkey";

-- AlterTable
ALTER TABLE "Dia" ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Turnos" DROP COLUMN "authorId";

-- AddForeignKey
ALTER TABLE "Dia" ADD CONSTRAINT "Dia_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Turnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
