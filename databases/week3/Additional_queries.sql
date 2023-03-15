-- Get meals that has a price smaller than a specific price fx 90

SELECT * FROM `Meal` WHERE `Price`<200;

-- Get meals that still has available reservations

SELECT * FROM `Meal` WHERE `Max_reservations` > 0;

-- Get meals that partially match a title.Rød grød med will match the meal with the title Rød grød med fløde

SELECT * FROM `Meal` WHERE `Title` LIKE '%Beef%';

-- Get meals that has been created between two dates

USE Meal_Sharing ;

SELECT *
FROM `Meal`
WHERE
    `Created_date` BETWEEN '2023-03-01' AND '2023-03-02';

-- Get only specific number of meals fx return only 5 meals

SELECT * FROM `Meal` ORDER BY `Id` ASC LIMIT 2;

-- Get the meals that have good reviews

SELECT *
FROM `Meal`
    JOIN `Review` ON `Meal`.`Id` = `Review`.`Meal_id`
WHERE `Stars` > 4;

-- Get reservations for a specific meal sorted by created_date

SELECT *
FROM `Meal`
    JOIN `Reservation` ON `Meal`.`Id` = `Reservation`.`Meal_id`
WHERE `Meal`.`Id` = 1
ORDER BY
    `Reservation`.`Created_date` ASC;

--  Sort all meals by average number of stars in the reviews

SELECT
    `Meal`.`Title`,
    `Review`.`Title`,
    `Review`.`Stars`
FROM `Meal`
    JOIN `Review` ON `Meal`.`Id` = `Review`.`Meal_id`
ORDER BY `Stars`;