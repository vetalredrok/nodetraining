const fs = require('fs/promises');
const path = require('path');

// const foo = async () => {
//     const folderPath = path.join(__dirname, 'hw_1')
//     console.log(folderPath);
//
//     const files = await fs.readdir(folderPath, {withFileTypes: true});
//
//     for (const file of files) {
//         if (file.isFile()){
//             const filePath = path.join(folderPath, file.name)
//             const data = await fs.readFile(path.join(filePath));
//             const user = JSON.parse(data);
//             if (user.gender === 'female'){
//                 await fs.rename(filePath, path.join(__dirname, 'hw_1', 'Girls', file.name))
//             }
//         }
//     }
//
// }
//
// foo();

const foo = async () => {
    const folderPath = path.join(__dirname, 'hw_1')
    console.log(folderPath);

    const files = await fs.readdir(folderPath, {withFileTypes: true});

    for (const file of files) {

        if (file.isFile()){
            const filePath = path.join(folderPath, file.name);
            const data = await fs.readFile(path.join(filePath));

            const user = JSON.parse(data);

            if (user.gender === 'male'){
                await fs.rename(filePath, path.join(__dirname, 'hw_1', 'Boys', file.name))
            }
        }
    }
}

foo();