/*
  Warnings:

  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `published` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP CONSTRAINT "Task_pkey",
DROP COLUMN "published",
ADD COLUMN     "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "publishedOn" TIMESTAMP(3),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Task_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Task_id_seq";
