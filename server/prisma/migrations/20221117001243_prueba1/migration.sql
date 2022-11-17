-- CreateTable
CREATE TABLE "Turnos" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_cancha" INTEGER NOT NULL,
    "idFecha" INTEGER NOT NULL,

    CONSTRAINT "Turnos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fecha" (
    "id" SERIAL NOT NULL,
    "dia" INTEGER NOT NULL,
    "mes" INTEGER NOT NULL,
    "anio" INTEGER NOT NULL,
    "hora" INTEGER NOT NULL,
    "cancha" INTEGER NOT NULL,

    CONSTRAINT "Fecha_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Turnos_email_key" ON "Turnos"("email");

-- AddForeignKey
ALTER TABLE "Turnos" ADD CONSTRAINT "Turnos_idFecha_fkey" FOREIGN KEY ("idFecha") REFERENCES "Fecha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
