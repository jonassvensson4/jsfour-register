ALTER TABLE `essentialmode`.`characters` 
ADD COLUMN `lastdigits` VARCHAR(255) NULL DEFAULT NULL;

ALTER TABLE `essentialmode`.`users` 
ADD COLUMN `lastdigits` VARCHAR(255) NULL DEFAULT NULL;

