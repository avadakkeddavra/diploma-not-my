module.exports = {
    "up": `
        CREATE TABLE schedule(
            id INT AUTO_INCREMENT NOT NULL,
            lesson_id INT NOT NULL,
            lesson_time_id INT NULL,
            day_id INT NULL,
            teacher_id INT NULL,
            semester TINYINT,
            denomirator TINYINT NOT NULL,
            group_id INT NOT NULL,
            class_id INT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY fk_class(class_id) REFERENCES classes(id) ON DELETE SET NULL,
            FOREIGN KEY fk_group(group_id) REFERENCES groups(id) ON DELETE CASCADE,
            FOREIGN KEY fk_lesson(lesson_id) REFERENCES lessons(id) ON DELETE CASCADE,
            FOREIGN KEY fk_lesson_time(lesson_time_id) REFERENCES lessons_time(id) ON DELETE SET NULL,
            FOREIGN KEY fk_day(day_id) REFERENCES days(id) ON DELETE SET NULL,
            FOREIGN KEY fk_teacher(teacher_id) REFERENCES teachers(id) ON DELETE SET NULL
        ) CHARACTER SET utf8 COLLATE utf8_general_ci;
    `,
    "down": "DROP TABLE schedule"
}