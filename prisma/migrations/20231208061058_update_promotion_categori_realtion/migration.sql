/*
  Warnings:

  - The primary key for the `promotion_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `promotion_category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `promotion_category` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`category_id`, `promotion_id`);

-- AddForeignKey
ALTER TABLE `promotion_category` ADD CONSTRAINT `promotion_category_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `product_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
