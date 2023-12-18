/*
  Warnings:

  - You are about to alter the column `price` on the `shipping_method` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `shipping_method` MODIFY `price` VARCHAR(191) NOT NULL;
