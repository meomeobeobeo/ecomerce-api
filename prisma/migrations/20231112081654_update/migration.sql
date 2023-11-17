/*
  Warnings:

  - You are about to drop the column `devide_id` on the `otp` table. All the data in the column will be lost.
  - Added the required column `typeOtp` to the `otp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `otp` DROP COLUMN `devide_id`,
    ADD COLUMN `typeOtp` VARCHAR(191) NOT NULL;
