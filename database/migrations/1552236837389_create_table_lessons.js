module.exports = {
    "up": `
        CREATE TABLE lessons(
            id INT AUTO_INCREMENT,
            name VARCHAR(256) NOT NULL,
            cafedra_id INT NOT NULL,
            teacher_id INT NOT NULL,
            PRIMARY KEY(id),
            FOREIGN KEY fk_cafedras_lessons(cafedra_id) REFERENCES cafedras(id) ON DELETE CASCADE,
            FOREIGN KEY fk_teacher_lessons(teacher_id) REFERENCES teachers(id) ON DELETE CASCADE
        )
    `,
    "down": "DROP TABLE lessons;"
}