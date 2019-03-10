module.exports = {
    "up": (con, cb) => {
        con.query(`
            CREATE TABLE lessons_time(
                id INT AUTO_INCREMENT NOT NULL,
                start TIME NOT NULL,
                end TIME NOT NULL,
                PRIMARY KEY (id)
            ) CHARACTER SET utf8 COLLATE utf8_general_ci;
        `, (err, result) => {
            if (err) {
                console.log(err);
            }
            if (!err) {
                con.query(`
                    INSERT INTO lessons_time (start, end) VALUES 
                    ('8:00', '9:20'),
                    ('9:35', '10:55'),
                    ('11:25', '12:45'),
                    ('12:55', '14:15'),
                    ('14:30', '15:50'),
                    ('16:05', '17:25')
                `, (error, res) => {
                    if (error) {
                        console.log(error);
                    }
                    cb();
                })
            }
            cb()
        })
    },
    "down": "DROP TABLE lessons_time"
}