CREATE TABLE users(
    USERID int NOT NULL,
    NAME TEXT NOT NULL,
    USEREMAIL EMAIL(64) NOT NULL,
    Password character(64) NOT NULL,
    PRIMARY KEY (USERID)
)

INSERT INTO users(personname, email, password) VALUES
('Cameron', 'cam@gmail.com', 'testtest1'),
('Adam', 'adam@gmail.com', 'testtest1');