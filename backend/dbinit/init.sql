CREATE TABLE user (
    _id BINARY(16) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    PRIMARY KEY (_id)
);

DELIMITER // 
CREATE TRIGGER before_insert_user BEFORE
INSERT
    ON user FOR EACH ROW BEGIN
SET
    NEW._id = UNHEX (REPLACE (UUID (), '-', ''));

END // 
DELIMITER;