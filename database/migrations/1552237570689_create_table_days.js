module.exports = {
    "up": (con, cb) => {
        con.query(
            `
                CREATE TABLE days(
                    id INT AUTO_INCREMENT NOT NULL,
                    name VARCHAR(100) NOT NULL,
                    PRIMARY KEY(id)
                ) CHARACTER SET utf8 COLLATE utf8_general_ci
            `,
            (err, res) => {
                if(!err) {
                    con.query(
                        `
                            INSERT INTO days (name) VALUES
                            ('понедельник'),
                            ('вторник'),
                            ('среда'),
                            ('четверг'),
                            ('пятница'),
                            ('суббота'),
                            ('воскресенье')
                        `,
                        (err, res) => {
                            if(err) {
                                console.log(err)
                            }
                            cb()
                        }
                    )
                }
            }
        )
    },
    "down": "DROP TABLE days;"
}