const fs = require('node:fs');
const builder = require('./student/create');

// fs.readFile('./text.txt', (err, data) => {
//     console.log(err, 'ERR');
//
//     console.log(data.toString());
// });
//
// fs.appendFile('./text.txt', '\nHELLO CHAT', err => {
//     console.log(err, 'ERR');
//
// })
//
// fs.writeFile('./text.txt', 'WRITE FILE', (err)=>{ //перезаписує все
//     console.log(err, 'ERR');
// })
//
// fs.readFile('./text.txt', (err, data)=>{
//     fs.appendFile('./cope.txt', data, (err)=>{
//         console.log(err);
//     })
// })
//
// fs.mkdir('./students', err => {
//     console.log(err);
// })
//
// fs.appendFile('./students/data.json', JSON.stringify({name: 'Dima'}), err => {
//     console.log(err);
// })
//
// fs.unlink('./cope.txt', err => {   // видаляє
//     console.log(err);
// })
//
// fs.rmdir('./students', {recursive:true}, err => {
//     console.log(err);
// })
//
// fs.rename('./text.txt', './users.txt', err => {
//     console.log(err);
// })
//
// fs.rename('./users.txt', './student/users.txt', err => {
//     console.log(err);
// })
//
// fs.copyFile('./student/users.txt', './copy.txt', err => {
//     console.log(err);
// })

// fs.readdir('./student', (err, files) => {
//     console.log(files);
//
//     for (const file of files) {
//         fs.stat(`./student/${file}`, (err1, stats) => {
//             console.log('-----');
//             console.log(`./student/${file}`);
//             console.log(stats.isDirectory());
//
//             if(stats.isFile()){
//                 fs.readFile(`./student/${file}`, (err2, data) => {
//                     console.log(data.toString());
//                 })
//             }
//         })
//     }
//
// });

// fs.readdir('./student', {withFileTypes: true}, (err, files) => {
//     console.log(files);
//
//     for (const file of files) {
//         console.log(file.isFile());
//     }
// })

// fs.readdir('./hw_1', {withFileTypes: true}, (err, files) => {
//     console.log(err);
//     for (const file of files) {
//         console.log(file);
//         console.log(file.isFile());
//         if (file.isFile()){
//             fs.readFile(`./hw_1/${file}`, (err1, data) => {
//                 console.log(err1);
//                 console.log(data);
//             })
//         }
//     }
// })


// fs.readdir('./hw_1', (err, files) => {
//     console.log(err);
//     console.log(files);
// })


// let student = builder.studentBuilder('Sonya', 16);
//
// console.log(student)
// console.log(student.name)
// console.log(student.age)