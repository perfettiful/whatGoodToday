### Schema
CREATE DATABASE goals_db;
USE goals_db;

CREATE TABLE goals
(
	id int NOT NULL AUTO_INCREMENT,
	goal_name varchar(255) NOT NULL,
    accomplished BOOLEAN;
	PRIMARY KEY (id)
);
