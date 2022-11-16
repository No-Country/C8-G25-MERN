/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Turnos" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Turnos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dia" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Dia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horario" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Turnos_email_key" ON "Turnos"("email");

-- AddForeignKey
ALTER TABLE "Turnos" ADD CONSTRAINT "Turnos_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Dia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
