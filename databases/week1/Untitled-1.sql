
USE hwdatabases;
SHOW TABLES  ;

DESCRIBE  `status`;

SELECT * FROM task;

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES('learn SQL', 'keywords', '19.02.23', '23.02.23', '23.02.23 11:15', '2', '7');

UPDATE task
SET
    title  = 'blabla'
  
WHERE id=6;


UPDATE task SET due_date = '19.02.23 12:30' WHERE id=30;

UPDATE task SET status_id = '2' WHERE id=10;

UPDATE task SET status_id = '3' WHERE id=1;

SELECT * FROM task INNER JOIN user ON user.id = task.user_id WHERE user.email LIKE '% @spotify.com';

SELECT user.id, user.name, COUNT(task.id) FROM user 
JOIN task ON task.user_id = user.id
JOIN status ON status.id = task.status_id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started'
GROUP BY task.id;

SELECT * FROM task JOIN user ON user.id = task.user_id WHERE user.name = 'Maryrose Meadows' AND month(created)= 9;


SELECT month(task.created), COUNT(task.id) FROM task GROUP BY month(task.created);

DELETE FROM task WHERE id= 5;