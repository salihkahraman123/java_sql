DROP DATABASE IF EXISTS pigeons;
CREATE DATABASE pigeons;
USE pigeons;
CREATE TABLE users (name VARCHAR(255), pass (VARCHAR), mail VARCHAR(255));
CREATE TABLE galabi (nomer INT, poroda VARCHAR(255), snimka VARCHAR(255));

INSERT INTO users VALUES ("admin", "admin", "admin@abv.bg");
INSERT INTO users VALUES ("guest", "guest", "guest@abv.bg");
INSERT INTO users VALUES ("Salih", "1234", "kahramansalih04@gmail.com@abv.bg");


INSERT INTO galabi VALUES (1, "poshtenski", "https://static.pigeonracingpigeon.com/wp-content/uploads/2010/04/racing-pigeon.jpg");
INSERT INTO galabi VALUES (2, "orientalska mevka", "https://upload.wikimedia.org/wikipedia/commons/1/1d/Oriental_frill%28Black_laced_blondinette%29.jpg");
INSERT INTO galabi VALUES (3, "kitajska chaika", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfip4LBAbYtPKcjnT08ZRA995pHWZ0xmXitzIUfLCS_LhAv4UAVkpRThy2zpvhFGZItJU&usqp=CAU");
