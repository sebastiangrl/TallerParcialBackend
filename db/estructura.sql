-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema armory
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema armory
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `armory` DEFAULT CHARACTER SET utf8 ;
USE `armory` ;

-- -----------------------------------------------------
-- Table `armory`.`model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`model` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `armory`.`weapons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`weapons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `damage` INT NOT NULL,
  `model_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_weapons_model1_idx` (`model_id` ASC),
  CONSTRAINT `fk_weapons_model1`
    FOREIGN KEY (`model_id`)
    REFERENCES `armory`.`model` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `armory`.`type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `armory`.`accessorys`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`accessorys` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `damage` INT NOT NULL,
  `precision` INT NOT NULL,
  `scope` INT NOT NULL,
  `cadence` INT NOT NULL,
  `mobility` INT NOT NULL,
  `control` INT NOT NULL,
  `level` INT NOT NULL,
  `type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_accessorys_type1_idx` (`type_id` ASC),
  CONSTRAINT `fk_accessorys_type1`
    FOREIGN KEY (`type_id`)
    REFERENCES `armory`.`type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `armory`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`users` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `clan` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `armory`.`assembler`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`assembler` (
  `weapons_id` INT NOT NULL,
  `accessorys_id` INT NOT NULL,
  INDEX `fk_assembler_weapons_idx` (`weapons_id` ASC),
  INDEX `fk_assembler_accessorys1_idx` (`accessorys_id` ASC),
  CONSTRAINT `fk_assembler_weapons`
    FOREIGN KEY (`weapons_id`)
    REFERENCES `armory`.`weapons` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_assembler_accessorys1`
    FOREIGN KEY (`accessorys_id`)
    REFERENCES `armory`.`accessorys` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `armory`.`armor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`armor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `weight` INT NOT NULL,
  `mobility` INT NOT NULL,
  `protection` INT NOT NULL,
  `type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_armor_type1_idx` (`type_id` ASC),
  CONSTRAINT `fk_armor_type1`
    FOREIGN KEY (`type_id`)
    REFERENCES `armory`.`type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `armory`.`model`
-- -----------------------------------------------------
START TRANSACTION;
USE `armory`;
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (1, 'Agram 2000', 'Subfusil');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (2, 'PP19', 'Subfusi');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (3, 'CZ Scorpion Evo 3', 'Subfusil');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (4, 'Heckler & Koch UMP', 'Subfusil');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (5, 'Spectre M4', 'Subfusil');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (6, 'FN P90', 'Subfusil');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (7, 'AA-12', 'Escopeta');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (8, 'Benelli M4', 'Escopeta');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (9, 'R9-0', 'Escopeta');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (10, 'Origin 12', 'Escopeta');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (11, 'Rogue VLK', 'Escopeta');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (12, 'EBR-14', 'Fusil tactico');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (13, 'MK2 carabina', 'Fusil tactico');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (14, 'SKS', 'Fusil tactico');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (15, 'Kar98k', 'Fusil tactico');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (16, 'Kilo 141', 'Fusil de asalto');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (17, 'AK-47', 'Fusil de asalto');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (18, 'FN Scar 17', 'Fusil de asalto');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (19, 'RAM-7', 'Fusil de asalto');
INSERT INTO `armory`.`model` (`id`, `model`, `type`) VALUES (20, 'GRAU 5.56', 'Fusil de asalto');

COMMIT;


-- -----------------------------------------------------
-- Data for table `armory`.`weapons`
-- -----------------------------------------------------
START TRANSACTION;
USE `armory`;
INSERT INTO `armory`.`weapons` (`id`, `name`, `damage`, `model_id`) VALUES (1, 'Predator DF', 10, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `armory`.`type`
-- -----------------------------------------------------
START TRANSACTION;
USE `armory`;
INSERT INTO `armory`.`type` (`id`, `type`) VALUES (1, 'Pecho');
INSERT INTO `armory`.`type` (`id`, `type`) VALUES (2, 'Cabeza');
INSERT INTO `armory`.`type` (`id`, `type`) VALUES (3, 'Piernas');
INSERT INTO `armory`.`type` (`id`, `type`) VALUES (4, 'Hombros');
INSERT INTO `armory`.`type` (`id`, `type`) VALUES (5, 'Brazos');
INSERT INTO `armory`.`type` (`id`, `type`) VALUES (6, 'Cargador');
INSERT INTO `armory`.`type` (`id`, `type`) VALUES (7, 'Mira');
INSERT INTO `armory`.`type` (`id`, `type`) VALUES (8, 'Culata');
INSERT INTO `armory`.`type` (`id`, `type`) VALUES (9, 'Cañon');

COMMIT;


-- -----------------------------------------------------
-- Data for table `armory`.`accessorys`
-- -----------------------------------------------------
START TRANSACTION;
USE `armory`;
INSERT INTO `armory`.`accessorys` (`id`, `name`, `price`, `damage`, `precision`, `scope`, `cadence`, `mobility`, `control`, `level`, `type_id`) VALUES (1, 'Municion explosiva', 150, 15, -3, -2, -1, 0, -10, 2, 6);

COMMIT;


-- -----------------------------------------------------
-- Data for table `armory`.`users`
-- -----------------------------------------------------
START TRANSACTION;
USE `armory`;
INSERT INTO `armory`.`users` (`id`, `username`, `clan`, `password`) VALUES (1, 'pelitos', 'best clan ever', '123');

COMMIT;


-- -----------------------------------------------------
-- Data for table `armory`.`armor`
-- -----------------------------------------------------
START TRANSACTION;
USE `armory`;
INSERT INTO `armory`.`armor` (`id`, `name`, `price`, `weight`, `mobility`, `protection`, `type_id`) VALUES (1, 'Chaleco TF-43', 2000, 4, 2, 10, 1);
INSERT INTO `armory`.`armor` (`id`, `name`, `price`, `weight`, `mobility`, `protection`, `type_id`) VALUES (2, 'blin-k600', 420, 2, -2, 15, 2);

COMMIT;

