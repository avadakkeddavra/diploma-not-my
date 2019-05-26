module.exports = {
    "up": `  CREATE TABLE student_groups(
            id INT AUTO_INCREMENT,
            name VARCHAR(256) NOT NULL,
            cafedra_id INT NOT NULL,
            PRIMARY KEY(id),
            FOREIGN KEY fk_groups_cafedras(cafedra_id) REFERENCES cafedras(id) ON DELETE CASCADE
        )`,
    "down": "DROP TABLE groups;"
}
