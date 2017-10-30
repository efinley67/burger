DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(250),
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY (id)
);