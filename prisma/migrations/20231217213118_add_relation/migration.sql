-- AddForeignKey
ALTER TABLE `shoping_cart_item` ADD CONSTRAINT `shoping_cart_item_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `shoping_cart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shoping_cart_item` ADD CONSTRAINT `shoping_cart_item_product_item_id_fkey` FOREIGN KEY (`product_item_id`) REFERENCES `product_item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shoping_cart_item` ADD CONSTRAINT `shoping_cart_item_product_configuration_id_fkey` FOREIGN KEY (`product_configuration_id`) REFERENCES `product_configuration`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
