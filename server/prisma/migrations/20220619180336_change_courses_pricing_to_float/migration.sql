/*
  Warnings:

  - You are about to alter the column `valor_mensalidade` on the `courses` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `courses` MODIFY `valor_mensalidade` DOUBLE NOT NULL;
