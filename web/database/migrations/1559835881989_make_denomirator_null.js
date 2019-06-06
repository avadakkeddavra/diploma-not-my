module.exports = {
    "up": `
        ALTER TABLE schedule MODIFY COLUMN denomirator TINYINT DEFAULT NULL
    `,
    "down": `
        ALTER TABLE schedule MODIFY COLUMN denomirator TINYINT NOT NULL
    `
}