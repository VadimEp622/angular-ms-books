CREATE TABLE user (
    id BINARY(16) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

DELIMITER // 
CREATE TRIGGER before_insert_user BEFORE
INSERT
    ON user FOR EACH ROW BEGIN
SET
    NEW.id = UNHEX (REPLACE (UUID (), '-', ''));

END // 
DELIMITER;