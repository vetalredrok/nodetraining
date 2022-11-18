import fs from "fs/promises";
import path from "path";

const reader = async () => {
    const buffer = await fs.readFile(path.join(__dirname, 'database', 'user.json'));
    return JSON.parse(buffer.toString());
}

const writer = async (users) => {
    await fs.writeFile(path.join(__dirname, 'database', 'user.json'), JSON.stringify(users));
};

module.exports = {
    reader, writer
}