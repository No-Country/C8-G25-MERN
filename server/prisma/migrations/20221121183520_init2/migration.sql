-- CreateTable
CREATE TABLE "Cancha" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "info" TEXT NOT NULL,

    CONSTRAINT "Cancha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turno" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "id_hora" INTEGER NOT NULL,
    "id_dia" INTEGER NOT NULL,
    "id_cancha" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Turno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dia" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Dia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hora" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Hora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_hora_fkey" FOREIGN KEY ("id_hora") REFERENCES "Hora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_dia_fkey" FOREIGN KEY ("id_dia") REFERENCES "Dia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_cancha_fkey" FOREIGN KEY ("id_cancha") REFERENCES "Cancha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
