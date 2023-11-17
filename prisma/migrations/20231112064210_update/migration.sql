/*
  Warnings:

  - Added the required column `value` to the `otp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `auth` MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE `devide` MODIFY `os` VARCHAR(191) NULL,
    MODIFY `osVersion` VARCHAR(191) NULL,
    MODIFY `browser` VARCHAR(191) NULL,
    MODIFY `browserVersion` VARCHAR(191) NULL,
    MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'active',
    MODIFY `ip` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `otp` ADD COLUMN `tryCount` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `value` INTEGER NOT NULL,
    MODIFY `devide_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `site_user` MODIFY `status` VARCHAR(191) NULL,
    MODIFY `avatar` VARCHAR(191) NULL,
    MODIFY `birth_day` DATETIME(3) NULL;
