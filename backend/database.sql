-- Active: 1704703244465@@127.0.0.1@3306@user_tea
CREATE DATABASE if NOT EXISTS user_tea;

CREATE TABLE users (
    id INT(30) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE upload (
    id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    url varchar(255) NOT NULL,
    unique(url),
    created_at timestamp default CURRENT_TIMESTAMP
);