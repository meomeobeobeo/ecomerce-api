/*
  Warnings:

  - You are about to drop the `order_line` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `order_line` DROP FOREIGN KEY `order_line_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `order_line` DROP FOREIGN KEY `order_line_product_item_id_fkey`;

-- DropTable
DROP TABLE `order_line`;
