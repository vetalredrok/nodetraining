const fs = require('fs/promises');
const path = require('path');

const reader = async () => {
    const buffer = await fs.readFile(path.join(process.cwd(), 'database', 'user.json'));
    return JSON.parse(buffer.toString());
}

const writer = async (users) => {
    await fs.writeFile(path.join(process.cwd(), 'database', 'user.json'), JSON.stringify(users));
};

module.exports = {
    reader, writer
}