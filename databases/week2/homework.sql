-- Part 2: School database

-- Create a new database containing the following tables:

-- Class: with the columns: id, name, begins (date), ends (date)

-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE DATABASE school;

USE school;

CREATE TABLE
    Class(
        Id INT,
        Name VARCHAR(255),
        Begins DATE,
        Ends DATE
    );

CREATE TABLE
    Student(
        Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Name VARCHAR(255),
        Email VARCHAR(255),
        Phone INT,
        Class_id INT,
        FOREIGN KEY (Class_id) REFERENCES Class(Id)
    );

ALTER TABLE
    Class MODIFY COLUMN Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT;

-- Create an index on the name column of the student table.

CREATE INDEX name ON Student (Name) ;

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE Class
ADD
    COLUMN Status ENUM (
        'not-started',
        'ongoing',
        'finished'
    ) NOT NULL;