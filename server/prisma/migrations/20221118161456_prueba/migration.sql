/*
  Warnings:

  - You are about to drop the `Cancha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Fecha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cancha" DROP CONSTRAINT "Cancha_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Fecha" DROP CONSTRAINT "Fecha_fechaId_fkey";

-- DropTable
DROP TABLE "Cancha";

-- DropTable
DROP TABLE "Fecha";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
