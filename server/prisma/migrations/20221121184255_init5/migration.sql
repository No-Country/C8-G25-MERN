-- DropForeignKey
ALTER TABLE "Turno" DROP CONSTRAINT "Turno_id_dia_fkey";

-- DropForeignKey
ALTER TABLE "Turno" DROP CONSTRAINT "Turno_id_hora_fkey";

-- DropForeignKey
ALTER TABLE "Turno" DROP CONSTRAINT "Turno_id_user_fkey";

-- AlterTable
ALTER TABLE "Turno" ALTER COLUMN "id_hora" DROP NOT NULL,
ALTER COLUMN "id_dia" DROP NOT NULL,
ALTER COLUMN "id_user" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_hora_fkey" FOREIGN KEY ("id_hora") REFERENCES "Hora"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_dia_fkey" FOREIGN KEY ("id_dia") REFERENCES "Dia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
