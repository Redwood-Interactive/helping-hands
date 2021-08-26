
-- ---
-- Globals
-- ---
-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;
-- ---
-- Table 'users'
--
-- ---
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` SERIAL NULL AUTO_INCREMENT DEFAULT NULL,
  `first_name` VARCHAR(250) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL DEFAULT 'NULL',
  `current_rating` INTEGER NULL DEFAULT NULL,
  `email` VARCHAR(255) NOT NULL DEFAULT 'NULL',
  `phone` INT NOT NULL DEFAULT NULL,
  `u_location` VARCHAR(200) NOT NULL DEFAULT 'NULL',
  `profile_pic` VARCHAR(1500) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);
-- ---
-- Table 'contribution'
--
-- ---
DROP TABLE IF EXISTS `contribution`;

CREATE TABLE `contribution` (
  `id` SERIAL NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NOT NULL DEFAULT NULL,
  `title` VARCHAR(200) NOT NULL DEFAULT 'NULL',
  `description` VARCHAR(1500) NOT NULL DEFAULT 'NULL',
  `category` VARCHAR(100) NOT NULL DEFAULT 'NULL',
  `date` TIMESTAMP NOT NULL DEFAULT 'NULL',
  `condition` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `available` BINARY NOT NULL DEFAULT 'NULL',
  `c_location` VARCHAR(255) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);
-- ---
-- Table 'request'
--
-- ---
DROP TABLE IF EXISTS `request`;

CREATE TABLE `request` (
  `id` SERIAL NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` INTEGER NOT NULL DEFAULT NULL,
  `title` VARCHAR(255) NOT NULL DEFAULT 'NULL',
  `description` VARCHAR(1500) NOT NULL DEFAULT 'NULL',
  `category` INTEGER NULL DEFAULT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT 'NULL',
  `available` BINARY NOT NULL DEFAULT 'NULL',
  `r_location` VARCHAR(200) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);
-- ---
-- Table 'photos'
--
-- ---
DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` SERIAL NULL AUTO_INCREMENT DEFAULT NULL,
  `contribution_id` INTEGER NOT NULL DEFAULT NULL,
  `photo_url` VARCHAR(1500) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);
-- ---
-- Foreign Keys
-- ---
ALTER TABLE `contribution` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `request` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `photos` ADD FOREIGN KEY (contribution_id) REFERENCES `contribution` (`id`);
-- ---
-- Table Properties
-- ---
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `contribution` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `request` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ---
-- Test Data
-- ---
-- INSERT INTO `users` (`id`,`first_name`,`last_name`,`current_rating`,`email`,`phone`,`u_location`,`profile_pic`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `contribution` (`id`,`user_id`,`title`,`description`,`category`,`date`,`condition`,`available`,`c_location`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `request` (`id`,`user_id`,`title`,`description`,`category`,`date`,`available`,`r_location`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `photos` (`id`,`contribution_id`,`photo_url`) VALUES
-- ('','','');

