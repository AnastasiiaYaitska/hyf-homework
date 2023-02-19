-- homework

-- Select the names and phones of all users;

SELECT phone,name FROM user;

-- Select the name of the user with id=10;

SELECT name FROM user WHERE id = 10;

-- Find how many users exist in the database;

SELECT COUNT(*) FROM user;

-- Select the names of the first 5 users in the database;

SELECT name FROM user ORDER BY id ASC LIMIT 5 ;

-- Select the names of the last 3 users in the database;

SELECT name FROM user order by Id DESC LIMIT 3;

-- Sum all the ids in the user table;

SELECT SUM(id) FROM user;

-- Select all users and order them alphabetically by name;

SELECT name FROM user ORDER BY name ASC;

SELECT * FROM user ORDER BY name ASC;

-- Find all tasks that include SQL either on the title -- or on the description;

SELECT *
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

-- Find how many tasks each user is responsible for;

SELECT name, COUNT(user_id)
FROM user
    JOIN task ON user_id = user.id
GROUP BY user_id;

-- Find how many tasks with a status=Done each user is responsible for;

SELECT
    user.id,
    user.name,
    COUNT(task.id)
FROM user
    JOIN task ON task.user_id = user.id
    JOIN status ON status.id = task.status_id
WHERE status.name = 'Done'
GROUP BY user_id;