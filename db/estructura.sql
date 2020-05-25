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
  `nombe` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`nombe`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `armory`.`weapons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `armory`.`weapons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `damage` INT NOT NULL,
  `model_nombe` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_weapons_model1_idx` (`model_nombe` ASC),
  CONSTRAINT `fk_weapons_model1`
    FOREIGN KEY (`model_nombe`)
    REFERENCES `armory`.`model` (`nombe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
  `type` INT NOT NULL,
  PRIMARY KEY (`id`))
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
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `armory`.`model`
-- -----------------------------------------------------
START TRANSACTION;
USE `armory`;
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('Agram 2000', 'Subfusil');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('PP19', 'Subfusil');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('CZ Scorpion Evo 3', 'Subfusil');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('Heckler & Koch UMP', 'Subfusil');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('Spectre M4', 'Subfusil');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('FN P90', 'Subfusil');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('AA-12', 'Escopeta');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('Benelli M4', 'Escopeta');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('R9-0', 'Escopeta');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('Origin 12', 'Escopeta');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('Rogue VLK', 'Escopeta');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('EBR-14', 'Fusil tactico');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('MK2 carabina', 'Fusil tactico');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('SKS', 'Fusil tactico');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('Kar98k', 'Fusil tactico');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('Kilo 141', 'Fusil de asalto');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('AK-47', 'Fusil de asalto');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('FN Scar 17', 'Fusil de asalto');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('RAM-7', 'Fusil de asalto');
INSERT INTO `armory`.`model` (`nombe`, `type`) VALUES ('GRAU 5.56', 'Fusil de asalto');

COMMIT;


-- -----------------------------------------------------
-- Data for table `armory`.`armor`
-- -----------------------------------------------------
START TRANSACTION;
USE `armory`;
INSERT INTO `armory`.`armor` (`id`, `name`, `price`, `weight`, `mobility`, `protection`, `type`) VALUES (1, 'Chaleco TF-43', 2000, 4, 2, 10, 'Pecho');

COMMIT;

