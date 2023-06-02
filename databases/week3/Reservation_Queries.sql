-- Get all reservations

SELECT * FROM `Reservation`;

-- Add a new reservation

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
        5,
        '2023-03-02',
        '+45 50 08 08 88',
        'Katarina',
        'katarina.b@gmail.com'
    ), (
        2,
        5,
        '2023-03-02',
        '+45 50 16 17 18',
        'Stefan',
        'stefan.s@gmail.com'
    );

-- Get a reservation with any id, fx 1

SELECT * FROM `Reservation` WHERE `Id`=1;

-- Update a reservation with any id, fx 1.-- Update any attribute fx the title or multiple attributes

UPDATE `Reservation` SET `Contact_email`= 'lili.lili@gmail.com';

-- I forgot to write condition 🙈 and now I have to change all emails

UPDATE `Reservation`
SET
    `Contact_email` = 'bjørn.b@gmail.com'
WHERE `Id` = 2;

UPDATE `Reservation`
SET
    `Contact_email` = 'sara.s@gmail.com'
WHERE `Id` = 3;

UPDATE `Reservation`
SET
    `Contact_email` = 'stefan.s@gmail.com'
WHERE `Id` = 5;

-- Delete a reservation with any id, fx 1

DELETE FROM `Reservation` WHERE `Id`=4;