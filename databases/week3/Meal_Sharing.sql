CREATE DATABASE Meal_Sharing;

USE Meal_Sharing ;

CREATE TABLE
    Meal (
        Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Title VARCHAR(255),
        Description TEXT,
        Location VARCHAR(255),
        `When` DATETIME NOT NULL,
        Max_reservations INT,
        Price DECIMAL,
        Created_date DATE
    );

CREATE TABLE
    Reservation (
        Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Number_of_guests INT,
        Meal_id INT,
        Created_date DATE,
        Contact_phonenumber VARCHAR(255),
        Contact_name VARCHAR(255),
        Contact_email VARCHAR(255),
        FOREIGN KEY (Meal_id) REFERENCES Meal (Id)
    );

CREATE TABLE
    Review (
        Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Title VARCHAR(255),
        Description TEXT,
        Meal_id INT,
        Stars INT,
        Created_date DATE,
        FOREIGN KEY (Meal_id) REFERENCES Meal (Id)
    );

INSERT INTO
    Meal (
        Title,
        Description,
        Location,
        `When`,
        Max_reservations,
        Price,
        Created_date
    )
VALUES (
        'Buffalo cauliflower wings',
        'Make "buffalo cauliflower" for a veggie take on the spicy American classic. Served with a ranch dip, it makes an excellent Friday night sharing treat',
        'Viborgvej 3, Aarhus',
        '2023-03-01 18:00:00',
        4,
        250,
        '2023-03-01'
    );

INSERT INTO
    Meal (
        Title,
        Description,
        Location,
        `When`,
        Max_reservations,
        Price,
        Created_date
    )
VALUES (
        'Beef & chorizo empanadas',
        'Think of these beef and chorizo empanadas as a kind of South American pasty. They can be baked or fried and are tasty served with guacamole and sour cream',
        'Grønnegade 10, Aarhus',
        '2023-03-05 18:00:00',
        2,
        250,
        '2023-03-01'
    );

INSERT INTO
    Meal (
        Title,
        Description,
        Location,
        `When`,
        Max_reservations,
        Price,
        Created_date
    )
VALUES (
        'Whisky & nut baked camembert',
        'Make this gooey baked cheese even more indulgent with the help of whisky, maple syrup and nuts. Serve with toasted sourdough for a fabulous sharing starter',
        'Telefontorvet 1, Aarhus',
        '2023-03-09 12:00:00',
        6,
        300,
        '2023-03-01'
    );

INSERT INTO
    Meal (
        Title,
        Description,
        Location,
        `When`,
        Max_reservations,
        Price,
        Created_date
    )
VALUES (
        'Cheese & pesto whirls',
        'These herby tear-and-share bread rolls have mozzarella and sun-dried tomatoes baked into them - perfect for a picnic or for dipping into soup',
        'Rosensgade 35, Aarhus',
        '2023-03-29 17:00:00',
        2,
        150,
        '2023-03-01'
    );

INSERT INTO
    Reservation(
        Number_of_guests,
        Meal_id,
        Created_date,
        Contact_phonenumber,
        Contact_name,
        Contact_email
    )
VALUES (
        4,
        1,
        '2023-03-01',
        '+45 50 20 20 20',
        'Lili',
        'lili.ros@gmai.com'
    );

INSERT INTO
    Reservation(
        Number_of_guests,
        Meal_id,
        Created_date,
        Contact_phonenumber,
        Contact_name,
        Contact_email
    )
VALUES (
        2,
        2,
        '2023-03-01',
        '+45 50 28 28 88',
        'Bjørn',
        'bjørn.b@gmai.com'
    );

INSERT INTO
    Reservation(
        Number_of_guests,
        Meal_id,
        Created_date,
        Contact_phonenumber,
        Contact_name,
        Contact_email
    )
VALUES (
        6,
        3,
        '2023-03-01',
        '+45 50 10 10 88',
        'Sara',
        'sara.s@gmai.com'
    );

INSERT INTO
    Review (
        Title,
        Description,
        Meal_id,
        Stars,
        Created_date
    )
VALUES (
        'Amazibg recipie',
        'Really good.It was ready after 20 minutes.Delcae in taste and fragrant.',
        4,
        5,
        '2023-03-20'
    );

INSERT INTO
    Review (
        Title,
        Description,
        Meal_id,
        Stars,
        Created_date
    )
VALUES (
        'Really excellent.',
        'This is an amazingly effective, stunning &amp; delicious dish that makes a statement on your entertaining table. It’s absolutely delicious &amp.',
        3,
        5,
        '2023-03-20'
    );

INSERT INTO
    Review (
        Title,
        Description,
        Meal_id,
        Stars,
        Created_date
    )
VALUES (
        'Wowzee !!!',
        'Wowzee! This was super tasty. It was lovely with the ranch dip. ',
        1,
        4,
        '2023-03-15'
    );