CREATE DATABASE DishOrder;

USE DishOrder;

CREATE TABLE
    Ingredient(
        Ingredient_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Type VARCHAR(255)
    );

CREATE TABLE
    Categories(
        Category_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Category_type VARCHAR(255)
    );

CREATE TABLE
    Status(
        Status_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Status VARCHAR(255)
    );

CREATE TABLE
    Dish (
        Dish_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Dish_name VARCHAR(255),
        Category_ID INT,
        FOREIGN KEY (Category_ID) REFERENCES Categories(Category_ID),
        Ingredient_ID INT,
        FOREIGN KEY (Ingredient_ID) REFERENCES Ingredient(Ingredient_ID),
        Status_ID INT,
        FOREIGN KEY (Status_ID) REFERENCES Status (Status_ID)
    );

CREATE TABLE
    Dish_Status(
        Dish_ID INT,
        FOREIGN KEY (Dish_ID) REFERENCES Dish(Dish_ID),
        Status_ID INT,
        FOREIGN KEY (Status_ID) REFERENCES Status(Status_ID)
    );

CREATE TABLE
    Dish_Order(
        Dish_Order_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Order_date DATE,
        Dish_ID INT,
        FOREIGN KEY (Dish_ID) REFERENCES Dish(Dish_ID)
    );

CREATE TABLE
    Customer(
        Cstomer_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Name VARCHAR(255),
        Email VARCHAR(255),
        Dish_Order_ID INT,
        FOREIGN KEY (Dish_Order_ID) REFERENCES Dish_Order(Dish_Order_ID)
    );