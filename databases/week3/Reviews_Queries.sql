-- Get all reviews

SELECT * FROM `Review`;

-- Add a new review Get a review with any id, fx 1

INSERT INTO
    Review (
        Title,
        Description,
        Meal_id,
        Stars,
        Created_date
    )
VALUES (
        'Perfect',
        'Smagter Perfect.',
        4,
        5,
        '2023-03-20'
    ), (
        'I expected more',
        'It wose delicious but not enough for four.',
        4,
        5,
        '2023-03-10'
    );

-- Update a review with any id, fx 1. Update   any attribute fx the title or multiple attributes

UPDATE `Review` SET `Stars`=3 WHERE `Id`= 4;

-- Delete a review with any id, fx 1

DELETE FROM `Review` WHERE `Id`=4;