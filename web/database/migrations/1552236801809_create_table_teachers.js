module.exports = {
    "up": `
        CREATE TABLE teachers(
            id INT AUTO_INCREMENT,
            name VARCHAR(256) NOT NULL,
            cafedra_id INT NOT NULL,
            position VARCHAR(256) NULL,
            PRIMARY KEY(id),
            FOREIGN KEY fk_teachers_cafedras(cafedra_id) REFERENCES cafedras(id) ON DELETE CASCADE
        )
    `,
    "down": "DROP TABLE teachers;"
}