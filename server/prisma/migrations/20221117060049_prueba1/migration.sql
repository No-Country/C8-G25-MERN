-- CreateTable
CREATE TABLE "Fecha" (
    "id" SERIAL NOT NULL,
    "dia" INTEGER NOT NULL,
    "mes" INTEGER NOT NULL,
    "anio" INTEGER NOT NULL,
    "hora" INTEGER NOT NULL,
    "fechaId" INTEGER NOT NULL,

    CONSTRAINT "Fecha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cancha" (
    "idC" SERIAL NOT NULL,
    "nombreCancha" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Cancha_pkey" PRIMARY KEY ("idC")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "cel" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cancha_usuarioId_key" ON "Cancha"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cel_key" ON "Usuario"("cel");

-- AddForeignKey
ALTER TABLE "Fecha" ADD CONSTRAINT "Fecha_fechaId_fkey" FOREIGN KEY ("fechaId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cancha" ADD CONSTRAINT "Cancha_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
