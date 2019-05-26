module.exports = {
    "up": `
        ALTER TABLE teachers ADD COLUMN token TEXT;
    `,
    "down": `
        ALTER TABLE teacheres DROP COLUMN token;
    `
}
