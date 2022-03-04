CREATE TABLE cards (
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(25) NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    PRIMARY KEY(id),
    INDEX `cat_idx` (`category`)
) ENGINE=InnoDB charset=utf8mb4;