-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "celular" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cancha" (
    "id" SERIAL NOT NULL,
    "cancha" INTEGER NOT NULL,
    "nombre" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "cancha_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cancha" ADD CONSTRAINT "cancha_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
