-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE burgers_db;

-- Use the DB wizard_schools_db for all the rest of the script
USE burgers_db;

-- Created the table "schools"
CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(30) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);