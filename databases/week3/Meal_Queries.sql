-- Get all meals

SELECT * FROM `Meal`;

-- Add a new meal

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
        'Brunch pancake sharing board ',
        'Our sharing board makes a great brunch treat for the weekend.Make the pancakes
        and bacon ahead
        and keep warm
        while
        you assemble everything
        else.You can also improvise
        with seasonal ingredients',
        'Volden 38, Aarhus',
        '2023-03-09 10:00:00',
        4,
        200,
        '2023-03-02'
    ), (
        'Brunch pancake sharing board ',
        'Our sharing board makes a great brunch treat for the weekend.Make the pancakes
        and bacon ahead
        and keep warm
        while
        you assemble everything
        else.You can also improvise
        with seasonal ingredients',
        'Volden 38, Aarhus',
        '2023-03-09 10:00:00',
        4,
        200,
        '2023-03-02'
    );

-- Get a meal with any id, fx 1

SELECT * FROM `Meal` WHERE `Id`=1;

-- Update any attribute fx the title or multiple attributes

UPDATE `Meal`
SET
    `Max_reservations` = 2,
    `Price` = 100
WHERE `Id` = 3;

-- Delete a meal with any id, fx 1

DELETE FROM `Meal` WHERE `Id`=6;