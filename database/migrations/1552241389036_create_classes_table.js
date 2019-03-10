module.exports = {
    "up": `
    
        CREATE TABLE classes(
            id INT AUTO_INCREMENT,
            name VARCHAR(256) UNIQUE,
            PRIMARY KEY(id)
        ) CHARACTER SET utf8 COLLATE utf8_general_ci;

    `,
    "down": ""
}