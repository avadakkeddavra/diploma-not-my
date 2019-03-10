module.exports = {
    "up": `
        CREATE TABLE cafedras(
            id INT AUTO_INCREMENT,
            name VARCHAR(256) NOT NULL,
            PRIMARY KEY(id)
        )
    `,
    "down": "DROP TABLE cafedras;"
}