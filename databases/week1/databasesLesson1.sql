-- homework

-- Select the names and phones of all users;

SELECT phone,name FROM user;

-- Select the name of the user with id=10;

SELECT name FROM user WHERE id = 10;

-- Find how many users exist in the database;

SELECT COUNT(*) FROM user;

-- Select the names of the first 5 users in the database;

SELECT name FROM user LIMIT 5 ;

-- Select the names of the last 3 users in the database;

SELECT name FROM user order by Id DESC LIMIT 3;

-- Sum all the ids in the user table;

SELECT SUM(id) FROM user;

-- Select all users and order them alphabetically by name;

SELECT name FROM user ORDER BY name ASC;

-- Find all tasks that include SQL either on the title -- or on the description;

SELECT title
FROM task
WHERE
    title LIKE '%SQL%'
    OR description LIKE '%SQL%';

-- Find the title of all tasks that the user Maryrose is responsible for;

SELECT task.title, user.id
FROM task
    INNER JOIN user ON task.user_id = user.id
WHERE
    user.name LIKE '%Maryrose %';