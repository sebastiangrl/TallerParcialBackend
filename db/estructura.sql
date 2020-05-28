-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
<<<<<<< HEAD
-- Schema avantece_armory
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema avantece_armory
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `avantece_armory` DEFAULT CHARACTER SET utf8 ;
USE `avantece_armory` ;

-- -----------------------------------------------------
-- Table `avantece_armory`.`model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantece_armory`.`model` (
  `nombe` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`nombe`))
=======
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
>>>>>>> Sebas
ENGINE = InnoDB;


-- -----------------------------------------------------
<<<<<<< HEAD
-- Table `avantece_armory`.`weapons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantece_armory`.`weapons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `damage` INT NOT NULL,
  `model_nombe` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_weapons_model1_idx` (`model_nombe` ASC),
  CONSTRAINT `fk_weapons_model1`
    FOREIGN KEY (`model_nombe`)
    REFERENCES `avantece_armory`.`model` (`nombe`)
=======
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
>>>>>>> Sebas
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
<<<<<<< HEAD
-- Table `avantece_armory`.`accessorys`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantece_armory`.`accessorys` (
=======
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
>>>>>>> Sebas
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
<<<<<<< HEAD
  `type` INT NOT NULL,
  PRIMARY KEY (`id`))
=======
  `type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_accessorys_type1_idx` (`type_id` ASC),
  CONSTRAINT `fk_accessorys_type1`
    FOREIGN KEY (`type_id`)
    REFERENCES `armory`.`type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
>>>>>>> Sebas
ENGINE = InnoDB;


-- -----------------------------------------------------
<<<<<<< HEAD
-- Table `avantece_armory`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantece_armory`.`users` (
=======
-- Table `armory`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`users` (
>>>>>>> Sebas
  `id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `clan` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
<<<<<<< HEAD
-- Table `avantece_armory`.`assembler`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantece_armory`.`assembler` (
=======
-- Table `armory`.`assembler`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`assembler` (
>>>>>>> Sebas
  `weapons_id` INT NOT NULL,
  `accessorys_id` INT NOT NULL,
  INDEX `fk_assembler_weapons_idx` (`weapons_id` ASC),
  INDEX `fk_assembler_accessorys1_idx` (`accessorys_id` ASC),
  CONSTRAINT `fk_assembler_weapons`
    FOREIGN KEY (`weapons_id`)
<<<<<<< HEAD
    REFERENCES `avantece_armory`.`weapons` (`id`)
=======
    REFERENCES `armory`.`weapons` (`id`)
>>>>>>> Sebas
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_assembler_accessorys1`
    FOREIGN KEY (`accessorys_id`)
<<<<<<< HEAD
    REFERENCES `avantece_armory`.`accessorys` (`id`)
=======
    REFERENCES `armory`.`accessorys` (`id`)
>>>>>>> Sebas
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
<<<<<<< HEAD
-- Table `avantece_armory`.`armor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `avantece_armory`.`armor` (
=======
-- Table `armory`.`armor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`armor` (
>>>>>>> Sebas
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `weight` INT NOT NULL,
  `mobility` INT NOT NULL,
  `protection` INT NOT NULL,
<<<<<<< HEAD
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
=======
  `type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_armor_type1_idx` (`type_id` ASC),
  CONSTRAINT `fk_armor_type1`
    FOREIGN KEY (`type_id`)
    REFERENCES `armory`.`type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
>>>>>>> Sebas
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
<<<<<<< HEAD
-- Data for table `avantece_armory`.`model`
-- -----------------------------------------------------
START TRANSACTION;
USE `avantece_armory`;
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('Agram 2000', 'Subfusil');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('PP19', 'Subfusil');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('CZ Scorpion Evo 3', 'Subfusil');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('Heckler & Koch UMP', 'Subfusil');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('Spectre M4', 'Subfusil');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('FN P90', 'Subfusil');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('AA-12', 'Escopeta');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('Benelli M4', 'Escopeta');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('R9-0', 'Escopeta');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('Origin 12', 'Escopeta');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('Rogue VLK', 'Escopeta');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('EBR-14', 'Fusil tactico');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('MK2 carabina', 'Fusil tactico');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('SKS', 'Fusil tactico');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('Kar98k', 'Fusil tactico');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('Kilo 141', 'Fusil de asalto');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('AK-47', 'Fusil de asalto');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('FN Scar 17', 'Fusil de asalto');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('RAM-7', 'Fusil de asalto');
INSERT INTO `avantece_armory`.`model` (`nombe`, `type`) VALUES ('GRAU 5.56', 'Fusil de asalto');
=======
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
>>>>>>> Sebas

COMMIT;


-- -----------------------------------------------------
<<<<<<< HEAD
-- Data for table `avantece_armory`.`armor`
-- -----------------------------------------------------
START TRANSACTION;
USE `avantece_armory`;
INSERT INTO `avantece_armory`.`armor` (`id`, `name`, `price`, `weight`, `mobility`, `protection`, `type`) VALUES (1, 'Chaleco TF-43', 2000, 4, 2, 10, 'Pecho');
=======
-- Data for table `armory`.`armor`
-- -----------------------------------------------------
START TRANSACTION;
USE `armory`;
INSERT INTO `armory`.`armor` (`id`, `name`, `price`, `weight`, `mobility`, `protection`, `type_id`) VALUES (1, 'Chaleco TF-43', 2000, 4, 2, 10, 1);
INSERT INTO `armory`.`armor` (`id`, `name`, `price`, `weight`, `mobility`, `protection`, `type_id`) VALUES (2, 'blin-k600', 420, 2, -2, 15, 2);
>>>>>>> Sebas

COMMIT;

