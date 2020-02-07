
--Create Database in Postgres

CREATE DATABASE TODO;

-- create User Table

CREATE TABLE Users ( id serial PRIMARY KEY, name VARCHAR(50) NOT NULL ,
email VARCHAR(60) UNIQUE NOT NULL,username VARCHAR(40)
 UNIQUE NOT NULL, password TEXT NOT NULL);



CREATE TABLE userTodo ( id serial PRIMARY KEY ,userID TEXT NOT NULL,
 subject TEXT NOT NULL, details TEXT NOT NULL ,state CHAR(3) NOT NULL)




